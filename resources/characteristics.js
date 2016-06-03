/* The characteristics table was copied (to the clipboard) from
 * https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicsHome.aspx
 * and converted to JSON using:
 * pbpaste | awk -F $'\t' '{ gsub (" ", "", $1); gsub ("0x","",$3); print "  \"0000" $3 "-0000-1000-8000-00805f9b34fb\": \"" $1 "\","}' | pbcopy
 */
module.exports = {
  "00002a7e-0000-1000-8000-00805f9b34fb": "AerobicHeartRateLowerLimit",
  "00002a84-0000-1000-8000-00805f9b34fb": "AerobicHeartRateUpperLimit",
  "00002a7f-0000-1000-8000-00805f9b34fb": "AerobicThreshold",
  "00002a80-0000-1000-8000-00805f9b34fb": "Age",
  "00002a5a-0000-1000-8000-00805f9b34fb": "Aggregate",
  "00002a43-0000-1000-8000-00805f9b34fb": "AlertCategoryID",
  "00002a42-0000-1000-8000-00805f9b34fb": "AlertCategoryIDBitMask",
  "00002a06-0000-1000-8000-00805f9b34fb": "AlertLevel",
  "00002a44-0000-1000-8000-00805f9b34fb": "AlertNotificationControlPoint",
  "00002a3f-0000-1000-8000-00805f9b34fb": "AlertStatus",
  "00002ab3-0000-1000-8000-00805f9b34fb": "Altitude",
  "00002a81-0000-1000-8000-00805f9b34fb": "AnaerobicHeartRateLowerLimit",
  "00002a82-0000-1000-8000-00805f9b34fb": "AnaerobicHeartRateUpperLimit",
  "00002a83-0000-1000-8000-00805f9b34fb": "AnaerobicThreshold",
  "00002a58-0000-1000-8000-00805f9b34fb": "Analog",
  "00002a73-0000-1000-8000-00805f9b34fb": "ApparentWindDirection",
  "00002a72-0000-1000-8000-00805f9b34fb": "ApparentWindSpeed",
  "00002a01-0000-1000-8000-00805f9b34fb": "Appearance",
  "00002aa3-0000-1000-8000-00805f9b34fb": "BarometricPressureTrend",
  "00002a19-0000-1000-8000-00805f9b34fb": "BatteryLevel",
  "00002a49-0000-1000-8000-00805f9b34fb": "BloodPressureFeature",
  "00002a35-0000-1000-8000-00805f9b34fb": "BloodPressureMeasurement",
  "00002a9b-0000-1000-8000-00805f9b34fb": "BodyCompositionFeature",
  "00002a9c-0000-1000-8000-00805f9b34fb": "BodyCompositionMeasurement",
  "00002a38-0000-1000-8000-00805f9b34fb": "BodySensorLocation",
  "00002aa4-0000-1000-8000-00805f9b34fb": "BondManagementControlPoint",
  "00002aa5-0000-1000-8000-00805f9b34fb": "BondManagementFeature",
  "00002a22-0000-1000-8000-00805f9b34fb": "BootKeyboardInputReport",
  "00002a32-0000-1000-8000-00805f9b34fb": "BootKeyboardOutputReport",
  "00002a33-0000-1000-8000-00805f9b34fb": "BootMouseInputReport",
  "00002aa6-0000-1000-8000-00805f9b34fb": "CentralAddressResolution",
  "00002aa8-0000-1000-8000-00805f9b34fb": "CGMFeature",
  "00002aa7-0000-1000-8000-00805f9b34fb": "CGMMeasurement",
  "00002aab-0000-1000-8000-00805f9b34fb": "CGMSessionRunTime",
  "00002aaa-0000-1000-8000-00805f9b34fb": "CGMSessionStartTime",
  "00002aac-0000-1000-8000-00805f9b34fb": "CGMSpecificOpsControlPoint",
  "00002aa9-0000-1000-8000-00805f9b34fb": "CGMStatus",
  "00002a5c-0000-1000-8000-00805f9b34fb": "CSCFeature",
  "00002a5b-0000-1000-8000-00805f9b34fb": "CSCMeasurement",
  "00002a2b-0000-1000-8000-00805f9b34fb": "CurrentTime",
  "00002a66-0000-1000-8000-00805f9b34fb": "CyclingPowerControlPoint",
  "00002a65-0000-1000-8000-00805f9b34fb": "CyclingPowerFeature",
  "00002a63-0000-1000-8000-00805f9b34fb": "CyclingPowerMeasurement",
  "00002a64-0000-1000-8000-00805f9b34fb": "CyclingPowerVector",
  "00002a99-0000-1000-8000-00805f9b34fb": "DatabaseChangeIncrement",
  "00002a85-0000-1000-8000-00805f9b34fb": "DateofBirth",
  "00002a86-0000-1000-8000-00805f9b34fb": "DateofThresholdAssessment",
  "00002a08-0000-1000-8000-00805f9b34fb": "DateTime",
  "00002a0a-0000-1000-8000-00805f9b34fb": "DayDateTime",
  "00002a09-0000-1000-8000-00805f9b34fb": "DayofWeek",
  "00002a7d-0000-1000-8000-00805f9b34fb": "DescriptorValueChanged",
  "00002a00-0000-1000-8000-00805f9b34fb": "DeviceName",
  "00002a7b-0000-1000-8000-00805f9b34fb": "DewPoint",
  "00002a56-0000-1000-8000-00805f9b34fb": "Digital",
  "00002a0d-0000-1000-8000-00805f9b34fb": "DSTOffset",
  "00002a6c-0000-1000-8000-00805f9b34fb": "Elevation",
  "00002a87-0000-1000-8000-00805f9b34fb": "EmailAddress",
  "00002a0c-0000-1000-8000-00805f9b34fb": "ExactTime256",
  "00002a88-0000-1000-8000-00805f9b34fb": "FatBurnHeartRateLowerLimit",
  "00002a89-0000-1000-8000-00805f9b34fb": "FatBurnHeartRateUpperLimit",
  "00002a26-0000-1000-8000-00805f9b34fb": "FirmwareRevisionString",
  "00002a8a-0000-1000-8000-00805f9b34fb": "FirstName",
  "00002a8b-0000-1000-8000-00805f9b34fb": "FiveZoneHeartRateLimits",
  "00002ab2-0000-1000-8000-00805f9b34fb": "FloorNumber",
  "00002a8c-0000-1000-8000-00805f9b34fb": "Gender",
  "00002a51-0000-1000-8000-00805f9b34fb": "GlucoseFeature",
  "00002a18-0000-1000-8000-00805f9b34fb": "GlucoseMeasurement",
  "00002a34-0000-1000-8000-00805f9b34fb": "GlucoseMeasurementContext",
  "00002a74-0000-1000-8000-00805f9b34fb": "GustFactor",
  "00002a27-0000-1000-8000-00805f9b34fb": "HardwareRevisionString",
  "00002a39-0000-1000-8000-00805f9b34fb": "HeartRateControlPoint",
  "00002a8d-0000-1000-8000-00805f9b34fb": "HeartRateMax",
  "00002a37-0000-1000-8000-00805f9b34fb": "HeartRateMeasurement",
  "00002a7a-0000-1000-8000-00805f9b34fb": "HeatIndex",
  "00002a8e-0000-1000-8000-00805f9b34fb": "Height",
  "00002a4c-0000-1000-8000-00805f9b34fb": "HIDControlPoint",
  "00002a4a-0000-1000-8000-00805f9b34fb": "HIDInformation",
  "00002a8f-0000-1000-8000-00805f9b34fb": "HipCircumference",
  "00002aba-0000-1000-8000-00805f9b34fb": "HTTPControlPoint",
  "00002ab9-0000-1000-8000-00805f9b34fb": "HTTPEntityBody",
  "00002ab7-0000-1000-8000-00805f9b34fb": "HTTPHeaders",
  "00002ab8-0000-1000-8000-00805f9b34fb": "HTTPStatusCode",
  "00002abb-0000-1000-8000-00805f9b34fb": "HTTPSSecurity",
  "00002a6f-0000-1000-8000-00805f9b34fb": "Humidity",
  "00002a2a-0000-1000-8000-00805f9b34fb": "IEEE11073-20601RegulatoryCertificationDataList",
  "00002aad-0000-1000-8000-00805f9b34fb": "IndoorPositioningConfiguration",
  "00002a36-0000-1000-8000-00805f9b34fb": "IntermediateCuffPressure",
  "00002a1e-0000-1000-8000-00805f9b34fb": "IntermediateTemperature",
  "00002a77-0000-1000-8000-00805f9b34fb": "Irradiance",
  "00002aa2-0000-1000-8000-00805f9b34fb": "Language",
  "00002a90-0000-1000-8000-00805f9b34fb": "LastName",
  "00002aae-0000-1000-8000-00805f9b34fb": "Latitude",
  "00002a6b-0000-1000-8000-00805f9b34fb": "LNControlPoint",
  "00002a6a-0000-1000-8000-00805f9b34fb": "LNFeature",
  "00002ab1-0000-1000-8000-00805f9b34fb": "LocalEastCoordinate",
  "00002ab0-0000-1000-8000-00805f9b34fb": "LocalNorthCoordinate",
  "00002a0f-0000-1000-8000-00805f9b34fb": "LocalTimeInformation",
  "00002a67-0000-1000-8000-00805f9b34fb": "LocationandSpeed",
  "00002ab5-0000-1000-8000-00805f9b34fb": "LocationName",
  "00002aaf-0000-1000-8000-00805f9b34fb": "Longitude",
  "00002a2c-0000-1000-8000-00805f9b34fb": "MagneticDeclination",
  "00002aa0-0000-1000-8000-00805f9b34fb": "MagneticFluxDensity-2D",
  "00002aa1-0000-1000-8000-00805f9b34fb": "MagneticFluxDensity-3D",
  "00002a29-0000-1000-8000-00805f9b34fb": "ManufacturerNameString",
  "00002a91-0000-1000-8000-00805f9b34fb": "MaximumRecommendedHeartRate",
  "00002a21-0000-1000-8000-00805f9b34fb": "MeasurementInterval",
  "00002a24-0000-1000-8000-00805f9b34fb": "ModelNumberString",
  "00002a68-0000-1000-8000-00805f9b34fb": "Navigation",
  "00002a46-0000-1000-8000-00805f9b34fb": "NewAlert",
  "00002ac5-0000-1000-8000-00805f9b34fb": "ObjectActionControlPoint",
  "00002ac8-0000-1000-8000-00805f9b34fb": "ObjectChanged",
  "00002ac1-0000-1000-8000-00805f9b34fb": "ObjectFirst-Created",
  "00002ac3-0000-1000-8000-00805f9b34fb": "ObjectID",
  "00002ac2-0000-1000-8000-00805f9b34fb": "ObjectLast-Modified",
  "00002ac6-0000-1000-8000-00805f9b34fb": "ObjectListControlPoint",
  "00002ac7-0000-1000-8000-00805f9b34fb": "ObjectListFilter",
  "00002abe-0000-1000-8000-00805f9b34fb": "ObjectName",
  "00002ac4-0000-1000-8000-00805f9b34fb": "ObjectProperties",
  "00002ac0-0000-1000-8000-00805f9b34fb": "ObjectSize",
  "00002abf-0000-1000-8000-00805f9b34fb": "ObjectType",
  "00002abd-0000-1000-8000-00805f9b34fb": "OTSFeature",
  "00002a04-0000-1000-8000-00805f9b34fb": "PeripheralPreferredConnectionParameters",
  "00002a02-0000-1000-8000-00805f9b34fb": "PeripheralPrivacyFlag",
  "00002a5f-0000-1000-8000-00805f9b34fb": "PLXContinuousMeasurement",
  "00002a60-0000-1000-8000-00805f9b34fb": "PLXFeatures",
  "00002a5e-0000-1000-8000-00805f9b34fb": "PLXSpot-CheckMeasurement",
  "00002a50-0000-1000-8000-00805f9b34fb": "PnPID",
  "00002a75-0000-1000-8000-00805f9b34fb": "PollenConcentration",
  "00002a69-0000-1000-8000-00805f9b34fb": "PositionQuality",
  "00002a6d-0000-1000-8000-00805f9b34fb": "Pressure",
  "00002a4e-0000-1000-8000-00805f9b34fb": "ProtocolMode",
  "00002a78-0000-1000-8000-00805f9b34fb": "Rainfall",
  "00002a03-0000-1000-8000-00805f9b34fb": "ReconnectionAddress",
  "00002a52-0000-1000-8000-00805f9b34fb": "RecordAccessControlPoint",
  "00002a14-0000-1000-8000-00805f9b34fb": "ReferenceTimeInformation",
  "00002a4d-0000-1000-8000-00805f9b34fb": "Report",
  "00002a4b-0000-1000-8000-00805f9b34fb": "ReportMap",
  "00002a92-0000-1000-8000-00805f9b34fb": "RestingHeartRate",
  "00002a40-0000-1000-8000-00805f9b34fb": "RingerControlPoint",
  "00002a41-0000-1000-8000-00805f9b34fb": "RingerSetting",
  "00002a54-0000-1000-8000-00805f9b34fb": "RSCFeature",
  "00002a53-0000-1000-8000-00805f9b34fb": "RSCMeasurement",
  "00002a55-0000-1000-8000-00805f9b34fb": "SCControlPoint",
  "00002a4f-0000-1000-8000-00805f9b34fb": "ScanIntervalWindow",
  "00002a31-0000-1000-8000-00805f9b34fb": "ScanRefresh",
  "00002a5d-0000-1000-8000-00805f9b34fb": "SensorLocation",
  "00002a25-0000-1000-8000-00805f9b34fb": "SerialNumberString",
  "00002a05-0000-1000-8000-00805f9b34fb": "ServiceChanged",
  "00002a28-0000-1000-8000-00805f9b34fb": "SoftwareRevisionString",
  "00002a93-0000-1000-8000-00805f9b34fb": "SportTypeforAerobicandAnaerobicThresholds",
  "00002a47-0000-1000-8000-00805f9b34fb": "SupportedNewAlertCategory",
  "00002a48-0000-1000-8000-00805f9b34fb": "SupportedUnreadAlertCategory",
  "00002a23-0000-1000-8000-00805f9b34fb": "SystemID",
  "00002abc-0000-1000-8000-00805f9b34fb": "TDSControlPoint",
  "00002a6e-0000-1000-8000-00805f9b34fb": "Temperature",
  "00002a1c-0000-1000-8000-00805f9b34fb": "TemperatureMeasurement",
  "00002a1d-0000-1000-8000-00805f9b34fb": "TemperatureType",
  "00002a94-0000-1000-8000-00805f9b34fb": "ThreeZoneHeartRateLimits",
  "00002a12-0000-1000-8000-00805f9b34fb": "TimeAccuracy",
  "00002a13-0000-1000-8000-00805f9b34fb": "TimeSource",
  "00002a16-0000-1000-8000-00805f9b34fb": "TimeUpdateControlPoint",
  "00002a17-0000-1000-8000-00805f9b34fb": "TimeUpdateState",
  "00002a11-0000-1000-8000-00805f9b34fb": "TimewithDST",
  "00002a0e-0000-1000-8000-00805f9b34fb": "TimeZone",
  "00002a71-0000-1000-8000-00805f9b34fb": "TrueWindDirection",
  "00002a70-0000-1000-8000-00805f9b34fb": "TrueWindSpeed",
  "00002a95-0000-1000-8000-00805f9b34fb": "TwoZoneHeartRateLimit",
  "00002a07-0000-1000-8000-00805f9b34fb": "TxPowerLevel",
  "00002ab4-0000-1000-8000-00805f9b34fb": "Uncertainty",
  "00002a45-0000-1000-8000-00805f9b34fb": "UnreadAlertStatus",
  "00002ab6-0000-1000-8000-00805f9b34fb": "URI",
  "00002a9f-0000-1000-8000-00805f9b34fb": "UserControlPoint",
  "00002a9a-0000-1000-8000-00805f9b34fb": "UserIndex",
  "00002a76-0000-1000-8000-00805f9b34fb": "UVIndex",
  "00002a96-0000-1000-8000-00805f9b34fb": "VO2Max",
  "00002a97-0000-1000-8000-00805f9b34fb": "WaistCircumference",
  "00002a98-0000-1000-8000-00805f9b34fb": "Weight",
  "00002a9d-0000-1000-8000-00805f9b34fb": "WeightMeasurement",
  "00002a9e-0000-1000-8000-00805f9b34fb": "WeightScaleFeature",
  "00002a79-0000-1000-8000-00805f9b34fb": "WindChill",
}
