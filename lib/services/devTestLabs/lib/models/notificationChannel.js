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
 * A notification.
 *
 * @extends models['Resource']
 */
class NotificationChannel extends models['Resource'] {
  /**
   * Create a NotificationChannel.
   * @member {string} [webHookUrl] The webhook URL to send notifications to.
   * @member {string} [description] Description of notification.
   * @member {array} [events] The list of event for which this notification is
   * enabled.
   * @member {date} [createdDate] The creation date of the notification
   * channel.
   * @member {string} [provisioningState] The provisioning status of the
   * resource.
   * @member {string} [uniqueIdentifier] The unique immutable identifier of a
   * resource (Guid).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationChannel
   *
   * @returns {object} metadata of NotificationChannel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationChannel',
      type: {
        name: 'Composite',
        className: 'NotificationChannel',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          webHookUrl: {
            required: false,
            serializedName: 'properties.webHookUrl',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          events: {
            required: false,
            serializedName: 'properties.events',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EventElementType',
                  type: {
                    name: 'Composite',
                    className: 'Event'
                  }
              }
            }
          },
          createdDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdDate',
            type: {
              name: 'DateTime'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          uniqueIdentifier: {
            required: false,
            serializedName: 'properties.uniqueIdentifier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationChannel;