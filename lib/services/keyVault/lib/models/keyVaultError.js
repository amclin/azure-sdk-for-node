/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the KeyVaultError class.
 * @constructor
 * the key vault error exception
 *
 * @member {object} [error]
 * 
 * @member {string} [error.code] The error code.
 * 
 * @member {string} [error.message] The error message.
 * 
 */
function KeyVaultError() {
}

/**
 * Defines the metadata of KeyVaultError
 *
 * @returns {object} metadata of KeyVaultError
 *
 */
KeyVaultError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'KeyVaultError',
    type: {
      name: 'Composite',
      className: 'KeyVaultError',
      modelProperties: {
        error: {
          required: false,
          readOnly: true,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'ErrorModel'
          }
        }
      }
    }
  };
};

module.exports = KeyVaultError;