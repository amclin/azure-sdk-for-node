/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Describes an Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * Resource Id
   */
  readonly id?: string;
  /**
   * Resource name
   */
  readonly name?: string;
  /**
   * Resource type
   */
  readonly type?: string;
}

/**
 * Pricing tier will be applied for the scope based on the resource ID
 */
export interface Pricing extends Resource {
  /**
   * Pricing tier type. Possible values include: 'Free', 'Standard'
   */
  pricingTier: string;
}

/**
 * The ASC location of the subscription is in the "name" field
 */
export interface AscLocation extends Resource {
  properties?: any;
}

/**
 * Contact details for security issues
*/
export interface SecurityContact extends Resource {
  /**
   * The email of this security contact
  */
  email: string;
  /**
   * The phone number of this security contact
  */
  phone?: string;
  /**
   * Whether to send security alerts notifications to the security contact. Possible values
   * include: 'On', 'Off'
  */
  alertNotifications: string;
  /**
   * Whether to send security alerts notifications to subscription admins. Possible values include:
   * 'On', 'Off'
  */
  alertsToAdmins: string;
}

/**
 * Configures where to store the OMS agent data for workspaces under a scope
*/
export interface WorkspaceSetting extends Resource {
  /**
   * The full Azure ID of the workspace to save the data in
  */
  workspaceId: string;
  /**
   * All the VMs in this scope will send their security data to the mentioned workspace unless
   * overridden by a setting with more specific scope
  */
  scope: string;
}

/**
 * Auto provisioning setting
*/
export interface AutoProvisioningSetting extends Resource {
  /**
   * Describes what kind of security agent provisioning action to take. Possible values include:
   * 'On', 'Off'
  */
  autoProvision: string;
}

/**
 * A segment of a compliance assessment.
*/
export interface ComplianceSegment {
  /**
   * The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc.
  */
  readonly segmentType?: string;
  /**
   * The size (%) of the segment.
  */
  readonly percentage?: number;
}

/**
 * Compliance of a scope
*/
export interface Compliance extends Resource {
  /**
   * The timestamp when the Compliance calculation was conducted.
  */
  readonly assessmentTimestampUtcDate?: Date;
  /**
   * The resource count of the given subscription for which the Compliance calculation was
   * conducted (needed for Management Group Compliance calculation).
  */
  readonly resourceCount?: number;
  /**
   * An array of segment, which is the actually the compliance assessment.
  */
  readonly assessmentResult?: ComplianceSegment[];
}

/**
 * The Advanced Threat Protection resource.
*/
export interface AdvancedThreatProtectionSetting extends Resource {
  /**
   * Indicates whether Advanced Threat Protection is enabled.
  */
  isEnabled?: boolean;
}

/**
 * The kind of the security setting
*/
export interface SettingResource extends Resource {
  /**
   * the kind of the settings string (DataExportSetting). Possible values include:
   * 'DataExportSetting', 'AlertSuppressionSetting'
  */
  kind: string;
}

/**
 * Represents a security setting in Azure Security Center.
*/
export interface Setting extends SettingResource {
}

/**
 * Represents a data export setting
*/
export interface DataExportSetting extends Setting {
  /**
   * Is the data export setting is enabled
  */
  enabled: boolean;
}

/**
 * The sensitivity label.
*/
export interface SensitivityLabel {
  /**
   * The name of the sensitivity label.
  */
  displayName?: string;
  /**
   * The order of the sensitivity label.
  */
  order?: number;
  /**
   * Indicates whether the label is enabled or not.
  */
  enabled?: boolean;
}

/**
 * The information type keyword.
*/
export interface InformationProtectionKeyword {
  /**
   * The keyword pattern.
  */
  pattern?: string;
  /**
   * Indicates whether the keyword is custom or not.
  */
  custom?: boolean;
  /**
   * Indicates whether the keyword can be applied on numeric types or not.
  */
  canBeNumeric?: boolean;
  /**
   * Indicates whether the keyword is excluded or not.
  */
  excluded?: boolean;
}

