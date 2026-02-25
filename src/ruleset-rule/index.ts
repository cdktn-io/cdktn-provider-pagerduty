/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RulesetRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}
  */
  readonly catchAll?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#disabled RulesetRule#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#id RulesetRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#position RulesetRule#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}
  */
  readonly ruleset: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#actions RulesetRule#actions}
  */
  readonly actions?: RulesetRuleActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#conditions RulesetRule#conditions}
  */
  readonly conditions?: RulesetRuleConditions;
  /**
  * time_frame block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#time_frame RulesetRule#time_frame}
  */
  readonly timeFrame?: RulesetRuleTimeFrame;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#variable RulesetRule#variable}
  */
  readonly variable?: RulesetRuleVariable[] | cdktn.IResolvable;
}
export interface RulesetRuleActionsAnnotate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsAnnotateToTerraform(struct?: RulesetRuleActionsAnnotate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleActionsAnnotateToHclTerraform(struct?: RulesetRuleActionsAnnotate | cdktn.IResolvable): any {
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

export class RulesetRuleActionsAnnotateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsAnnotate | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsAnnotate | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsAnnotateList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsAnnotate[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsAnnotateOutputReference {
    return new RulesetRuleActionsAnnotateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsEventAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsEventActionToTerraform(struct?: RulesetRuleActionsEventAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleActionsEventActionToHclTerraform(struct?: RulesetRuleActionsEventAction | cdktn.IResolvable): any {
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

export class RulesetRuleActionsEventActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsEventAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsEventAction | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsEventActionList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsEventAction[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsEventActionOutputReference {
    return new RulesetRuleActionsEventActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsExtractions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#regex RulesetRule#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#source RulesetRule#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#target RulesetRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#template RulesetRule#template}
  */
  readonly template?: string;
}

export function rulesetRuleActionsExtractionsToTerraform(struct?: RulesetRuleActionsExtractions | cdktn.IResolvable): any {
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


export function rulesetRuleActionsExtractionsToHclTerraform(struct?: RulesetRuleActionsExtractions | cdktn.IResolvable): any {
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

export class RulesetRuleActionsExtractionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsExtractions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsExtractions | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsExtractionsList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsExtractions[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsExtractionsOutputReference {
    return new RulesetRuleActionsExtractionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsPriorityToTerraform(struct?: RulesetRuleActionsPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleActionsPriorityToHclTerraform(struct?: RulesetRuleActionsPriority | cdktn.IResolvable): any {
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

export class RulesetRuleActionsPriorityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsPriority | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsPriority | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsPriorityList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsPriority[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsPriorityOutputReference {
    return new RulesetRuleActionsPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsRouteToTerraform(struct?: RulesetRuleActionsRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleActionsRouteToHclTerraform(struct?: RulesetRuleActionsRoute | cdktn.IResolvable): any {
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

export class RulesetRuleActionsRouteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsRoute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsRoute | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsRouteList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsRoute[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsRouteOutputReference {
    return new RulesetRuleActionsRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleActionsSeverityToTerraform(struct?: RulesetRuleActionsSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleActionsSeverityToHclTerraform(struct?: RulesetRuleActionsSeverity | cdktn.IResolvable): any {
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

export class RulesetRuleActionsSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsSeverity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsSeverity | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsSeverityList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsSeverity[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsSeverityOutputReference {
    return new RulesetRuleActionsSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsSuppress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}
  */
  readonly thresholdTimeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}
  */
  readonly thresholdTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function rulesetRuleActionsSuppressToTerraform(struct?: RulesetRuleActionsSuppress | cdktn.IResolvable): any {
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


export function rulesetRuleActionsSuppressToHclTerraform(struct?: RulesetRuleActionsSuppress | cdktn.IResolvable): any {
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

export class RulesetRuleActionsSuppressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsSuppress | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsSuppress | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsSuppressList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsSuppress[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsSuppressOutputReference {
    return new RulesetRuleActionsSuppressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActionsSuspend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: number;
}

export function rulesetRuleActionsSuspendToTerraform(struct?: RulesetRuleActionsSuspend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function rulesetRuleActionsSuspendToHclTerraform(struct?: RulesetRuleActionsSuspend | cdktn.IResolvable): any {
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

export class RulesetRuleActionsSuspendOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleActionsSuspend | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleActionsSuspend | cdktn.IResolvable | undefined) {
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

export class RulesetRuleActionsSuspendList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleActionsSuspend[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleActionsSuspendOutputReference {
    return new RulesetRuleActionsSuspendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleActions {
  /**
  * annotate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#annotate RulesetRule#annotate}
  */
  readonly annotate?: RulesetRuleActionsAnnotate[] | cdktn.IResolvable;
  /**
  * event_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#event_action RulesetRule#event_action}
  */
  readonly eventAction?: RulesetRuleActionsEventAction[] | cdktn.IResolvable;
  /**
  * extractions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#extractions RulesetRule#extractions}
  */
  readonly extractions?: RulesetRuleActionsExtractions[] | cdktn.IResolvable;
  /**
  * priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#priority RulesetRule#priority}
  */
  readonly priority?: RulesetRuleActionsPriority[] | cdktn.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#route RulesetRule#route}
  */
  readonly route?: RulesetRuleActionsRoute[] | cdktn.IResolvable;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#severity RulesetRule#severity}
  */
  readonly severity?: RulesetRuleActionsSeverity[] | cdktn.IResolvable;
  /**
  * suppress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#suppress RulesetRule#suppress}
  */
  readonly suppress?: RulesetRuleActionsSuppress[] | cdktn.IResolvable;
  /**
  * suspend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#suspend RulesetRule#suspend}
  */
  readonly suspend?: RulesetRuleActionsSuspend[] | cdktn.IResolvable;
}

export function rulesetRuleActionsToTerraform(struct?: RulesetRuleActionsOutputReference | RulesetRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotate: cdktn.listMapper(rulesetRuleActionsAnnotateToTerraform, true)(struct!.annotate),
    event_action: cdktn.listMapper(rulesetRuleActionsEventActionToTerraform, true)(struct!.eventAction),
    extractions: cdktn.listMapper(rulesetRuleActionsExtractionsToTerraform, true)(struct!.extractions),
    priority: cdktn.listMapper(rulesetRuleActionsPriorityToTerraform, true)(struct!.priority),
    route: cdktn.listMapper(rulesetRuleActionsRouteToTerraform, true)(struct!.route),
    severity: cdktn.listMapper(rulesetRuleActionsSeverityToTerraform, true)(struct!.severity),
    suppress: cdktn.listMapper(rulesetRuleActionsSuppressToTerraform, true)(struct!.suppress),
    suspend: cdktn.listMapper(rulesetRuleActionsSuspendToTerraform, true)(struct!.suspend),
  }
}


export function rulesetRuleActionsToHclTerraform(struct?: RulesetRuleActionsOutputReference | RulesetRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotate: {
      value: cdktn.listMapperHcl(rulesetRuleActionsAnnotateToHclTerraform, true)(struct!.annotate),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsAnnotateList",
    },
    event_action: {
      value: cdktn.listMapperHcl(rulesetRuleActionsEventActionToHclTerraform, true)(struct!.eventAction),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsEventActionList",
    },
    extractions: {
      value: cdktn.listMapperHcl(rulesetRuleActionsExtractionsToHclTerraform, true)(struct!.extractions),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsExtractionsList",
    },
    priority: {
      value: cdktn.listMapperHcl(rulesetRuleActionsPriorityToHclTerraform, true)(struct!.priority),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsPriorityList",
    },
    route: {
      value: cdktn.listMapperHcl(rulesetRuleActionsRouteToHclTerraform, true)(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsRouteList",
    },
    severity: {
      value: cdktn.listMapperHcl(rulesetRuleActionsSeverityToHclTerraform, true)(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsSeverityList",
    },
    suppress: {
      value: cdktn.listMapperHcl(rulesetRuleActionsSuppressToHclTerraform, true)(struct!.suppress),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsSuppressList",
    },
    suspend: {
      value: cdktn.listMapperHcl(rulesetRuleActionsSuspendToHclTerraform, true)(struct!.suspend),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleActionsSuspendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRuleActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRuleActions | undefined {
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
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
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

  public set internalValue(value: RulesetRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate.internalValue = undefined;
      this._eventAction.internalValue = undefined;
      this._extractions.internalValue = undefined;
      this._priority.internalValue = undefined;
      this._route.internalValue = undefined;
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
      this._route.internalValue = value.route;
      this._severity.internalValue = value.severity;
      this._suppress.internalValue = value.suppress;
      this._suspend.internalValue = value.suspend;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate = new RulesetRuleActionsAnnotateList(this, "annotate", false);
  public get annotate() {
    return this._annotate;
  }
  public putAnnotate(value: RulesetRuleActionsAnnotate[] | cdktn.IResolvable) {
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
  private _eventAction = new RulesetRuleActionsEventActionList(this, "event_action", false);
  public get eventAction() {
    return this._eventAction;
  }
  public putEventAction(value: RulesetRuleActionsEventAction[] | cdktn.IResolvable) {
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
  private _extractions = new RulesetRuleActionsExtractionsList(this, "extractions", false);
  public get extractions() {
    return this._extractions;
  }
  public putExtractions(value: RulesetRuleActionsExtractions[] | cdktn.IResolvable) {
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
  private _priority = new RulesetRuleActionsPriorityList(this, "priority", false);
  public get priority() {
    return this._priority;
  }
  public putPriority(value: RulesetRuleActionsPriority[] | cdktn.IResolvable) {
    this._priority.internalValue = value;
  }
  public resetPriority() {
    this._priority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new RulesetRuleActionsRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: RulesetRuleActionsRoute[] | cdktn.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new RulesetRuleActionsSeverityList(this, "severity", false);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: RulesetRuleActionsSeverity[] | cdktn.IResolvable) {
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
  private _suppress = new RulesetRuleActionsSuppressList(this, "suppress", false);
  public get suppress() {
    return this._suppress;
  }
  public putSuppress(value: RulesetRuleActionsSuppress[] | cdktn.IResolvable) {
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
  private _suspend = new RulesetRuleActionsSuspendList(this, "suspend", false);
  public get suspend() {
    return this._suspend;
  }
  public putSuspend(value: RulesetRuleActionsSuspend[] | cdktn.IResolvable) {
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
export interface RulesetRuleConditionsSubconditionsParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#path RulesetRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleConditionsSubconditionsParameterToTerraform(struct?: RulesetRuleConditionsSubconditionsParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleConditionsSubconditionsParameterToHclTerraform(struct?: RulesetRuleConditionsSubconditionsParameter | cdktn.IResolvable): any {
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

export class RulesetRuleConditionsSubconditionsParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleConditionsSubconditionsParameter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleConditionsSubconditionsParameter | cdktn.IResolvable | undefined) {
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

export class RulesetRuleConditionsSubconditionsParameterList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleConditionsSubconditionsParameter[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleConditionsSubconditionsParameterOutputReference {
    return new RulesetRuleConditionsSubconditionsParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleConditionsSubconditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#operator RulesetRule#operator}
  */
  readonly operator?: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#parameter RulesetRule#parameter}
  */
  readonly parameter?: RulesetRuleConditionsSubconditionsParameter[] | cdktn.IResolvable;
}

export function rulesetRuleConditionsSubconditionsToTerraform(struct?: RulesetRuleConditionsSubconditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    parameter: cdktn.listMapper(rulesetRuleConditionsSubconditionsParameterToTerraform, true)(struct!.parameter),
  }
}


export function rulesetRuleConditionsSubconditionsToHclTerraform(struct?: RulesetRuleConditionsSubconditions | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(rulesetRuleConditionsSubconditionsParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleConditionsSubconditionsParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRuleConditionsSubconditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleConditionsSubconditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleConditionsSubconditions | cdktn.IResolvable | undefined) {
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
  private _parameter = new RulesetRuleConditionsSubconditionsParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: RulesetRuleConditionsSubconditionsParameter[] | cdktn.IResolvable) {
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

export class RulesetRuleConditionsSubconditionsList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleConditionsSubconditions[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleConditionsSubconditionsOutputReference {
    return new RulesetRuleConditionsSubconditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#operator RulesetRule#operator}
  */
  readonly operator?: string;
  /**
  * subconditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#subconditions RulesetRule#subconditions}
  */
  readonly subconditions?: RulesetRuleConditionsSubconditions[] | cdktn.IResolvable;
}

export function rulesetRuleConditionsToTerraform(struct?: RulesetRuleConditionsOutputReference | RulesetRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    subconditions: cdktn.listMapper(rulesetRuleConditionsSubconditionsToTerraform, true)(struct!.subconditions),
  }
}


export function rulesetRuleConditionsToHclTerraform(struct?: RulesetRuleConditionsOutputReference | RulesetRuleConditions): any {
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
      value: cdktn.listMapperHcl(rulesetRuleConditionsSubconditionsToHclTerraform, true)(struct!.subconditions),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleConditionsSubconditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRuleConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRuleConditions | undefined {
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

  public set internalValue(value: RulesetRuleConditions | undefined) {
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
  private _subconditions = new RulesetRuleConditionsSubconditionsList(this, "subconditions", false);
  public get subconditions() {
    return this._subconditions;
  }
  public putSubconditions(value: RulesetRuleConditionsSubconditions[] | cdktn.IResolvable) {
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
export interface RulesetRuleTimeFrameActiveBetween {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#end_time RulesetRule#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#start_time RulesetRule#start_time}
  */
  readonly startTime?: number;
}

export function rulesetRuleTimeFrameActiveBetweenToTerraform(struct?: RulesetRuleTimeFrameActiveBetween | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktn.numberToTerraform(struct!.endTime),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function rulesetRuleTimeFrameActiveBetweenToHclTerraform(struct?: RulesetRuleTimeFrameActiveBetween | cdktn.IResolvable): any {
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

export class RulesetRuleTimeFrameActiveBetweenOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleTimeFrameActiveBetween | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleTimeFrameActiveBetween | cdktn.IResolvable | undefined) {
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

export class RulesetRuleTimeFrameActiveBetweenList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleTimeFrameActiveBetween[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleTimeFrameActiveBetweenOutputReference {
    return new RulesetRuleTimeFrameActiveBetweenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleTimeFrameScheduledWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#duration RulesetRule#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#start_time RulesetRule#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#timezone RulesetRule#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}
  */
  readonly weekdays?: number[];
}

export function rulesetRuleTimeFrameScheduledWeeklyToTerraform(struct?: RulesetRuleTimeFrameScheduledWeekly | cdktn.IResolvable): any {
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


export function rulesetRuleTimeFrameScheduledWeeklyToHclTerraform(struct?: RulesetRuleTimeFrameScheduledWeekly | cdktn.IResolvable): any {
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

export class RulesetRuleTimeFrameScheduledWeeklyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleTimeFrameScheduledWeekly | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleTimeFrameScheduledWeekly | cdktn.IResolvable | undefined) {
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

export class RulesetRuleTimeFrameScheduledWeeklyList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleTimeFrameScheduledWeekly[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleTimeFrameScheduledWeeklyOutputReference {
    return new RulesetRuleTimeFrameScheduledWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleTimeFrame {
  /**
  * active_between block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#active_between RulesetRule#active_between}
  */
  readonly activeBetween?: RulesetRuleTimeFrameActiveBetween[] | cdktn.IResolvable;
  /**
  * scheduled_weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#scheduled_weekly RulesetRule#scheduled_weekly}
  */
  readonly scheduledWeekly?: RulesetRuleTimeFrameScheduledWeekly[] | cdktn.IResolvable;
}

export function rulesetRuleTimeFrameToTerraform(struct?: RulesetRuleTimeFrameOutputReference | RulesetRuleTimeFrame): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_between: cdktn.listMapper(rulesetRuleTimeFrameActiveBetweenToTerraform, true)(struct!.activeBetween),
    scheduled_weekly: cdktn.listMapper(rulesetRuleTimeFrameScheduledWeeklyToTerraform, true)(struct!.scheduledWeekly),
  }
}


export function rulesetRuleTimeFrameToHclTerraform(struct?: RulesetRuleTimeFrameOutputReference | RulesetRuleTimeFrame): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_between: {
      value: cdktn.listMapperHcl(rulesetRuleTimeFrameActiveBetweenToHclTerraform, true)(struct!.activeBetween),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleTimeFrameActiveBetweenList",
    },
    scheduled_weekly: {
      value: cdktn.listMapperHcl(rulesetRuleTimeFrameScheduledWeeklyToHclTerraform, true)(struct!.scheduledWeekly),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleTimeFrameScheduledWeeklyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRuleTimeFrameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesetRuleTimeFrame | undefined {
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

  public set internalValue(value: RulesetRuleTimeFrame | undefined) {
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
  private _activeBetween = new RulesetRuleTimeFrameActiveBetweenList(this, "active_between", false);
  public get activeBetween() {
    return this._activeBetween;
  }
  public putActiveBetween(value: RulesetRuleTimeFrameActiveBetween[] | cdktn.IResolvable) {
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
  private _scheduledWeekly = new RulesetRuleTimeFrameScheduledWeeklyList(this, "scheduled_weekly", false);
  public get scheduledWeekly() {
    return this._scheduledWeekly;
  }
  public putScheduledWeekly(value: RulesetRuleTimeFrameScheduledWeekly[] | cdktn.IResolvable) {
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
export interface RulesetRuleVariableParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#path RulesetRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#value RulesetRule#value}
  */
  readonly value?: string;
}

export function rulesetRuleVariableParametersToTerraform(struct?: RulesetRuleVariableParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rulesetRuleVariableParametersToHclTerraform(struct?: RulesetRuleVariableParameters | cdktn.IResolvable): any {
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

export class RulesetRuleVariableParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleVariableParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleVariableParameters | cdktn.IResolvable | undefined) {
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

export class RulesetRuleVariableParametersList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleVariableParameters[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleVariableParametersOutputReference {
    return new RulesetRuleVariableParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesetRuleVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#name RulesetRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#type RulesetRule#type}
  */
  readonly type?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#parameters RulesetRule#parameters}
  */
  readonly parameters?: RulesetRuleVariableParameters[] | cdktn.IResolvable;
}

export function rulesetRuleVariableToTerraform(struct?: RulesetRuleVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(rulesetRuleVariableParametersToTerraform, true)(struct!.parameters),
  }
}


export function rulesetRuleVariableToHclTerraform(struct?: RulesetRuleVariable | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(rulesetRuleVariableParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "RulesetRuleVariableParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRuleVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RulesetRuleVariable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RulesetRuleVariable | cdktn.IResolvable | undefined) {
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
  private _parameters = new RulesetRuleVariableParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RulesetRuleVariableParameters[] | cdktn.IResolvable) {
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

export class RulesetRuleVariableList extends cdktn.ComplexList {
  public internalValue? : RulesetRuleVariable[] | cdktn.IResolvable

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
  public get(index: number): RulesetRuleVariableOutputReference {
    return new RulesetRuleVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule pagerduty_ruleset_rule}
*/
export class RulesetRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_ruleset_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RulesetRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RulesetRule to import
  * @param importFromId The id of the existing RulesetRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RulesetRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_ruleset_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/resources/ruleset_rule pagerduty_ruleset_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesetRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RulesetRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_ruleset_rule',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.31.1',
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
    this._catchAll = config.catchAll;
    this._disabled = config.disabled;
    this._id = config.id;
    this._position = config.position;
    this._ruleset = config.ruleset;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._timeFrame.internalValue = config.timeFrame;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catch_all - computed: false, optional: true, required: false
  private _catchAll?: boolean | cdktn.IResolvable; 
  public get catchAll() {
    return this.getBooleanAttribute('catch_all');
  }
  public set catchAll(value: boolean | cdktn.IResolvable) {
    this._catchAll = value;
  }
  public resetCatchAll() {
    this._catchAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllInput() {
    return this._catchAll;
  }

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

  // ruleset - computed: false, optional: false, required: true
  private _ruleset?: string; 
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }
  public set ruleset(value: string) {
    this._ruleset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetInput() {
    return this._ruleset;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new RulesetRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: RulesetRuleActions) {
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
  private _conditions = new RulesetRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RulesetRuleConditions) {
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
  private _timeFrame = new RulesetRuleTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: RulesetRuleTimeFrame) {
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
  private _variable = new RulesetRuleVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: RulesetRuleVariable[] | cdktn.IResolvable) {
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
      catch_all: cdktn.booleanToTerraform(this._catchAll),
      disabled: cdktn.booleanToTerraform(this._disabled),
      id: cdktn.stringToTerraform(this._id),
      position: cdktn.numberToTerraform(this._position),
      ruleset: cdktn.stringToTerraform(this._ruleset),
      actions: rulesetRuleActionsToTerraform(this._actions.internalValue),
      conditions: rulesetRuleConditionsToTerraform(this._conditions.internalValue),
      time_frame: rulesetRuleTimeFrameToTerraform(this._timeFrame.internalValue),
      variable: cdktn.listMapper(rulesetRuleVariableToTerraform, true)(this._variable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catch_all: {
        value: cdktn.booleanToHclTerraform(this._catchAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      ruleset: {
        value: cdktn.stringToHclTerraform(this._ruleset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: rulesetRuleActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesetRuleActionsList",
      },
      conditions: {
        value: rulesetRuleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesetRuleConditionsList",
      },
      time_frame: {
        value: rulesetRuleTimeFrameToHclTerraform(this._timeFrame.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesetRuleTimeFrameList",
      },
      variable: {
        value: cdktn.listMapperHcl(rulesetRuleVariableToHclTerraform, true)(this._variable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesetRuleVariableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
