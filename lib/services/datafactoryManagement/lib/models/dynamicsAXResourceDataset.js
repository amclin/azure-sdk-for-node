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
 * The path of the Dynamics AX OData entity.
 *
 * @extends models['Dataset']
 */
class DynamicsAXResourceDataset extends models['Dataset'] {
  /**
   * Create a DynamicsAXResourceDataset.
   * @member {string} path The path of the Dynamics AX OData entity. Type:
   * string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DynamicsAXResourceDataset
   *
   * @returns {object} metadata of DynamicsAXResourceDataset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DynamicsAXResource',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Dataset',
        className: 'DynamicsAXResourceDataset',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          structure: {
            required: false,
            serializedName: 'structure',
            type: {
              name: 'Object'
            }
          },
          linkedServiceName: {
            required: true,
            serializedName: 'linkedServiceName',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          folder: {
            required: false,
            serializedName: 'folder',
            type: {
              name: 'Composite',
              className: 'DatasetFolder'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          path: {
            required: true,
            serializedName: 'typeProperties.path',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DynamicsAXResourceDataset;