/**
 * The information type.
*/
export interface InformationType {
  /**
   * The name of the information type.
  */
  displayName?: string;
  /**
   * The order of the information type.
  */
  order?: number;
  /**
   * The recommended label id to be associated with this information type.
  */
  recommendedLabelId?: string;
  /**
   * Indicates whether the information type is enabled or not.
  */
  enabled?: boolean;
  /**
   * Indicates whether the information type is custom or not.
  */
  custom?: boolean;
  /**
   * The information type keywords.
  */
  keywords?: InformationProtectionKeyword[];
}

/**
 * Information protection policy.
*/
export interface InformationProtectionPolicy extends Resource {
  /**
   * Describes the last UTC time the policy was modified.
  */
  readonly lastModifiedUtc?: Date;
  /**
   * Dictionary of sensitivity labels.
  */
  labels?: { [propertyName: string]: SensitivityLabel };
  /**
   * The sensitivity information types.
  */
  informationTypes?: { [propertyName: string]: InformationType };
}

/**
 * Security operation display
*/
export interface OperationDisplay {
  /**
   * The resource provider for the operation.
  */
  readonly provider?: string;
  /**
   * The display name of the resource the operation applies to.
  */
  readonly resource?: string;
  /**
   * The display name of the security operation.
  */
  readonly operation?: string;
  /**
   * The description of the operation.
  */
  readonly description?: string;
}

/**
 * Possible operation in the REST API of Microsoft.Security
*/
export interface Operation {
  /**
   * Name of the operation
  */
  readonly name?: string;
  /**
   * Where the operation is originated
  */
  readonly origin?: string;
  display?: OperationDisplay;
}

/**
 * Changing set of properties, depending on the task type that is derived from the name field
*/
export interface SecurityTaskParameters {
  /**
   * Name of the task type
  */
  readonly name?: string;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
  */
  [additionalPropertyName: string]: any;
}

/**
 * Security task that we recommend to do in order to strengthen security
*/
export interface SecurityTask extends Resource {
  /**
   * State of the task (Active, Resolved etc.)
  */
  readonly state?: string;
  /**
   * The time this task was discovered in UTC
  */
  readonly creationTimeUtc?: Date;
  securityTaskParameters?: SecurityTaskParameters;
  /**
   * The time this task's details were last changed in UTC
  */
  readonly lastStateChangeTimeUtc?: Date;
  /**
   * Additional data on the state of the task
  */
  readonly subState?: string;
}

/**
 * Changing set of properties depending on the entity type.
*/
export interface AlertEntity {
  /**
   * Type of entity
  */
  readonly type?: string;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
  */
  [additionalPropertyName: string]: any;
}

/**
 * Factors that increase our confidence that the alert is a true positive
*/
export interface AlertConfidenceReason {
  /**
   * Type of confidence factor
  */
  readonly type?: string;
  /**
   * description of the confidence reason
  */
  readonly reason?: string;
}

/**
 * Security alert
*/
export interface Alert extends Resource {
  /**
   * State of the alert (Active, Dismissed etc.)
  */
  readonly state?: string;
  /**
   * The time the incident was reported to Microsoft.Security in UTC
  */
  readonly reportedTimeUtc?: Date;
  /**
   * Name of the vendor that discovered the incident
  */
  readonly vendorName?: string;
  /**
   * Name of the alert type
  */
  readonly alertName?: string;
  /**
   * Display name of the alert type
  */
  readonly alertDisplayName?: string;
  /**
   * The time the incident was detected by the vendor
  */
  readonly detectedTimeUtc?: Date;
  /**
   * Description of the incident and what it means
  */
  readonly description?: string;
  /**
   * Recommended steps to reradiate the incident
  */
  readonly remediationSteps?: string;
  /**
   * The action that was taken as a response to the alert (Active, Blocked etc.)
  */
  readonly actionTaken?: string;
  /**
   * Estimated severity of this alert. Possible values include: 'Silent', 'Information', 'Low',
   * 'High'
  */
  readonly reportedSeverity?: string;
  /**
   * The entity that the incident happened on
  */
  readonly compromisedEntity?: string;
  /**
   * Azure resource ID of the associated resource
  */
  readonly associatedResource?: string;
  extendedProperties?: { [propertyName: string]: any };
  /**
   * The type of the alerted resource (Azure, Non-Azure)
  */
  readonly systemSource?: string;
  /**
   * Whether this alert can be investigated with Azure Security Center
  */
  readonly canBeInvestigated?: boolean;
  /**
   * Whether this alert is for incident type or not (otherwise - single alert)
  */
  readonly isIncident?: boolean;
  /**
   * objects that are related to this alerts
  */
  entities?: AlertEntity[];
  /**
   * level of confidence we have on the alert
  */
  readonly confidenceScore?: number;
  /**
   * reasons the alert got the confidenceScore value
  */
  confidenceReasons?: AlertConfidenceReason[];
  /**
   * Azure subscription ID of the resource that had the security alert or the subscription ID of
   * the workspace that this resource reports to
  */
  readonly subscriptionId?: string;
  /**
   * Instance ID of the alert.
  */
  readonly instanceId?: string;
  /**
   * Azure resource ID of the workspace that the alert was reported to.
  */
  readonly workspaceArmId?: string;
}

