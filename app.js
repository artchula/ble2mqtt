const debug = require('debug')('ble2mqtt');
const _ = require('underscore');
const _mqtt = require('mqtt');
const bluez = require('./Bluez');
const config = require('./config');
const servicesList = require('./resources/services');
const characteristicsList = require('./resources/characteristics');
const utils = require('./utils');

var adapters = {}
var characteristics = {};

var mqtt = _mqtt.connect(config.mqtt.server);

/* Add user-defined names from the configuration file */
_.extend(servicesList, config.ble.services);
_.extend(characteristicsList, config.ble.characteristics);

function getDeviceName(device) {
  return device[config.mqtt.topics.device_name];
}

function getServiceName(service) {
  var s = servicesList[service.UUID];
  return s ? s.name.replace(/\s/g, '') : service.UUID;
}

function getCharacteristicName(characteristic) {
  var c = characteristicsList[characteristic.UUID]
  return c ? c.name.replace(/\s/g, '') : characteristic.UUID;
}

function getCharacteristicValue(characteristic) {
  var c = characteristicsList[characteristic.UUID]
  var res = utils.bufferToGattTypes(new Buffer(characteristic.Value),
    c && c.types ? c.types : []);

  return (res.length == 1 ? res[0] : res).toString();
}

function shouldConnect(device) {
  /* Action taken if device is in the list */
  var action = config.ble.whitelist ? true : false;
  var list = config.ble.whitelist ? config.ble.whitelist : config.ble.blacklist;
  var str = device.Address;

  /* No list was defined, accept all */
  if (!list)
    return true;

  return _(list).find(item => str.search(item) !== -1) ? action : !action;
}

mqtt.on('connect', (connack) => debug('Connected to MQTT server'));

mqtt.on('message', (topic, message) => {
  var c = characteristics[topic];
  if (!c)
    return;

  /* Convert value back to byte array */
  var newBuf = utils.gattTypesToBuffer(JSON.parse('[' + message + ']'),
    c.Value.length, characteristicsList[c.UUID].types);

  /* Is this a different value? */
  if (newBuf.compare(new Buffer(c.Value)) == 0)
    return;

  /* Write the new value and read it back */
  debug('Writing "' + message + '" to ' + getCharacteristicName(c));
  c.Write(Array.prototype.slice.call(newBuf.slice(), 0), () => c.Read());
});

bluez.on('adapter', (adapter) => {
  debug('Found new adapter: ' + adapter);
  adapters[adapter.path] = adapter;

  adapter.on('device', (device) => {
    if (!shouldConnect(device)) return;
    debug('Found new device: ' + device.Address + ' (' + device.Alias +')');

    device.on('service', (service) => {
      debug('Found new service: ' + [getDeviceName(device),
        getServiceName(service)].join('/'));

      service.on('characteristic', (characteristic) => {
        var get_topic = [getDeviceName(device), getServiceName(service),
          getCharacteristicName(characteristic)].join('/');
        var set_topic = get_topic + config.mqtt.topics.set_suffix;
        debug('Found new characteristic: ' + get_topic + ' (' +
          characteristic.Flags + ')');

        /* Listen on notifications */
        if (characteristic.Flags.indexOf('notify') !== -1)
          characteristic.NotifyStart();

        /* Read initial value */
        if (characteristic.Flags.indexOf('read') !== -1)
          characteristic.Read(); /* We'll get the value in the Value property */

        characteristic.on('propertyChanged', (key, value) => {
          if (key === 'Value') {
            var val = getCharacteristicValue(characteristic);

            debug('Got new value for ' + get_topic + ': ' + val);
            mqtt.publish(get_topic, val, config.mqtt.publish);
          }
        });

        characteristic.on('removed', () => {
          /* The characteristic was removed, unsubscribe from the MQTT topic */
          debug('Removed characteristic: ' + characteristic.UUID);
          mqtt.unsubscribe(set_topic);
          delete characteristics[set_topic];
        });

        /* If characteristic is writable, allow setting it via MQTT */
        if (characteristic.Flags.indexOf('write') !== -1) {
          characteristics[set_topic] = characteristic;
          mqtt.subscribe(set_topic);
        }
      });
    });

    device.on('propertyChanged', (key, value) => {
      if (key === 'Connected' && value === false) {
        debug('Disconnected from ' + device);
        /* We'll now remove the device. This will also remove all of the
         * services and characteristics of this device which will remove the
         * event listeners and allow cleaning up the MQTT related subscriptions.
         * If the device is still around, we'll discover it again, reconnect and
         * resubscribe to the MQTT topics */
        setImmediate(() => adapter.removeDevice(device));
      }
    });

    device.Connect((err) => {
      if (err) {
        debug('Failed connecting to ' + device + ': ' + err);
        /* Remove the device so it will be rediscovered when it's available */
        setImmediate(() => adapter.removeDevice(device));
        return;
      }

      debug('Connected to ' + device);
    });
  });

  adapter.on('removed', () => {
    debug(adapter + ' was removed');
    delete adapters[adapter.path];
  });

  adapter.powerOn((err) => {
    if (err) return;

    debug('Powered on ' + adapter);
    adapter.discoveryFilterSet({ 'Transport': 'le' }, (err) => {
      if (err) return;

      debug('Filtered only LE devices');
      adapter.discoveryStart((err) => {
        if (err) return;

        debug('Started discovery on ' + adapter);
      });
    })
  });
});

function cleanupAndExit() {
  debug('Shutting down...');
  var tasks = 0;

  /* Disconnect from MQTT server */
  mqtt.end();

  /* Turn off all adapters (will also disconnect from devices) */
  _(adapters).each((adapter) => {
    tasks++;
    adapter.powerOff(() => tasks--);
  });

  /* Wait for operations to end, then exit */
  setInterval(() => { if (tasks == 0) process.exit(0); }, 100);
}
process.on('SIGINT', cleanupAndExit);
process.on('SIGTERM', cleanupAndExit);
