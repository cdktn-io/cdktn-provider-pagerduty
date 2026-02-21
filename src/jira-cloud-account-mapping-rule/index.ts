/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface JiraCloudAccountMappingRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}
  */
  readonly accountMapping: string;
  /**
  * Indicates if the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#enabled JiraCloudAccountMappingRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#config JiraCloudAccountMappingRule#config}
  */
  readonly config?: JiraCloudAccountMappingRuleConfigA;
}
export interface JiraCloudAccountMappingRuleConfigJiraCustomFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#source_incident_field JiraCloudAccountMappingRule#source_incident_field}
  */
  readonly sourceIncidentField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#target_issue_field JiraCloudAccountMappingRule#target_issue_field}
  */
  readonly targetIssueField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#target_issue_field_name JiraCloudAccountMappingRule#target_issue_field_name}
  */
  readonly targetIssueFieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#type JiraCloudAccountMappingRule#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#value JiraCloudAccountMappingRule#value}
  */
  readonly value?: string;
}

export function jiraCloudAccountMappingRuleConfigJiraCustomFieldsToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraCustomFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_incident_field: cdktn.stringToTerraform(struct!.sourceIncidentField),
    target_issue_field: cdktn.stringToTerraform(struct!.targetIssueField),
    target_issue_field_name: cdktn.stringToTerraform(struct!.targetIssueFieldName),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraCustomFieldsToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraCustomFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_incident_field: {
      value: cdktn.stringToHclTerraform(struct!.sourceIncidentField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_issue_field: {
      value: cdktn.stringToHclTerraform(struct!.targetIssueField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_issue_field_name: {
      value: cdktn.stringToHclTerraform(struct!.targetIssueFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraCustomFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIncidentField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIncidentField = this._sourceIncidentField;
    }
    if (this._targetIssueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIssueField = this._targetIssueField;
    }
    if (this._targetIssueFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIssueFieldName = this._targetIssueFieldName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraCustomFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIncidentField = undefined;
      this._targetIssueField = undefined;
      this._targetIssueFieldName = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIncidentField = value.sourceIncidentField;
      this._targetIssueField = value.targetIssueField;
      this._targetIssueFieldName = value.targetIssueFieldName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // source_incident_field - computed: false, optional: true, required: false
  private _sourceIncidentField?: string; 
  public get sourceIncidentField() {
    return this.getStringAttribute('source_incident_field');
  }
  public set sourceIncidentField(value: string) {
    this._sourceIncidentField = value;
  }
  public resetSourceIncidentField() {
    this._sourceIncidentField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIncidentFieldInput() {
    return this._sourceIncidentField;
  }

  // target_issue_field - computed: false, optional: false, required: true
  private _targetIssueField?: string; 
  public get targetIssueField() {
    return this.getStringAttribute('target_issue_field');
  }
  public set targetIssueField(value: string) {
    this._targetIssueField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIssueFieldInput() {
    return this._targetIssueField;
  }

  // target_issue_field_name - computed: false, optional: false, required: true
  private _targetIssueFieldName?: string; 
  public get targetIssueFieldName() {
    return this.getStringAttribute('target_issue_field_name');
  }
  public set targetIssueFieldName(value: string) {
    this._targetIssueFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIssueFieldNameInput() {
    return this._targetIssueFieldName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class JiraCloudAccountMappingRuleConfigJiraCustomFieldsList extends cdktn.ComplexList {
  public internalValue? : JiraCloudAccountMappingRuleConfigJiraCustomFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference {
    return new JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraIssueType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}
  */
  readonly name: string;
}

export function jiraCloudAccountMappingRuleConfigJiraIssueTypeToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraIssueType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraIssueTypeToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraIssueType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraIssueType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraIssueType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#jira_id JiraCloudAccountMappingRule#jira_id}
  */
  readonly jiraId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#pagerduty_id JiraCloudAccountMappingRule#pagerduty_id}
  */
  readonly pagerdutyId: string;
}

export function jiraCloudAccountMappingRuleConfigJiraPrioritiesToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraPriorities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jira_id: cdktn.stringToTerraform(struct!.jiraId),
    pagerduty_id: cdktn.stringToTerraform(struct!.pagerdutyId),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraPrioritiesToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraPriorities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jira_id: {
      value: cdktn.stringToHclTerraform(struct!.jiraId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pagerduty_id: {
      value: cdktn.stringToHclTerraform(struct!.pagerdutyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraPriorities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jiraId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraId = this._jiraId;
    }
    if (this._pagerdutyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyId = this._pagerdutyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraPriorities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jiraId = undefined;
      this._pagerdutyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jiraId = value.jiraId;
      this._pagerdutyId = value.pagerdutyId;
    }
  }

  // jira_id - computed: false, optional: false, required: true
  private _jiraId?: string; 
  public get jiraId() {
    return this.getStringAttribute('jira_id');
  }
  public set jiraId(value: string) {
    this._jiraId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIdInput() {
    return this._jiraId;
  }

  // pagerduty_id - computed: false, optional: false, required: true
  private _pagerdutyId?: string; 
  public get pagerdutyId() {
    return this.getStringAttribute('pagerduty_id');
  }
  public set pagerdutyId(value: string) {
    this._pagerdutyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyIdInput() {
    return this._pagerdutyId;
  }
}

export class JiraCloudAccountMappingRuleConfigJiraPrioritiesList extends cdktn.ComplexList {
  public internalValue? : JiraCloudAccountMappingRuleConfigJiraPriorities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference {
    return new JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraProject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#key JiraCloudAccountMappingRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}
  */
  readonly name: string;
}

export function jiraCloudAccountMappingRuleConfigJiraProjectToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    key: cdktn.stringToTerraform(struct!.key),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraProjectToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraProject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraProject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}
  */
  readonly name?: string;
}

export function jiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}
  */
  readonly name?: string;
}

export function jiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}
  */
  readonly name: string;
}

export function jiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface JiraCloudAccountMappingRuleConfigJiraStatusMapping {
  /**
  * acknowledged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#acknowledged JiraCloudAccountMappingRule#acknowledged}
  */
  readonly acknowledged?: JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged;
  /**
  * resolved block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#resolved JiraCloudAccountMappingRule#resolved}
  */
  readonly resolved?: JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved;
  /**
  * triggered block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#triggered JiraCloudAccountMappingRule#triggered}
  */
  readonly triggered: JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered;
}

export function jiraCloudAccountMappingRuleConfigJiraStatusMappingToTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acknowledged: jiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedToTerraform(struct!.acknowledged),
    resolved: jiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedToTerraform(struct!.resolved),
    triggered: jiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredToTerraform(struct!.triggered),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraStatusMappingToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJiraStatusMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acknowledged: {
      value: jiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedToHclTerraform(struct!.acknowledged),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged",
    },
    resolved: {
      value: jiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedToHclTerraform(struct!.resolved),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved",
    },
    triggered: {
      value: jiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredToHclTerraform(struct!.triggered),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJiraStatusMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledged = this._acknowledged?.internalValue;
    }
    if (this._resolved?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved?.internalValue;
    }
    if (this._triggered?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggered = this._triggered?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJiraStatusMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acknowledged.internalValue = undefined;
      this._resolved.internalValue = undefined;
      this._triggered.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acknowledged.internalValue = value.acknowledged;
      this._resolved.internalValue = value.resolved;
      this._triggered.internalValue = value.triggered;
    }
  }

  // acknowledged - computed: false, optional: true, required: false
  private _acknowledged = new JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference(this, "acknowledged");
  public get acknowledged() {
    return this._acknowledged;
  }
  public putAcknowledged(value: JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged) {
    this._acknowledged.internalValue = value;
  }
  public resetAcknowledged() {
    this._acknowledged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedInput() {
    return this._acknowledged.internalValue;
  }

  // resolved - computed: false, optional: true, required: false
  private _resolved = new JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference(this, "resolved");
  public get resolved() {
    return this._resolved;
  }
  public putResolved(value: JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved) {
    this._resolved.internalValue = value;
  }
  public resetResolved() {
    this._resolved.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedInput() {
    return this._resolved.internalValue;
  }

  // triggered - computed: false, optional: false, required: true
  private _triggered = new JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference(this, "triggered");
  public get triggered() {
    return this._triggered;
  }
  public putTriggered(value: JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered) {
    this._triggered.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredInput() {
    return this._triggered.internalValue;
  }
}
export interface JiraCloudAccountMappingRuleConfigJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#autocreate_jql JiraCloudAccountMappingRule#autocreate_jql}
  */
  readonly autocreateJql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#create_issue_on_incident_trigger JiraCloudAccountMappingRule#create_issue_on_incident_trigger}
  */
  readonly createIssueOnIncidentTrigger?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#sync_notes_user JiraCloudAccountMappingRule#sync_notes_user}
  */
  readonly syncNotesUser?: string;
  /**
  * custom_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#custom_fields JiraCloudAccountMappingRule#custom_fields}
  */
  readonly customFields?: JiraCloudAccountMappingRuleConfigJiraCustomFields[] | cdktn.IResolvable;
  /**
  * issue_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#issue_type JiraCloudAccountMappingRule#issue_type}
  */
  readonly issueType: JiraCloudAccountMappingRuleConfigJiraIssueType;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#priorities JiraCloudAccountMappingRule#priorities}
  */
  readonly priorities?: JiraCloudAccountMappingRuleConfigJiraPriorities[] | cdktn.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#project JiraCloudAccountMappingRule#project}
  */
  readonly project: JiraCloudAccountMappingRuleConfigJiraProject;
  /**
  * status_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#status_mapping JiraCloudAccountMappingRule#status_mapping}
  */
  readonly statusMapping?: JiraCloudAccountMappingRuleConfigJiraStatusMapping;
}

export function jiraCloudAccountMappingRuleConfigJiraToTerraform(struct?: JiraCloudAccountMappingRuleConfigJira | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autocreate_jql: cdktn.stringToTerraform(struct!.autocreateJql),
    create_issue_on_incident_trigger: cdktn.booleanToTerraform(struct!.createIssueOnIncidentTrigger),
    sync_notes_user: cdktn.stringToTerraform(struct!.syncNotesUser),
    custom_fields: cdktn.listMapper(jiraCloudAccountMappingRuleConfigJiraCustomFieldsToTerraform, true)(struct!.customFields),
    issue_type: jiraCloudAccountMappingRuleConfigJiraIssueTypeToTerraform(struct!.issueType),
    priorities: cdktn.listMapper(jiraCloudAccountMappingRuleConfigJiraPrioritiesToTerraform, true)(struct!.priorities),
    project: jiraCloudAccountMappingRuleConfigJiraProjectToTerraform(struct!.project),
    status_mapping: jiraCloudAccountMappingRuleConfigJiraStatusMappingToTerraform(struct!.statusMapping),
  }
}


export function jiraCloudAccountMappingRuleConfigJiraToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigJira | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autocreate_jql: {
      value: cdktn.stringToHclTerraform(struct!.autocreateJql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_issue_on_incident_trigger: {
      value: cdktn.booleanToHclTerraform(struct!.createIssueOnIncidentTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_notes_user: {
      value: cdktn.stringToHclTerraform(struct!.syncNotesUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fields: {
      value: cdktn.listMapperHcl(jiraCloudAccountMappingRuleConfigJiraCustomFieldsToHclTerraform, true)(struct!.customFields),
      isBlock: true,
      type: "list",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraCustomFieldsList",
    },
    issue_type: {
      value: jiraCloudAccountMappingRuleConfigJiraIssueTypeToHclTerraform(struct!.issueType),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraIssueType",
    },
    priorities: {
      value: cdktn.listMapperHcl(jiraCloudAccountMappingRuleConfigJiraPrioritiesToHclTerraform, true)(struct!.priorities),
      isBlock: true,
      type: "list",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraPrioritiesList",
    },
    project: {
      value: jiraCloudAccountMappingRuleConfigJiraProjectToHclTerraform(struct!.project),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraProject",
    },
    status_mapping: {
      value: jiraCloudAccountMappingRuleConfigJiraStatusMappingToHclTerraform(struct!.statusMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJiraStatusMapping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigJiraOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigJira | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autocreateJql !== undefined) {
      hasAnyValues = true;
      internalValueResult.autocreateJql = this._autocreateJql;
    }
    if (this._createIssueOnIncidentTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIssueOnIncidentTrigger = this._createIssueOnIncidentTrigger;
    }
    if (this._syncNotesUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncNotesUser = this._syncNotesUser;
    }
    if (this._customFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFields = this._customFields?.internalValue;
    }
    if (this._issueType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType?.internalValue;
    }
    if (this._priorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities?.internalValue;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    if (this._statusMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMapping = this._statusMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigJira | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autocreateJql = undefined;
      this._createIssueOnIncidentTrigger = undefined;
      this._syncNotesUser = undefined;
      this._customFields.internalValue = undefined;
      this._issueType.internalValue = undefined;
      this._priorities.internalValue = undefined;
      this._project.internalValue = undefined;
      this._statusMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autocreateJql = value.autocreateJql;
      this._createIssueOnIncidentTrigger = value.createIssueOnIncidentTrigger;
      this._syncNotesUser = value.syncNotesUser;
      this._customFields.internalValue = value.customFields;
      this._issueType.internalValue = value.issueType;
      this._priorities.internalValue = value.priorities;
      this._project.internalValue = value.project;
      this._statusMapping.internalValue = value.statusMapping;
    }
  }

  // autocreate_jql - computed: false, optional: true, required: false
  private _autocreateJql?: string; 
  public get autocreateJql() {
    return this.getStringAttribute('autocreate_jql');
  }
  public set autocreateJql(value: string) {
    this._autocreateJql = value;
  }
  public resetAutocreateJql() {
    this._autocreateJql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocreateJqlInput() {
    return this._autocreateJql;
  }

  // create_issue_on_incident_trigger - computed: true, optional: true, required: false
  private _createIssueOnIncidentTrigger?: boolean | cdktn.IResolvable; 
  public get createIssueOnIncidentTrigger() {
    return this.getBooleanAttribute('create_issue_on_incident_trigger');
  }
  public set createIssueOnIncidentTrigger(value: boolean | cdktn.IResolvable) {
    this._createIssueOnIncidentTrigger = value;
  }
  public resetCreateIssueOnIncidentTrigger() {
    this._createIssueOnIncidentTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIssueOnIncidentTriggerInput() {
    return this._createIssueOnIncidentTrigger;
  }

  // sync_notes_user - computed: false, optional: true, required: false
  private _syncNotesUser?: string; 
  public get syncNotesUser() {
    return this.getStringAttribute('sync_notes_user');
  }
  public set syncNotesUser(value: string) {
    this._syncNotesUser = value;
  }
  public resetSyncNotesUser() {
    this._syncNotesUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncNotesUserInput() {
    return this._syncNotesUser;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields = new JiraCloudAccountMappingRuleConfigJiraCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }
  public putCustomFields(value: JiraCloudAccountMappingRuleConfigJiraCustomFields[] | cdktn.IResolvable) {
    this._customFields.internalValue = value;
  }
  public resetCustomFields() {
    this._customFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields.internalValue;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType = new JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference(this, "issue_type");
  public get issueType() {
    return this._issueType;
  }
  public putIssueType(value: JiraCloudAccountMappingRuleConfigJiraIssueType) {
    this._issueType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new JiraCloudAccountMappingRuleConfigJiraPrioritiesList(this, "priorities", false);
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: JiraCloudAccountMappingRuleConfigJiraPriorities[] | cdktn.IResolvable) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }

  // project - computed: false, optional: false, required: true
  private _project = new JiraCloudAccountMappingRuleConfigJiraProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: JiraCloudAccountMappingRuleConfigJiraProject) {
    this._project.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // status_mapping - computed: false, optional: true, required: false
  private _statusMapping = new JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference(this, "status_mapping");
  public get statusMapping() {
    return this._statusMapping;
  }
  public putStatusMapping(value: JiraCloudAccountMappingRuleConfigJiraStatusMapping) {
    this._statusMapping.internalValue = value;
  }
  public resetStatusMapping() {
    this._statusMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMappingInput() {
    return this._statusMapping.internalValue;
  }
}
export interface JiraCloudAccountMappingRuleConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#service JiraCloudAccountMappingRule#service}
  */
  readonly service: string;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#jira JiraCloudAccountMappingRule#jira}
  */
  readonly jira?: JiraCloudAccountMappingRuleConfigJira;
}

export function jiraCloudAccountMappingRuleConfigAToTerraform(struct?: JiraCloudAccountMappingRuleConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
    jira: jiraCloudAccountMappingRuleConfigJiraToTerraform(struct!.jira),
  }
}


export function jiraCloudAccountMappingRuleConfigAToHclTerraform(struct?: JiraCloudAccountMappingRuleConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jira: {
      value: jiraCloudAccountMappingRuleConfigJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "struct",
      storageClassType: "JiraCloudAccountMappingRuleConfigJira",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JiraCloudAccountMappingRuleConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JiraCloudAccountMappingRuleConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JiraCloudAccountMappingRuleConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
      this._jira.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
      this._jira.internalValue = value.jira;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new JiraCloudAccountMappingRuleConfigJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: JiraCloudAccountMappingRuleConfigJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule pagerduty_jira_cloud_account_mapping_rule}
*/
export class JiraCloudAccountMappingRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_jira_cloud_account_mapping_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a JiraCloudAccountMappingRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JiraCloudAccountMappingRule to import
  * @param importFromId The id of the existing JiraCloudAccountMappingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JiraCloudAccountMappingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_jira_cloud_account_mapping_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/jira_cloud_account_mapping_rule pagerduty_jira_cloud_account_mapping_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JiraCloudAccountMappingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: JiraCloudAccountMappingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_jira_cloud_account_mapping_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.31.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMapping = config.accountMapping;
    this._enabled = config.enabled;
    this._name = config.name;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_mapping - computed: false, optional: false, required: true
  private _accountMapping?: string; 
  public get accountMapping() {
    return this.getStringAttribute('account_mapping');
  }
  public set accountMapping(value: string) {
    this._accountMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMappingInput() {
    return this._accountMapping;
  }

  // autocreate_jql_disabled_reason - computed: true, optional: false, required: false
  public get autocreateJqlDisabledReason() {
    return this.getStringAttribute('autocreate_jql_disabled_reason');
  }

  // autocreate_jql_disabled_until - computed: true, optional: false, required: false
  public get autocreateJqlDisabledUntil() {
    return this.getStringAttribute('autocreate_jql_disabled_until');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // config - computed: false, optional: true, required: false
  private _config = new JiraCloudAccountMappingRuleConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: JiraCloudAccountMappingRuleConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_mapping: cdktn.stringToTerraform(this._accountMapping),
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      config: jiraCloudAccountMappingRuleConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_mapping: {
        value: cdktn.stringToHclTerraform(this._accountMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: jiraCloudAccountMappingRuleConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JiraCloudAccountMappingRuleConfigA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
