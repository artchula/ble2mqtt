/* This script is used to get the list of approved GATT services and
 * characteristics and convert it to JSON format. It's simplistic by design to
 * keep the implementation simple and so it won't require any additional
 * packages (e.g. XML parser) */

const https = require('https');
const fs = require('fs');
const path = require('path');
const util = require('util');
const debug = require('debug')('GattNumbersToJson')

const GATT_URL = 'https://developer.bluetooth.org/gatt'
const SERVICES_URL = GATT_URL + '/services/Pages/ServicesHome.aspx';
const CHARACTERISTICS_URL = GATT_URL +
  '/characteristics/Pages/CharacteristicsHome.aspx'
const CHARACTERISTIC_URL = GATT_URL + '/characteristics/Documents/'

const SERVICES_FILE = 'resources/services.json';
const CHARACTERISTICS_FILE = 'resources/characteristics.json';

var services = {
  '//': 'This file was automatically generated by ' + __filename
}
var characteristics = {
  '//': 'This file was automatically generated by ' + __filename
}

function buildBluetoothUuid(number) {
  return util.format('0000%s-0000-1000-8000-00805f9b34fb',
    parseInt(number, 16).toString(16));
}

function buildGattRegex(type) {
  /* Nasty, nasty regex to parse a service/characterisitc row in the HTML.
  /* Note that the Sensor Location characteristic has a typo and is presented as
   * org.blueooth... so we need our Regex to catch that as well */
  return new RegExp('<td[^>]*>[^<]*<a[^>]*>([^<]*)</a>[^<]*</td' +
    '>[^<]*<td[^>]*>(org.bluet?ooth.' + type + '.[^<]*)</td>[^<]*' +
    '<td[^>]*>([^<]*)<', 'gi');
}

function download(url, cb) {
  https.get(url, function(res) {
    var body ='';

    res.on('data', (chunk) => body = body + chunk);
    res.on('end', () => cb(body));
  }).on('error', (e) => {
    console.error(e);
    process.exit(-1);
  });
}

function saveObjectToFile(object, file) {
  var dir = path.dirname(file);
  var stat;

  /* Create directory, if needed */
  try { stat = fs.statSync(dir); } catch(err) { } 
  if (!stat)
    fs.mkdirSync(dir);

  debug('Writing out ' + file);
  fs.writeFileSync(file, JSON.stringify(object, null, 2));
}

function parseServices(str, file) {
  var regex = buildGattRegex('service');
  var res;

  while ((res = regex.exec(str))) {
    /* res[1] = Name, res[2] = Type, res[3] = Assigned Number */
    services[buildBluetoothUuid(res[3])] = { name: res[1] };
  }

  /* When done, write results to disk */
  process.on('exit', () => saveObjectToFile(services, file));
}

function parseCharacteristics(str, file) {
  var regex = buildGattRegex('characteristic');
  var res;

  while ((res = regex.exec(str))) (() => {
    /* res[1] = Name, res[2] = Type, res[3] = Assigned Number */
    var name = res[1];
    var type = res[2];
    var uuid = buildBluetoothUuid(res[3]);
    characteristics[uuid] = { name: name, types: [] };

    /* Get characteristic definition to get its type */
    debug('Getting definition for ' + type);
    download(
      CHARACTERISTIC_URL + type.replace('blueooth', 'bluetooth') + '.xml',
      function (body) {
        var format = /<Format>([^<]*)<\/format>/gi
        var res;

        while ((res = format.exec(body)))
	  characteristics[uuid].types.push(res[1]);
      }
    );
  })();

  /* When done, write results to disk */
  process.on('exit', () => saveObjectToFile(characteristics, file));
}

function getList(fileName, url, generator) {
  var stat;

  /* Check if the output file already exists */
  try { stat = fs.statSync(fileName); } catch(err) { }

  /* The file already exists, nothing to do */
  if (stat) {
    debug(fileName + ' already exists, nothing to do.');
    return;
  }

  /* Create the file */
  debug('Generating ' + fileName + ' from ' + url);
  download(url, (body) => generator(body, fileName));
}

getList(SERVICES_FILE, SERVICES_URL, parseServices);
getList(CHARACTERISTICS_FILE, CHARACTERISTICS_URL, parseCharacteristics);