/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServiceEventRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#disabled ServiceEventRule#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#id ServiceEventRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#position ServiceEventRule#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#service ServiceEventRule#service}
  */
  readonly service: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#actions ServiceEventRule#actions}
  */
  readonly actions?: ServiceEventRuleActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#conditions ServiceEventRule#conditions}
  */
  readonly conditions?: ServiceEventRuleConditions;
  /**
  * time_frame block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#time_frame ServiceEventRule#time_frame}
  */
  readonly timeFrame?: ServiceEventRuleTimeFrame;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#variable ServiceEventRule#variable}
  */
  readonly variable?: ServiceEventRuleVariable[] | cdktn.IResolvable;
}
export interface ServiceEventRuleActionsAnnotate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleActionsAnnotateToTerraform(struct?: ServiceEventRuleActionsAnnotate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function serviceEventRuleActionsAnnotateToHclTerraform(struct?: ServiceEventRuleActionsAnnotate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceEventRuleActionsAnnotateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsAnnotate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsAnnotate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class ServiceEventRuleActionsAnnotateList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsAnnotate[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsAnnotateOutputReference {
    return new ServiceEventRuleActionsAnnotateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActionsEventAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleActionsEventActionToTerraform(struct?: ServiceEventRuleActionsEventAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function serviceEventRuleActionsEventActionToHclTerraform(struct?: ServiceEventRuleActionsEventAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceEventRuleActionsEventActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsEventAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsEventAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class ServiceEventRuleActionsEventActionList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsEventAction[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsEventActionOutputReference {
    return new ServiceEventRuleActionsEventActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActionsExtractions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#regex ServiceEventRule#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#source ServiceEventRule#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#target ServiceEventRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#template ServiceEventRule#template}
  */
  readonly template?: string;
}

export function serviceEventRuleActionsExtractionsToTerraform(struct?: ServiceEventRuleActionsExtractions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktn.stringToTerraform(struct!.regex),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
    template: cdktn.stringToTerraform(struct!.template),
  }
}


export function serviceEventRuleActionsExtractionsToHclTerraform(struct?: ServiceEventRuleActionsExtractions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleActionsExtractionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsExtractions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsExtractions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._source = undefined;
      this._target = undefined;
      this._template = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._source = value.source;
      this._target = value.target;
      this._template = value.template;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class ServiceEventRuleActionsExtractionsList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsExtractions[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsExtractionsOutputReference {
    return new ServiceEventRuleActionsExtractionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActionsPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleActionsPriorityToTerraform(struct?: ServiceEventRuleActionsPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function serviceEventRuleActionsPriorityToHclTerraform(struct?: ServiceEventRuleActionsPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceEventRuleActionsPriorityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsPriority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsPriority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class ServiceEventRuleActionsPriorityList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsPriority[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsPriorityOutputReference {
    return new ServiceEventRuleActionsPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActionsSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleActionsSeverityToTerraform(struct?: ServiceEventRuleActionsSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function serviceEventRuleActionsSeverityToHclTerraform(struct?: ServiceEventRuleActionsSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceEventRuleActionsSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsSeverity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsSeverity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class ServiceEventRuleActionsSeverityList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsSeverity[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsSeverityOutputReference {
    return new ServiceEventRuleActionsSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActionsSuppress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#threshold_time_amount ServiceEventRule#threshold_time_amount}
  */
  readonly thresholdTimeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#threshold_time_unit ServiceEventRule#threshold_time_unit}
  */
  readonly thresholdTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#threshold_value ServiceEventRule#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function serviceEventRuleActionsSuppressToTerraform(struct?: ServiceEventRuleActionsSuppress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold_time_amount: cdktn.numberToTerraform(struct!.thresholdTimeAmount),
    threshold_time_unit: cdktn.stringToTerraform(struct!.thresholdTimeUnit),
    threshold_value: cdktn.numberToTerraform(struct!.thresholdValue),
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function serviceEventRuleActionsSuppressToHclTerraform(struct?: ServiceEventRuleActionsSuppress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold_time_amount: {
      value: cdktn.numberToHclTerraform(struct!.thresholdTimeAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_time_unit: {
      value: cdktn.stringToHclTerraform(struct!.thresholdTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktn.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktn.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleActionsSuppressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsSuppress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thresholdTimeAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTimeAmount = this._thresholdTimeAmount;
    }
    if (this._thresholdTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTimeUnit = this._thresholdTimeUnit;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsSuppress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._thresholdTimeAmount = undefined;
      this._thresholdTimeUnit = undefined;
      this._thresholdValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._thresholdTimeAmount = value.thresholdTimeAmount;
      this._thresholdTimeUnit = value.thresholdTimeUnit;
      this._thresholdValue = value.thresholdValue;
      this._value = value.value;
    }
  }

  // threshold_time_amount - computed: false, optional: true, required: false
  private _thresholdTimeAmount?: number; 
  public get thresholdTimeAmount() {
    return this.getNumberAttribute('threshold_time_amount');
  }
  public set thresholdTimeAmount(value: number) {
    this._thresholdTimeAmount = value;
  }
  public resetThresholdTimeAmount() {
    this._thresholdTimeAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTimeAmountInput() {
    return this._thresholdTimeAmount;
  }

  // threshold_time_unit - computed: false, optional: true, required: false
  private _thresholdTimeUnit?: string; 
  public get thresholdTimeUnit() {
    return this.getStringAttribute('threshold_time_unit');
  }
  public set thresholdTimeUnit(value: string) {
    this._thresholdTimeUnit = value;
  }
  public resetThresholdTimeUnit() {
    this._thresholdTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTimeUnitInput() {
    return this._thresholdTimeUnit;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktn.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktn.IResolvable) {
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

export class ServiceEventRuleActionsSuppressList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsSuppress[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsSuppressOutputReference {
    return new ServiceEventRuleActionsSuppressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActionsSuspend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: number;
}

export function serviceEventRuleActionsSuspendToTerraform(struct?: ServiceEventRuleActionsSuspend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function serviceEventRuleActionsSuspendToHclTerraform(struct?: ServiceEventRuleActionsSuspend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleActionsSuspendOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleActionsSuspend | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActionsSuspend | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class ServiceEventRuleActionsSuspendList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleActionsSuspend[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleActionsSuspendOutputReference {
    return new ServiceEventRuleActionsSuspendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleActions {
  /**
  * annotate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#annotate ServiceEventRule#annotate}
  */
  readonly annotate?: ServiceEventRuleActionsAnnotate[] | cdktn.IResolvable;
  /**
  * event_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#event_action ServiceEventRule#event_action}
  */
  readonly eventAction?: ServiceEventRuleActionsEventAction[] | cdktn.IResolvable;
  /**
  * extractions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#extractions ServiceEventRule#extractions}
  */
  readonly extractions?: ServiceEventRuleActionsExtractions[] | cdktn.IResolvable;
  /**
  * priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#priority ServiceEventRule#priority}
  */
  readonly priority?: ServiceEventRuleActionsPriority[] | cdktn.IResolvable;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#severity ServiceEventRule#severity}
  */
  readonly severity?: ServiceEventRuleActionsSeverity[] | cdktn.IResolvable;
  /**
  * suppress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#suppress ServiceEventRule#suppress}
  */
  readonly suppress?: ServiceEventRuleActionsSuppress[] | cdktn.IResolvable;
  /**
  * suspend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#suspend ServiceEventRule#suspend}
  */
  readonly suspend?: ServiceEventRuleActionsSuspend[] | cdktn.IResolvable;
}

export function serviceEventRuleActionsToTerraform(struct?: ServiceEventRuleActionsOutputReference | ServiceEventRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotate: cdktn.listMapper(serviceEventRuleActionsAnnotateToTerraform, true)(struct!.annotate),
    event_action: cdktn.listMapper(serviceEventRuleActionsEventActionToTerraform, true)(struct!.eventAction),
    extractions: cdktn.listMapper(serviceEventRuleActionsExtractionsToTerraform, true)(struct!.extractions),
    priority: cdktn.listMapper(serviceEventRuleActionsPriorityToTerraform, true)(struct!.priority),
    severity: cdktn.listMapper(serviceEventRuleActionsSeverityToTerraform, true)(struct!.severity),
    suppress: cdktn.listMapper(serviceEventRuleActionsSuppressToTerraform, true)(struct!.suppress),
    suspend: cdktn.listMapper(serviceEventRuleActionsSuspendToTerraform, true)(struct!.suspend),
  }
}


export function serviceEventRuleActionsToHclTerraform(struct?: ServiceEventRuleActionsOutputReference | ServiceEventRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotate: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsAnnotateToHclTerraform, true)(struct!.annotate),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsAnnotateList",
    },
    event_action: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsEventActionToHclTerraform, true)(struct!.eventAction),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsEventActionList",
    },
    extractions: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsExtractionsToHclTerraform, true)(struct!.extractions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsExtractionsList",
    },
    priority: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsPriorityToHclTerraform, true)(struct!.priority),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsPriorityList",
    },
    severity: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsSeverityToHclTerraform, true)(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsSeverityList",
    },
    suppress: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsSuppressToHclTerraform, true)(struct!.suppress),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsSuppressList",
    },
    suspend: {
      value: cdktn.listMapperHcl(serviceEventRuleActionsSuspendToHclTerraform, true)(struct!.suspend),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleActionsSuspendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceEventRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotate = this._annotate?.internalValue;
    }
    if (this._eventAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction?.internalValue;
    }
    if (this._extractions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractions = this._extractions?.internalValue;
    }
    if (this._priority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._suppress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress?.internalValue;
    }
    if (this._suspend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate.internalValue = undefined;
      this._eventAction.internalValue = undefined;
      this._extractions.internalValue = undefined;
      this._priority.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._suppress.internalValue = undefined;
      this._suspend.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotate.internalValue = value.annotate;
      this._eventAction.internalValue = value.eventAction;
      this._extractions.internalValue = value.extractions;
      this._priority.internalValue = value.priority;
      this._severity.internalValue = value.severity;
      this._suppress.internalValue = value.suppress;
      this._suspend.internalValue = value.suspend;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate = new ServiceEventRuleActionsAnnotateList(this, "annotate", false);
  public get annotate() {
    return this._annotate;
  }
  public putAnnotate(value: ServiceEventRuleActionsAnnotate[] | cdktn.IResolvable) {
    this._annotate.internalValue = value;
  }
  public resetAnnotate() {
    this._annotate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotateInput() {
    return this._annotate.internalValue;
  }

  // event_action - computed: false, optional: true, required: false
  private _eventAction = new ServiceEventRuleActionsEventActionList(this, "event_action", false);
  public get eventAction() {
    return this._eventAction;
  }
  public putEventAction(value: ServiceEventRuleActionsEventAction[] | cdktn.IResolvable) {
    this._eventAction.internalValue = value;
  }
  public resetEventAction() {
    this._eventAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction.internalValue;
  }

  // extractions - computed: false, optional: true, required: false
  private _extractions = new ServiceEventRuleActionsExtractionsList(this, "extractions", false);
  public get extractions() {
    return this._extractions;
  }
  public putExtractions(value: ServiceEventRuleActionsExtractions[] | cdktn.IResolvable) {
    this._extractions.internalValue = value;
  }
  public resetExtractions() {
    this._extractions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionsInput() {
    return this._extractions.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority = new ServiceEventRuleActionsPriorityList(this, "priority", false);
  public get priority() {
    return this._priority;
  }
  public putPriority(value: ServiceEventRuleActionsPriority[] | cdktn.IResolvable) {
    this._priority.internalValue = value;
  }
  public resetPriority() {
    this._priority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new ServiceEventRuleActionsSeverityList(this, "severity", false);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: ServiceEventRuleActionsSeverity[] | cdktn.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress = new ServiceEventRuleActionsSuppressList(this, "suppress", false);
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: ServiceEventRuleActionsSuppress[] | cdktn.IResolvable) {
    this._suppress.internalValue = value;
  }
  public resetSuppress() {
    this._suppress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress.internalValue;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend = new ServiceEventRuleActionsSuspendList(this, "suspend", false);
  public get suspend() {
    return this._suspend;
  }
  public putSuspend(value: ServiceEventRuleActionsSuspend[] | cdktn.IResolvable) {
    this._suspend.internalValue = value;
  }
  public resetSuspend() {
    this._suspend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend.internalValue;
  }
}
export interface ServiceEventRuleConditionsSubconditionsParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#path ServiceEventRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleConditionsSubconditionsParameterToTerraform(struct?: ServiceEventRuleConditionsSubconditionsParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function serviceEventRuleConditionsSubconditionsParameterToHclTerraform(struct?: ServiceEventRuleConditionsSubconditionsParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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

export class ServiceEventRuleConditionsSubconditionsParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleConditionsSubconditionsParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleConditionsSubconditionsParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class ServiceEventRuleConditionsSubconditionsParameterList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleConditionsSubconditionsParameter[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleConditionsSubconditionsParameterOutputReference {
    return new ServiceEventRuleConditionsSubconditionsParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleConditionsSubconditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#operator ServiceEventRule#operator}
  */
  readonly operator?: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#parameter ServiceEventRule#parameter}
  */
  readonly parameter?: ServiceEventRuleConditionsSubconditionsParameter[] | cdktn.IResolvable;
}

export function serviceEventRuleConditionsSubconditionsToTerraform(struct?: ServiceEventRuleConditionsSubconditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    parameter: cdktn.listMapper(serviceEventRuleConditionsSubconditionsParameterToTerraform, true)(struct!.parameter),
  }
}


export function serviceEventRuleConditionsSubconditionsToHclTerraform(struct?: ServiceEventRuleConditionsSubconditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktn.listMapperHcl(serviceEventRuleConditionsSubconditionsParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleConditionsSubconditionsParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleConditionsSubconditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleConditionsSubconditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleConditionsSubconditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._parameter.internalValue = value.parameter;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ServiceEventRuleConditionsSubconditionsParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ServiceEventRuleConditionsSubconditionsParameter[] | cdktn.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class ServiceEventRuleConditionsSubconditionsList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleConditionsSubconditions[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleConditionsSubconditionsOutputReference {
    return new ServiceEventRuleConditionsSubconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#operator ServiceEventRule#operator}
  */
  readonly operator?: string;
  /**
  * subconditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#subconditions ServiceEventRule#subconditions}
  */
  readonly subconditions?: ServiceEventRuleConditionsSubconditions[] | cdktn.IResolvable;
}

export function serviceEventRuleConditionsToTerraform(struct?: ServiceEventRuleConditionsOutputReference | ServiceEventRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    subconditions: cdktn.listMapper(serviceEventRuleConditionsSubconditionsToTerraform, true)(struct!.subconditions),
  }
}


export function serviceEventRuleConditionsToHclTerraform(struct?: ServiceEventRuleConditionsOutputReference | ServiceEventRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subconditions: {
      value: cdktn.listMapperHcl(serviceEventRuleConditionsSubconditionsToHclTerraform, true)(struct!.subconditions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleConditionsSubconditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceEventRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._subconditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subconditions = this._subconditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._subconditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._subconditions.internalValue = value.subconditions;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // subconditions - computed: false, optional: true, required: false
  private _subconditions = new ServiceEventRuleConditionsSubconditionsList(this, "subconditions", false);
  public get subconditions() {
    return this._subconditions;
  }
  public putSubconditions(value: ServiceEventRuleConditionsSubconditions[] | cdktn.IResolvable) {
    this._subconditions.internalValue = value;
  }
  public resetSubconditions() {
    this._subconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subconditionsInput() {
    return this._subconditions.internalValue;
  }
}
export interface ServiceEventRuleTimeFrameActiveBetween {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#end_time ServiceEventRule#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#start_time ServiceEventRule#start_time}
  */
  readonly startTime?: number;
}

export function serviceEventRuleTimeFrameActiveBetweenToTerraform(struct?: ServiceEventRuleTimeFrameActiveBetween | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktn.numberToTerraform(struct!.endTime),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function serviceEventRuleTimeFrameActiveBetweenToHclTerraform(struct?: ServiceEventRuleTimeFrameActiveBetween | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktn.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleTimeFrameActiveBetweenOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleTimeFrameActiveBetween | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleTimeFrameActiveBetween | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class ServiceEventRuleTimeFrameActiveBetweenList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleTimeFrameActiveBetween[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleTimeFrameActiveBetweenOutputReference {
    return new ServiceEventRuleTimeFrameActiveBetweenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleTimeFrameScheduledWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#duration ServiceEventRule#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#start_time ServiceEventRule#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#timezone ServiceEventRule#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#weekdays ServiceEventRule#weekdays}
  */
  readonly weekdays?: number[];
}

export function serviceEventRuleTimeFrameScheduledWeeklyToTerraform(struct?: ServiceEventRuleTimeFrameScheduledWeekly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    start_time: cdktn.numberToTerraform(struct!.startTime),
    timezone: cdktn.stringToTerraform(struct!.timezone),
    weekdays: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.weekdays),
  }
}


export function serviceEventRuleTimeFrameScheduledWeeklyToHclTerraform(struct?: ServiceEventRuleTimeFrameScheduledWeekly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleTimeFrameScheduledWeeklyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleTimeFrameScheduledWeekly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleTimeFrameScheduledWeekly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._startTime = undefined;
      this._timezone = undefined;
      this._weekdays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._startTime = value.startTime;
      this._timezone = value.timezone;
      this._weekdays = value.weekdays;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: number[]; 
  public get weekdays() {
    return this.getNumberListAttribute('weekdays');
  }
  public set weekdays(value: number[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}

export class ServiceEventRuleTimeFrameScheduledWeeklyList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleTimeFrameScheduledWeekly[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleTimeFrameScheduledWeeklyOutputReference {
    return new ServiceEventRuleTimeFrameScheduledWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleTimeFrame {
  /**
  * active_between block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#active_between ServiceEventRule#active_between}
  */
  readonly activeBetween?: ServiceEventRuleTimeFrameActiveBetween[] | cdktn.IResolvable;
  /**
  * scheduled_weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#scheduled_weekly ServiceEventRule#scheduled_weekly}
  */
  readonly scheduledWeekly?: ServiceEventRuleTimeFrameScheduledWeekly[] | cdktn.IResolvable;
}

export function serviceEventRuleTimeFrameToTerraform(struct?: ServiceEventRuleTimeFrameOutputReference | ServiceEventRuleTimeFrame): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_between: cdktn.listMapper(serviceEventRuleTimeFrameActiveBetweenToTerraform, true)(struct!.activeBetween),
    scheduled_weekly: cdktn.listMapper(serviceEventRuleTimeFrameScheduledWeeklyToTerraform, true)(struct!.scheduledWeekly),
  }
}


export function serviceEventRuleTimeFrameToHclTerraform(struct?: ServiceEventRuleTimeFrameOutputReference | ServiceEventRuleTimeFrame): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_between: {
      value: cdktn.listMapperHcl(serviceEventRuleTimeFrameActiveBetweenToHclTerraform, true)(struct!.activeBetween),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleTimeFrameActiveBetweenList",
    },
    scheduled_weekly: {
      value: cdktn.listMapperHcl(serviceEventRuleTimeFrameScheduledWeeklyToHclTerraform, true)(struct!.scheduledWeekly),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleTimeFrameScheduledWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleTimeFrameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceEventRuleTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBetween?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBetween = this._activeBetween?.internalValue;
    }
    if (this._scheduledWeekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledWeekly = this._scheduledWeekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBetween.internalValue = undefined;
      this._scheduledWeekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBetween.internalValue = value.activeBetween;
      this._scheduledWeekly.internalValue = value.scheduledWeekly;
    }
  }

  // active_between - computed: false, optional: true, required: false
  private _activeBetween = new ServiceEventRuleTimeFrameActiveBetweenList(this, "active_between", false);
  public get activeBetween() {
    return this._activeBetween;
  }
  public putActiveBetween(value: ServiceEventRuleTimeFrameActiveBetween[] | cdktn.IResolvable) {
    this._activeBetween.internalValue = value;
  }
  public resetActiveBetween() {
    this._activeBetween.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBetweenInput() {
    return this._activeBetween.internalValue;
  }

  // scheduled_weekly - computed: false, optional: true, required: false
  private _scheduledWeekly = new ServiceEventRuleTimeFrameScheduledWeeklyList(this, "scheduled_weekly", false);
  public get scheduledWeekly() {
    return this._scheduledWeekly;
  }
  public putScheduledWeekly(value: ServiceEventRuleTimeFrameScheduledWeekly[] | cdktn.IResolvable) {
    this._scheduledWeekly.internalValue = value;
  }
  public resetScheduledWeekly() {
    this._scheduledWeekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledWeeklyInput() {
    return this._scheduledWeekly.internalValue;
  }
}
export interface ServiceEventRuleVariableParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#path ServiceEventRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#value ServiceEventRule#value}
  */
  readonly value?: string;
}

export function serviceEventRuleVariableParametersToTerraform(struct?: ServiceEventRuleVariableParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function serviceEventRuleVariableParametersToHclTerraform(struct?: ServiceEventRuleVariableParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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

export class ServiceEventRuleVariableParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleVariableParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleVariableParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class ServiceEventRuleVariableParametersList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleVariableParameters[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleVariableParametersOutputReference {
    return new ServiceEventRuleVariableParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceEventRuleVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#name ServiceEventRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#type ServiceEventRule#type}
  */
  readonly type?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#parameters ServiceEventRule#parameters}
  */
  readonly parameters?: ServiceEventRuleVariableParameters[] | cdktn.IResolvable;
}

export function serviceEventRuleVariableToTerraform(struct?: ServiceEventRuleVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(serviceEventRuleVariableParametersToTerraform, true)(struct!.parameters),
  }
}


export function serviceEventRuleVariableToHclTerraform(struct?: ServiceEventRuleVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    parameters: {
      value: cdktn.listMapperHcl(serviceEventRuleVariableParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceEventRuleVariableParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEventRuleVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceEventRuleVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEventRuleVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ServiceEventRuleVariableParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ServiceEventRuleVariableParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ServiceEventRuleVariableList extends cdktn.ComplexList {
  public internalValue? : ServiceEventRuleVariable[] | cdktn.IResolvable

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
  public get(index: number): ServiceEventRuleVariableOutputReference {
    return new ServiceEventRuleVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule pagerduty_service_event_rule}
*/
export class ServiceEventRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_service_event_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServiceEventRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceEventRule to import
  * @param importFromId The id of the existing ServiceEventRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceEventRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_service_event_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/service_event_rule pagerduty_service_event_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceEventRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceEventRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_service_event_rule',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._position = config.position;
    this._service = config.service;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._timeFrame.internalValue = config.timeFrame;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: true, optional: true, required: false
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

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new ServiceEventRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: ServiceEventRuleActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ServiceEventRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ServiceEventRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // time_frame - computed: false, optional: true, required: false
  private _timeFrame = new ServiceEventRuleTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: ServiceEventRuleTimeFrame) {
    this._timeFrame.internalValue = value;
  }
  public resetTimeFrame() {
    this._timeFrame.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new ServiceEventRuleVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: ServiceEventRuleVariable[] | cdktn.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktn.booleanToTerraform(this._disabled),
      id: cdktn.stringToTerraform(this._id),
      position: cdktn.numberToTerraform(this._position),
      service: cdktn.stringToTerraform(this._service),
      actions: serviceEventRuleActionsToTerraform(this._actions.internalValue),
      conditions: serviceEventRuleConditionsToTerraform(this._conditions.internalValue),
      time_frame: serviceEventRuleTimeFrameToTerraform(this._timeFrame.internalValue),
      variable: cdktn.listMapper(serviceEventRuleVariableToTerraform, true)(this._variable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktn.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktn.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: serviceEventRuleActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceEventRuleActionsList",
      },
      conditions: {
        value: serviceEventRuleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceEventRuleConditionsList",
      },
      time_frame: {
        value: serviceEventRuleTimeFrameToHclTerraform(this._timeFrame.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceEventRuleTimeFrameList",
      },
      variable: {
        value: cdktn.listMapperHcl(serviceEventRuleVariableToHclTerraform, true)(this._variable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceEventRuleVariableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
