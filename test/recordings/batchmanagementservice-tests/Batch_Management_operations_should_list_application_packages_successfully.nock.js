// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions?api-version=2018-12-01')
  .reply(200, "{\"value\":[{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0\",\"name\":\"v1.0\",\"etag\":\"W/\\\"0x8D67759F0AF3FCA\\\"\",\"properties\":{\"state\":\"Pending\"}},{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0\",\"name\":\"v2.0\",\"etag\":\"W/\\\"0x8D67759F1C0A446\\\"\",\"properties\":{\"state\":\"Pending\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '707',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': '4cdb30c2-988d-4d93-a924-9cdf41bc7020',
  'x-ms-request-id': 'bcb48890-b398-4e25-8e93-98b02c512e64',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001551Z:4cdb30c2-988d-4d93-a924-9cdf41bc7020',
  date: 'Fri, 11 Jan 2019 00:15:51 GMT',
  connection: 'close' });
 return result; }]];