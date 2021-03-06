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
 * Trusted Root certificates of an application gateway.
 *
 * @extends models['SubResource']
 */
class ApplicationGatewayTrustedRootCertificate extends models['SubResource'] {
  /**
   * Create a ApplicationGatewayTrustedRootCertificate.
   * @property {string} [data] Certificate public data.
   * @property {string} [keyVaultSecretId] Secret Id of (base-64 encoded
   * unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
   * @property {string} [provisioningState] Provisioning state of the trusted
   * root certificate resource. Possible values are: 'Updating', 'Deleting',
   * and 'Failed'.
   * @property {string} [name] Name of the trusted root certificate that is
   * unique within an Application Gateway.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   * @property {string} [type] Type of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationGatewayTrustedRootCertificate
   *
   * @returns {object} metadata of ApplicationGatewayTrustedRootCertificate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayTrustedRootCertificate',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayTrustedRootCertificate',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          data: {
            required: false,
            serializedName: 'properties.data',
            type: {
              name: 'String'
            }
          },
          keyVaultSecretId: {
            required: false,
            serializedName: 'properties.keyVaultSecretId',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayTrustedRootCertificate;
