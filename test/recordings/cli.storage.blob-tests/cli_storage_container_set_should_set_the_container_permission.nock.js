// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:37:50 GMT',
  etag: '"0x8D40DC12D6119A9"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b79b4d28-0001-000a-80aa-3f8f8e000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:37:50 GMT',
  etag: '"0x8D40DC12D6119A9"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b79b4d28-0001-000a-80aa-3f8f8e000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest?restype=container&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:38:07 GMT',
  etag: '"0x8D40DC1373BA2D8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1003eb1d-0001-003b-45aa-3fd459000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest?restype=container&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:38:07 GMT',
  etag: '"0x8D40DC1373BA2D8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1003eb1d-0001-003b-45aa-3fd459000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:38:07 GMT',
  etag: '"0x8D40DC1373BA2D8"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bf8cb6eb-0001-001c-26aa-3f4e10000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Wed, 16 Nov 2016 01:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:38:07 GMT',
  etag: '"0x8D40DC1373BA2D8"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bf8cb6eb-0001-001c-26aa-3f4e10000000',
  'x-ms-version': '2015-12-11',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Wed, 16 Nov 2016 01:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:38:07 GMT',
  etag: '"0x8D40DC1373BA2D8"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '685b1c01-0001-0010-04aa-3fa0e1000000',
  'x-ms-version': '2015-12-11',
  'x-ms-blob-public-access': 'container',
  date: 'Wed, 16 Nov 2016 01:38:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:38:07 GMT',
  etag: '"0x8D40DC1373BA2D8"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '685b1c01-0001-0010-04aa-3fa0e1000000',
  'x-ms-version': '2015-12-11',
  'x-ms-blob-public-access': 'container',
  date: 'Wed, 16 Nov 2016 01:38:07 GMT',
  connection: 'close' });
 return result; }]];