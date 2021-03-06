/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ErrorDetailsItem class.
 * @constructor
 * @member {string} [code] Error code.
 * @member {string} [message] If available, a human readable description of the
 * error.
 * @member {string} [target] If available, the component generating the error.
 */
export interface ErrorDetailsItem {
  readonly code?: string;
  readonly message?: string;
  readonly target?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * This object is returned when an error occurs in the Maps API
 *
 * @member {string} [code] Error code.
 * @member {string} [message] If available, a human readable description of the
 * error.
 * @member {string} [target] If available, the component generating the error.
 * @member {array} [details] If available, a list of additional details about
 * the error.
 */
export interface ErrorModel {
  readonly code?: string;
  readonly message?: string;
  readonly target?: string;
  readonly details?: ErrorDetailsItem[];
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * An Azure resource
 *
 * @member {string} [id] The fully qualified Maps Account resource identifier.
 * @member {string} [name] The name of the Maps Account, which is unique within
 * a Resource Group.
 * @member {string} [type] Azure resource type.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The SKU of the Maps Account.
 *
 * @member {string} name The name of the SKU, in standard format (such as S0).
 * @member {string} [tier] Gets the sku tier. This is based on the SKU name.
 */
export interface Sku {
  name: string;
  readonly tier?: string;
}

/**
 * @class
 * Initializes a new instance of the MapsAccount class.
 * @constructor
 * An Azure resource which represents access to a suite of Maps REST APIs.
 *
 * @member {string} [location] The location of the resource.
 * @member {object} [tags] Gets a list of key value pairs that describe the
 * resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater than 128 characters and value
 * no greater than 256 characters.
 * @member {object} [sku] The SKU of this account.
 * @member {string} [sku.name] The name of the SKU, in standard format (such as
 * S0).
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name.
 */
export interface MapsAccount extends Resource {
  readonly location?: string;
  readonly tags?: { [propertyName: string]: string };
  readonly sku?: Sku;
}

/**
 * @class
 * Initializes a new instance of the MapsAccountCreateParameters class.
 * @constructor
 * Parameters used to create a new Maps Account.
 *
 * @member {string} location The location of the resource.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater than 128 characters and value
 * no greater than 256 characters.
 * @member {object} sku The SKU of this account.
 * @member {string} [sku.name] The name of the SKU, in standard format (such as
 * S0).
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name.
 */
export interface MapsAccountCreateParameters {
  location: string;
  tags?: { [propertyName: string]: string };
  sku: Sku;
}

/**
 * @class
 * Initializes a new instance of the MapsAccountUpdateParameters class.
 * @constructor
 * Parameters used to update an existing Maps Account.
 *
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater than 128 characters and value
 * no greater than 256 characters.
 * @member {object} [sku] The SKU of this account.
 * @member {string} [sku.name] The name of the SKU, in standard format (such as
 * S0).
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name.
 */
export interface MapsAccountUpdateParameters {
  tags?: { [propertyName: string]: string };
  sku?: Sku;
}

/**
 * @class
 * Initializes a new instance of the MapsAccountsMoveRequest class.
 * @constructor
 * The description of what resources to move between resource groups.
 *
 * @member {string} targetResourceGroup The name of the destination resource
 * group.
 * @member {array} resourceIds A list of resource names to move from the source
 * resource group.
 */
export interface MapsAccountsMoveRequest {
  targetResourceGroup: string;
  resourceIds: string[];
}

/**
 * @class
 * Initializes a new instance of the MapsKeySpecification class.
 * @constructor
 * Whether the operation refers to the primary or secondary key.
 *
 * @member {string} keyType Whether the operation refers to the primary or
 * secondary key. Possible values include: 'primary', 'secondary'
 */
export interface MapsKeySpecification {
  keyType: string;
}

/**
 * @class
 * Initializes a new instance of the MapsAccountKeys class.
 * @constructor
 * The set of keys which can be used to access the Maps REST APIs. Two keys are
 * provided for key rotation without interruption.
 *
 * @member {string} [id] The full Azure resource identifier of the Maps
 * Account.
 * @member {string} [primaryKey] The primary key for accessing the Maps REST
 * APIs.
 * @member {string} [secondaryKey] The secondary key for accessing the Maps
 * REST APIs.
 */
export interface MapsAccountKeys {
  readonly id?: string;
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
}

/**
 * @class
 * Initializes a new instance of the MapsOperationsValueItemDisplay class.
 * @constructor
 * The human-readable description of the operation.
 *
 * @member {string} [provider] Service provider: Microsoft Maps.
 * @member {string} [resource] Resource on which the operation is performed.
 * @member {string} [operation] The action that users can perform, based on
 * their permission level.
 * @member {string} [description] The description of the operation.
 */
export interface MapsOperationsValueItemDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the MapsOperationsValueItem class.
 * @constructor
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The human-readable description of the operation.
 * @member {string} [display.provider] Service provider: Microsoft Maps.
 * @member {string} [display.resource] Resource on which the operation is
 * performed.
 * @member {string} [display.operation] The action that users can perform,
 * based on their permission level.
 * @member {string} [display.description] The description of the operation.
 * @member {string} [origin] The origin of the operation.
 */
export interface MapsOperationsValueItem {
  readonly name?: string;
  display?: MapsOperationsValueItemDisplay;
  readonly origin?: string;
}


/**
 * @class
 * Initializes a new instance of the MapsAccounts class.
 * @constructor
 * A list of Maps Accounts.
 *
 */
export interface MapsAccounts extends Array<MapsAccount> {
}

/**
 * @class
 * Initializes a new instance of the MapsOperations class.
 * @constructor
 * The set of operations available for Maps.
 *
 */
export interface MapsOperations extends Array<MapsOperationsValueItem> {
}