export interface DiscoveredSecuritySolution {
  /**
   * Resource Id
  */
  readonly id?: string;
  /**
   * Resource name
  */
  readonly name?: string;
  /**
   * Resource type
  */
  readonly type?: string;
  /**
   * Location where the resource is stored
  */
  readonly location?: string;
  /**
   * The security family of the discovered solution. Possible values include: 'Waf', 'Ngfw',
   * 'SaasWaf', 'Va'
  */
  securityFamily: string;
  /**
   * The security solutions' image offer
  */
  offer: string;
  /**
   * The security solutions' image publisher
  */
  publisher: string;
  /**
   * The security solutions' image sku
  */
  sku: string;
}

/**
 * Describes an Azure resource with location
*/
export interface Location {
  /**
   * Location where the resource is stored
  */
  readonly location?: string;
}

export interface JitNetworkAccessPortRule {
  number: number;
  /**
   * Possible values include: 'TCP', 'UDP', 'All'
  */
  protocol: string;
  /**
   * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address
   * or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
  */
  allowedSourceAddressPrefix?: string;
  /**
   * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
  */
  allowedSourceAddressPrefixes?: string[];
  /**
   * Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes,
   * maximum 1 day
  */
  maxRequestAccessDuration: string;
}

export interface JitNetworkAccessPolicyVirtualMachine {
  /**
   * Resource ID of the virtual machine that is linked to this policy
  */
  id: string;
  /**
   * Port configurations for the virtual machine
  */
  ports: JitNetworkAccessPortRule[];
}

export interface JitNetworkAccessRequestPort {
  number: number;
  /**
   * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address
   * or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
  */
  allowedSourceAddressPrefix?: string;
  /**
   * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
  */
  allowedSourceAddressPrefixes?: string[];
  /**
   * The date & time at which the request ends in UTC
  */
  endTimeUtc: Date;
  /**
   * The status of the port. Possible values include: 'Revoked', 'Initiated'
  */
  status: string;
  /**
   * A description of why the `status` has its value. Possible values include: 'Expired',
   * 'UserRequested', 'NewerRequestInitiated'
  */
  statusReason: string;
}

export interface JitNetworkAccessRequestVirtualMachine {
  /**
   * Resource ID of the virtual machine that is linked to this policy
  */
  id: string;
  /**
   * The ports that were opened for the virtual machine
  */
  ports: JitNetworkAccessRequestPort[];
}

export interface JitNetworkAccessRequest {
  virtualMachines: JitNetworkAccessRequestVirtualMachine[];
  /**
   * The start time of the request in UTC
  */
  startTimeUtc: Date;
  /**
   * The identity of the person who made the request
  */
  requestor: string;
}

export interface JitNetworkAccessPolicy {
  /**
   * Resource Id
  */
  readonly id?: string;
  /**
   * Resource name
  */
  readonly name?: string;
  /**
   * Resource type
  */
  readonly type?: string;
  /**
   * Kind of the resource
  */
  kind?: string;
  /**
   * Location where the resource is stored
  */
  readonly location?: string;
  /**
   * Configurations for Microsoft.Compute/virtualMachines resource type.
  */
  virtualMachines: JitNetworkAccessPolicyVirtualMachine[];
  requests?: JitNetworkAccessRequest[];
  /**
   * Gets the provisioning state of the Just-in-Time policy.
  */
  readonly provisioningState?: string;
}

export interface JitNetworkAccessPolicyInitiatePort {
  number: number;
  /**
   * Source of the allowed traffic. If omitted, the request will be for the source IP address of
   * the initiate request.
  */
  allowedSourceAddressPrefix?: string;
  /**
   * The time to close the request in UTC
  */
  endTimeUtc: Date;
}

export interface JitNetworkAccessPolicyInitiateVirtualMachine {
  /**
   * Resource ID of the virtual machine that is linked to this policy
  */
  id: string;
  /**
   * The ports to open for the resource with the `id`
  */
  ports: JitNetworkAccessPolicyInitiatePort[];
}

export interface JitNetworkAccessPolicyInitiateRequest {
  /**
   * A list of virtual machines & ports to open access for
  */
  virtualMachines: JitNetworkAccessPolicyInitiateVirtualMachine[];
}

/**
 * Describes an Azure resource with kind
*/
export interface Kind {
  /**
   * Kind of the resource
  */
  kind?: string;
}

/**
 * Represents a security solution external to Azure Security Center which sends information to an
 * OMS workspace and whose data is displayed by Azure Security Center.
*/
export interface ExternalSecuritySolution {
  /**
   * Resource Id
  */
  readonly id?: string;
  /**
   * Resource name
  */
  readonly name?: string;
  /**
   * Resource type
  */
  readonly type?: string;
  /**
   * Location where the resource is stored
  */
  readonly location?: string;
  /**
   * Polymorphic Discriminator
  */
  kind: string;
}

/**
 * The solution properties (correspond to the solution kind)
*/
export interface ExternalSecuritySolutionProperties {
  deviceVendor?: string;
  deviceType?: string;
  workspace?: ConnectedWorkspace;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
  */
  [additionalPropertyName: string]: any;
}

/**
 * @summary The external security solution properties for CEF solutions
*/
export interface CefSolutionProperties extends ExternalSecuritySolutionProperties {
  hostname?: string;
  agent?: string;
  lastEventReceived?: string;
}

/**
 * Represents a security solution which sends CEF logs to an OMS workspace
*/
export interface CefExternalSecuritySolution extends ExternalSecuritySolution {
  properties?: CefSolutionProperties;
}

/**
 * @summary The external security solution properties for ATA solutions
*/
export interface AtaSolutionProperties extends ExternalSecuritySolutionProperties {
  lastEventReceived?: string;
}

/**
 * Represents an ATA security solution which sends logs to an OMS workspace
*/
export interface AtaExternalSecuritySolution extends ExternalSecuritySolution {
  properties?: AtaSolutionProperties;
}

/**
 * @summary Represents an OMS workspace to which the solution is connected
*/
export interface ConnectedWorkspace {
  /**
   * Azure resource ID of the connected OMS workspace
  */
  id?: string;
}

/**
 * @summary The external security solution properties for AAD solutions
*/
export interface AadSolutionProperties {
  deviceVendor?: string;
  deviceType?: string;
  workspace?: ConnectedWorkspace;
  /**
   * @summary The connectivity state of the external AAD solution
   * @description Possible values include: 'Discovered', 'NotLicensed', 'Connected'
  */
  connectivityState?: string;
}

/**
 * Represents an AAD identity protection solution which sends logs to an OMS workspace.
*/
export interface AadExternalSecuritySolution extends ExternalSecuritySolution {
  properties?: AadSolutionProperties;
}

/**
 * Describes an Azure resource with kind
*/
export interface ExternalSecuritySolutionKind1 {
  /**
   * The kind of the external solution. Possible values include: 'CEF', 'ATA', 'AAD'
  */
  kind?: string;
}

/**
 * Describes an Azure resource with kind
*/
export interface AadConnectivityState1 {
  /**
   * @summary The connectivity state of the external AAD solution
   * @description Possible values include: 'Discovered', 'NotLicensed', 'Connected'
  */
  connectivityState?: string;
}

export interface TopologySingleResourceParent {
  /**
   * Azure resource id which serves as parent resource in topology view
  */
  readonly resourceId?: string;
}

export interface TopologySingleResourceChild {
  /**
   * Azure resource id which serves as child resource in topology view
  */
  readonly resourceId?: string;
}

