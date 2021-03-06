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

/**
 * User create details.
 *
 */
class UserCreateParameters {
  /**
   * Create a UserCreateParameters.
   * @member {string} [state] Account state. Specifies whether the user is
   * active or not. Blocked users are unable to sign into the developer portal
   * or call any APIs of subscribed products. Default state is Active. Possible
   * values include: 'active', 'blocked', 'pending', 'deleted'. Default value:
   * 'active' .
   * @member {string} [note] Optional note about a user set by the
   * administrator.
   * @member {array} [identities] Collection of user identities.
   * @member {string} email Email address. Must not be empty and must be unique
   * within the service instance.
   * @member {string} firstName First name.
   * @member {string} lastName Last name.
   * @member {string} [password] User Password. If no value is provided, a
   * default password is generated.
   * @member {string} [confirmation] Determines the type of confirmation e-mail
   * that will be sent to the newly created user. Possible values include:
   * 'signup', 'invite'
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserCreateParameters
   *
   * @returns {object} metadata of UserCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserCreateParameters',
      type: {
        name: 'Composite',
        className: 'UserCreateParameters',
        modelProperties: {
          state: {
            required: false,
            serializedName: 'properties.state',
            defaultValue: 'active',
            type: {
              name: 'String'
            }
          },
          note: {
            required: false,
            serializedName: 'properties.note',
            type: {
              name: 'String'
            }
          },
          identities: {
            required: false,
            serializedName: 'properties.identities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UserIdentityContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'UserIdentityContract'
                  }
              }
            }
          },
          email: {
            required: true,
            serializedName: 'properties.email',
            constraints: {
              MaxLength: 254,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          firstName: {
            required: true,
            serializedName: 'properties.firstName',
            constraints: {
              MaxLength: 100,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          lastName: {
            required: true,
            serializedName: 'properties.lastName',
            constraints: {
              MaxLength: 100,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'properties.password',
            type: {
              name: 'String'
            }
          },
          confirmation: {
            required: false,
            serializedName: 'properties.confirmation',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserCreateParameters;
