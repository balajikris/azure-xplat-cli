// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4be8920b-2978-43d7-ab14-04d8549c1d05',
    name: 'OSTC Shanghai Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension845/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"764747f6-120f-4f13-85ce-cc855e78296f\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli3e23ec47a9b534ec-os-1453094330942\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext9739.blob.core.windows.net/xplatstoragecntext1121/cli3e23ec47a9b534ec-os-1453094330942.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension845/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext9739.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension845/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1640',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_130965767452860614',
  'x-ms-request-id': '85b54cee-f9c5-4f28-8fd7-6a9398d07138',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'cadd1a6e-a22b-4565-a67a-998e463df26c',
  'x-ms-routing-request-id': 'EASTUS:20160118T052143Z:cadd1a6e-a22b-4565-a67a-998e463df26c',
  date: 'Mon, 18 Jan 2016 05:21:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension845/providers/Microsoft.Storage/storageAccounts/xplatstoragext9739/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"74TmUPG0FI54HAZdhxFOm88ErPAjJ3hVj6WfU5rqoJX4gjeNyO8DZxBxNNXjg5kRyGua4mxsvzKBKnkuF+jdzQ==\",\"key2\":\"QtUBVzpCkyXxTRpxhzFQTbu8PNrZqEZGo//f71Pecq7xxeXtL8Q0tHRGV9JSdwsU+eGGwYMmvEg6RwO84/X4Dg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c27fb833-f779-433b-9cc8-1ac89134d252',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'c27fb833-f779-433b-9cc8-1ac89134d252',
  'x-ms-routing-request-id': 'EASTUS:20160118T052144Z:c27fb833-f779-433b-9cc8-1ac89134d252',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jan 2016 05:21:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension845/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/LinuxDiagnostic?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.2\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":null,\"storageAccount\":\"xplatstoragext9739\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension845/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/bcb19a57-435e-45fb-b22e-6f00ec9b9dfe?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_130965767452860614',
  'x-ms-request-id': 'bcb19a57-435e-45fb-b22e-6f00ec9b9dfe',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b0dfe4c0-b3b6-4a88-a866-88897289bc51',
  'x-ms-routing-request-id': 'EASTUS:20160118T052145Z:b0dfe4c0-b3b6-4a88-a866-88897289bc51',
  date: 'Mon, 18 Jan 2016 05:21:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/bcb19a57-435e-45fb-b22e-6f00ec9b9dfe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"bcb19a57-435e-45fb-b22e-6f00ec9b9dfe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-18T05:21:44.0461598+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_130965767452860614',
  'x-ms-request-id': '433cd2fc-b709-4d00-ac4d-4a5401ab2203',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': 'b4c0ad8d-fb46-4ba4-a8da-fd3474ddd8fe',
  'x-ms-routing-request-id': 'EASTUS:20160118T052215Z:b4c0ad8d-fb46-4ba4-a8da-fd3474ddd8fe',
  date: 'Mon, 18 Jan 2016 05:22:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/bcb19a57-435e-45fb-b22e-6f00ec9b9dfe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"bcb19a57-435e-45fb-b22e-6f00ec9b9dfe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-18T05:21:44.0461598+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_130965767452860614',
  'x-ms-request-id': 'c3afd8cc-7a61-4ae1-9ad8-27960e457d0a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '7cf7a5a0-11ca-47ed-8981-6c4e4dab9bfd',
  'x-ms-routing-request-id': 'EASTUS:20160118T052245Z:7cf7a5a0-11ca-47ed-8981-6c4e4dab9bfd',
  date: 'Mon, 18 Jan 2016 05:22:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/bcb19a57-435e-45fb-b22e-6f00ec9b9dfe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"bcb19a57-435e-45fb-b22e-6f00ec9b9dfe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-18T05:21:44.0461598+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_130965767452860614',
  'x-ms-request-id': '1a61569c-b3ab-42fd-9768-6219372a8454',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '0a6d9727-f352-4d59-b0ba-4c2c575b4176',
  'x-ms-routing-request-id': 'EASTUS:20160118T052316Z:0a6d9727-f352-4d59-b0ba-4c2c575b4176',
  date: 'Mon, 18 Jan 2016 05:23:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/bcb19a57-435e-45fb-b22e-6f00ec9b9dfe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"bcb19a57-435e-45fb-b22e-6f00ec9b9dfe\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-18T05:21:44.0461598+00:00\",\r\n  \"endTime\": \"2016-01-18T05:23:22.7811099+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_130965767452860614',
  'x-ms-request-id': 'ca3f5f64-35b1-44a0-8cdf-12447b453c0e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '7f1a885a-1136-426c-a020-fe1ceb1aab32',
  'x-ms-routing-request-id': 'EASTUS:20160118T052346Z:7f1a885a-1136-426c-a020-fe1ceb1aab32',
  date: 'Mon, 18 Jan 2016 05:23:45 GMT' });
 return result; }]];