export interface TopologySingleResource {
  /**
   * Azure resource id
  */
  readonly resourceId?: string;
  /**
   * The security severity of the resource
  */
  readonly severity?: string;
  /**
   * Indicates if the resource has security recommendations
  */
  readonly recommendationsExist?: boolean;
  /**
   * Indicates the resource connectivity level to the Internet (InternetFacing, Internal ,etc.)
  */
  readonly networkZones?: string;
  /**
   * Score of the resource based on its security severity
  */
  readonly topologyScore?: number;
  /**
   * The location of this resource
  */
  readonly location?: string;
  /**
   * Azure resources connected to this resource which are in higher level in the topology view
  */
  readonly parents?: TopologySingleResourceParent[];
  /**
   * Azure resources connected to this resource which are in lower level in the topology view
  */
  readonly children?: TopologySingleResourceChild[];
}

export interface TopologyResource {
  /**
   * Resource Id
  */
  readonly id?: string;
  /**
   * Resource name
  */
  readonly name?: string;
  /**
   * Resource type
  */
  readonly type?: string;
  /**
   * Location where the resource is stored
  */
  readonly location?: string;
  /**
   * The UTC time on which the topology was calculated
  */
  readonly calculatedDateTime?: Date;
  /**
   * Azure resources which are part of this topology resource
  */
  readonly topologyResources?: TopologySingleResource[];
}

/**
 * Describes properties of a connected resource
*/
export interface ConnectedResource {
  /**
   * The Azure resource id of the connected resource
  */
  readonly connectedResourceId?: string;
  /**
   * The allowed tcp ports
  */
  readonly tcpPorts?: string;
  /**
   * The allowed udp ports
  */
  readonly udpPorts?: string;
}

/**
 * Describes the allowed inbound and outbound traffic of an Azure resource
*/
export interface ConnectableResource {
  /**
   * The Azure resource id
  */
  readonly id?: string;
  /**
   * The list of Azure resources that the resource has inbound allowed connection from
  */
  readonly inboundConnectedResources?: ConnectedResource[];
  /**
   * The list of Azure resources that the resource has outbound allowed connection to
  */
  readonly outboundConnectedResources?: ConnectedResource[];
}

/**
 * The resource whose properties describes the allowed traffic between Azure resources
*/
export interface AllowedConnectionsResource {
  /**
   * Resource Id
  */
  readonly id?: string;
  /**
   * Resource name
  */
  readonly name?: string;
  /**
   * Resource type
  */
  readonly type?: string;
  /**
   * Location where the resource is stored
  */
  readonly location?: string;
  /**
   * The UTC time on which the allowed connections resource was calculated
  */
  readonly calculatedDateTime?: Date;
  /**
   * List of connectable resources
  */
  readonly connectableResources?: ConnectableResource[];
}

/**
 * List of pricing configurations response
*/
export interface PricingList extends Array<Pricing> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of security contacts response
*/
export interface SecurityContactList extends Array<SecurityContact> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of workspace settings response
*/
export interface WorkspaceSettingList extends Array<WorkspaceSetting> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of all the auto provisioning settings response
*/
export interface AutoProvisioningSettingList extends Array<AutoProvisioningSetting> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of Compliance objects response
*/
export interface ComplianceList extends Array<Compliance> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * Subscription settings list.
*/
export interface SettingsList extends Array<Setting> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * Information protection policies response.
*/
export interface InformationProtectionPolicyList extends Array<InformationProtectionPolicy> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of possible operations for Microsoft.Security resource provider
*/
export interface OperationList extends Array<Operation> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of locations where ASC saves your data
*/
export interface AscLocationList extends Array<AscLocation> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of security task recommendations
*/
export interface SecurityTaskList extends Array<SecurityTask> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of security alerts
*/
export interface AlertList extends Array<Alert> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

export interface DiscoveredSecuritySolutionList extends Array<DiscoveredSecuritySolution> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

export interface JitNetworkAccessPoliciesList extends Array<JitNetworkAccessPolicy> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

export interface ExternalSecuritySolutionList extends Array<ExternalSecuritySolution> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

export interface TopologyList extends Array<TopologyResource> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}

/**
 * List of all possible traffic between Azure resources
*/
export interface AllowedConnectionsList extends Array<AllowedConnectionsResource> {
  /**
   * The URI to fetch the next page.
  */
  readonly nextLink?: string;
}
