/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The response of the list policy operation.
 *
 */
class PolicyCollection {
  /**
   * Create a PolicyCollection.
   * @member {array} [value] Policy Contract value.
   * @member {string} [nextLink] Next page link if any.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PolicyCollection
   *
   * @returns {object} metadata of PolicyCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicyCollection',
      type: {
        name: 'Composite',
        className: 'PolicyCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicyContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'PolicyContract'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PolicyCollection;