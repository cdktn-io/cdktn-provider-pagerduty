/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EventOrchestrationGlobalConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}
  */
  readonly eventOrchestration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * catch_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#catch_all EventOrchestrationGlobal#catch_all}
  */
  readonly catchAll: EventOrchestrationGlobalCatchAll;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#set EventOrchestrationGlobal#set}
  */
  readonly set: EventOrchestrationGlobalSet[] | cdktn.IResolvable;
}
export interface EventOrchestrationGlobalCatchAllActionsAutomationActionHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalCatchAllActionsAutomationActionHeaderToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsAutomationActionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalCatchAllActionsAutomationActionHeaderToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsAutomationActionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCatchAllActionsAutomationActionHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCatchAllActionsAutomationActionHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalCatchAllActionsAutomationActionHeader[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference {
    return new EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCatchAllActionsAutomationActionParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalCatchAllActionsAutomationActionParameterToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsAutomationActionParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalCatchAllActionsAutomationActionParameterToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsAutomationActionParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCatchAllActionsAutomationActionParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCatchAllActionsAutomationActionParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalCatchAllActionsAutomationActionParameter[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference {
    return new EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCatchAllActionsAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}
  */
  readonly autoSend?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}
  */
  readonly triggerTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}
  */
  readonly url: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}
  */
  readonly header?: EventOrchestrationGlobalCatchAllActionsAutomationActionHeader[] | cdktn.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}
  */
  readonly parameter?: EventOrchestrationGlobalCatchAllActionsAutomationActionParameter[] | cdktn.IResolvable;
}

export function eventOrchestrationGlobalCatchAllActionsAutomationActionToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference | EventOrchestrationGlobalCatchAllActionsAutomationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_send: cdktn.booleanToTerraform(struct!.autoSend),
    name: cdktn.stringToTerraform(struct!.name),
    trigger_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.triggerTypes),
    url: cdktn.stringToTerraform(struct!.url),
    header: cdktn.listMapper(eventOrchestrationGlobalCatchAllActionsAutomationActionHeaderToTerraform, true)(struct!.header),
    parameter: cdktn.listMapper(eventOrchestrationGlobalCatchAllActionsAutomationActionParameterToTerraform, true)(struct!.parameter),
  }
}


export function eventOrchestrationGlobalCatchAllActionsAutomationActionToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference | EventOrchestrationGlobalCatchAllActionsAutomationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_send: {
      value: cdktn.booleanToHclTerraform(struct!.autoSend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.triggerTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalCatchAllActionsAutomationActionHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList",
    },
    parameter: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalCatchAllActionsAutomationActionParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalCatchAllActionsAutomationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSend = this._autoSend;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._triggerTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerTypes = this._triggerTypes;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCatchAllActionsAutomationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSend = undefined;
      this._name = undefined;
      this._triggerTypes = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSend = value.autoSend;
      this._name = value.name;
      this._triggerTypes = value.triggerTypes;
      this._url = value.url;
      this._header.internalValue = value.header;
      this._parameter.internalValue = value.parameter;
    }
  }

  // auto_send - computed: false, optional: true, required: false
  private _autoSend?: boolean | cdktn.IResolvable; 
  public get autoSend() {
    return this.getBooleanAttribute('auto_send');
  }
  public set autoSend(value: boolean | cdktn.IResolvable) {
    this._autoSend = value;
  }
  public resetAutoSend() {
    this._autoSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSendInput() {
    return this._autoSend;
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

  // trigger_types - computed: false, optional: true, required: false
  private _triggerTypes?: string[]; 
  public get triggerTypes() {
    return this.getListAttribute('trigger_types');
  }
  public set triggerTypes(value: string[]) {
    this._triggerTypes = value;
  }
  public resetTriggerTypes() {
    this._triggerTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypesInput() {
    return this._triggerTypes;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // header - computed: false, optional: true, required: false
  private _header = new EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: EventOrchestrationGlobalCatchAllActionsAutomationActionHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: EventOrchestrationGlobalCatchAllActionsAutomationActionParameter[] | cdktn.IResolvable) {
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
export interface EventOrchestrationGlobalCatchAllActionsExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}
  */
  readonly template?: string;
}

export function eventOrchestrationGlobalCatchAllActionsExtractionToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsExtraction | cdktn.IResolvable): any {
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


export function eventOrchestrationGlobalCatchAllActionsExtractionToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsExtraction | cdktn.IResolvable): any {
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

export class EventOrchestrationGlobalCatchAllActionsExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCatchAllActionsExtraction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EventOrchestrationGlobalCatchAllActionsExtraction | cdktn.IResolvable | undefined) {
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
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

export class EventOrchestrationGlobalCatchAllActionsExtractionList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalCatchAllActionsExtraction[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCatchAllActionsExtractionOutputReference {
    return new EventOrchestrationGlobalCatchAllActionsExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate | cdktn.IResolvable): any {
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

export class EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference {
    return new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCatchAllActionsVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalCatchAllActionsVariableToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalCatchAllActionsVariableToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsVariable | cdktn.IResolvable): any {
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
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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

export class EventOrchestrationGlobalCatchAllActionsVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCatchAllActionsVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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

  public set internalValue(value: EventOrchestrationGlobalCatchAllActionsVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
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
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
      this._value = value.value;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalCatchAllActionsVariableList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalCatchAllActionsVariable[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCatchAllActionsVariableOutputReference {
    return new EventOrchestrationGlobalCatchAllActionsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCatchAllActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}
  */
  readonly annotate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}
  */
  readonly dropEvent?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}
  */
  readonly escalationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}
  */
  readonly routeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}
  */
  readonly suppress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}
  */
  readonly suspend?: number;
  /**
  * automation_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}
  */
  readonly automationAction?: EventOrchestrationGlobalCatchAllActionsAutomationAction;
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}
  */
  readonly extraction?: EventOrchestrationGlobalCatchAllActionsExtraction[] | cdktn.IResolvable;
  /**
  * incident_custom_field_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}
  */
  readonly incidentCustomFieldUpdate?: EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate[] | cdktn.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}
  */
  readonly variable?: EventOrchestrationGlobalCatchAllActionsVariable[] | cdktn.IResolvable;
}

export function eventOrchestrationGlobalCatchAllActionsToTerraform(struct?: EventOrchestrationGlobalCatchAllActionsOutputReference | EventOrchestrationGlobalCatchAllActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotate: cdktn.stringToTerraform(struct!.annotate),
    drop_event: cdktn.booleanToTerraform(struct!.dropEvent),
    escalation_policy: cdktn.stringToTerraform(struct!.escalationPolicy),
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    priority: cdktn.stringToTerraform(struct!.priority),
    route_to: cdktn.stringToTerraform(struct!.routeTo),
    severity: cdktn.stringToTerraform(struct!.severity),
    suppress: cdktn.booleanToTerraform(struct!.suppress),
    suspend: cdktn.numberToTerraform(struct!.suspend),
    automation_action: eventOrchestrationGlobalCatchAllActionsAutomationActionToTerraform(struct!.automationAction),
    extraction: cdktn.listMapper(eventOrchestrationGlobalCatchAllActionsExtractionToTerraform, true)(struct!.extraction),
    incident_custom_field_update: cdktn.listMapper(eventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateToTerraform, true)(struct!.incidentCustomFieldUpdate),
    variable: cdktn.listMapper(eventOrchestrationGlobalCatchAllActionsVariableToTerraform, true)(struct!.variable),
  }
}


export function eventOrchestrationGlobalCatchAllActionsToHclTerraform(struct?: EventOrchestrationGlobalCatchAllActionsOutputReference | EventOrchestrationGlobalCatchAllActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotate: {
      value: cdktn.stringToHclTerraform(struct!.annotate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_event: {
      value: cdktn.booleanToHclTerraform(struct!.dropEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    escalation_policy: {
      value: cdktn.stringToHclTerraform(struct!.escalationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_to: {
      value: cdktn.stringToHclTerraform(struct!.routeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: cdktn.booleanToHclTerraform(struct!.suppress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend: {
      value: cdktn.numberToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    automation_action: {
      value: eventOrchestrationGlobalCatchAllActionsAutomationActionToHclTerraform(struct!.automationAction),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsAutomationActionList",
    },
    extraction: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalCatchAllActionsExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsExtractionList",
    },
    incident_custom_field_update: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateToHclTerraform, true)(struct!.incidentCustomFieldUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList",
    },
    variable: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalCatchAllActionsVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalCatchAllActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalCatchAllActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotate !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotate = this._annotate;
    }
    if (this._dropEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropEvent = this._dropEvent;
    }
    if (this._escalationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicy = this._escalationPolicy;
    }
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._routeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTo = this._routeTo;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._suppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._automationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationAction = this._automationAction?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._incidentCustomFieldUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentCustomFieldUpdate = this._incidentCustomFieldUpdate?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCatchAllActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate = undefined;
      this._dropEvent = undefined;
      this._escalationPolicy = undefined;
      this._eventAction = undefined;
      this._priority = undefined;
      this._routeTo = undefined;
      this._severity = undefined;
      this._suppress = undefined;
      this._suspend = undefined;
      this._automationAction.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._incidentCustomFieldUpdate.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotate = value.annotate;
      this._dropEvent = value.dropEvent;
      this._escalationPolicy = value.escalationPolicy;
      this._eventAction = value.eventAction;
      this._priority = value.priority;
      this._routeTo = value.routeTo;
      this._severity = value.severity;
      this._suppress = value.suppress;
      this._suspend = value.suspend;
      this._automationAction.internalValue = value.automationAction;
      this._extraction.internalValue = value.extraction;
      this._incidentCustomFieldUpdate.internalValue = value.incidentCustomFieldUpdate;
      this._variable.internalValue = value.variable;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate?: string; 
  public get annotate() {
    return this.getStringAttribute('annotate');
  }
  public set annotate(value: string) {
    this._annotate = value;
  }
  public resetAnnotate() {
    this._annotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotateInput() {
    return this._annotate;
  }

  // drop_event - computed: false, optional: true, required: false
  private _dropEvent?: boolean | cdktn.IResolvable; 
  public get dropEvent() {
    return this.getBooleanAttribute('drop_event');
  }
  public set dropEvent(value: boolean | cdktn.IResolvable) {
    this._dropEvent = value;
  }
  public resetDropEvent() {
    this._dropEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropEventInput() {
    return this._dropEvent;
  }

  // escalation_policy - computed: false, optional: true, required: false
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  public resetEscalationPolicy() {
    this._escalationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
  }

  // event_action - computed: false, optional: true, required: false
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_to - computed: false, optional: true, required: false
  private _routeTo?: string; 
  public get routeTo() {
    return this.getStringAttribute('route_to');
  }
  public set routeTo(value: string) {
    this._routeTo = value;
  }
  public resetRouteTo() {
    this._routeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToInput() {
    return this._routeTo;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress?: boolean | cdktn.IResolvable; 
  public get suppress() {
    return this.getBooleanAttribute('suppress');
  }
  public set suppress(value: boolean | cdktn.IResolvable) {
    this._suppress = value;
  }
  public resetSuppress() {
    this._suppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: number; 
  public get suspend() {
    return this.getNumberAttribute('suspend');
  }
  public set suspend(value: number) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // automation_action - computed: false, optional: true, required: false
  private _automationAction = new EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference(this, "automation_action");
  public get automationAction() {
    return this._automationAction;
  }
  public putAutomationAction(value: EventOrchestrationGlobalCatchAllActionsAutomationAction) {
    this._automationAction.internalValue = value;
  }
  public resetAutomationAction() {
    this._automationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationActionInput() {
    return this._automationAction.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new EventOrchestrationGlobalCatchAllActionsExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: EventOrchestrationGlobalCatchAllActionsExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // incident_custom_field_update - computed: false, optional: true, required: false
  private _incidentCustomFieldUpdate = new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList(this, "incident_custom_field_update", false);
  public get incidentCustomFieldUpdate() {
    return this._incidentCustomFieldUpdate;
  }
  public putIncidentCustomFieldUpdate(value: EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate[] | cdktn.IResolvable) {
    this._incidentCustomFieldUpdate.internalValue = value;
  }
  public resetIncidentCustomFieldUpdate() {
    this._incidentCustomFieldUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCustomFieldUpdateInput() {
    return this._incidentCustomFieldUpdate.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new EventOrchestrationGlobalCatchAllActionsVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: EventOrchestrationGlobalCatchAllActionsVariable[] | cdktn.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}
export interface EventOrchestrationGlobalCatchAll {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}
  */
  readonly actions: EventOrchestrationGlobalCatchAllActions;
}

export function eventOrchestrationGlobalCatchAllToTerraform(struct?: EventOrchestrationGlobalCatchAllOutputReference | EventOrchestrationGlobalCatchAll): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: eventOrchestrationGlobalCatchAllActionsToTerraform(struct!.actions),
  }
}


export function eventOrchestrationGlobalCatchAllToHclTerraform(struct?: EventOrchestrationGlobalCatchAllOutputReference | EventOrchestrationGlobalCatchAll): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: eventOrchestrationGlobalCatchAllActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalCatchAllActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalCatchAllOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalCatchAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCatchAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new EventOrchestrationGlobalCatchAllActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EventOrchestrationGlobalCatchAllActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface EventOrchestrationGlobalSetRuleActionsAutomationActionHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalSetRuleActionsAutomationActionHeaderToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsAutomationActionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalSetRuleActionsAutomationActionHeaderToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsAutomationActionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRuleActionsAutomationActionHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRuleActionsAutomationActionHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRuleActionsAutomationActionHeader[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference {
    return new EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSetRuleActionsAutomationActionParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalSetRuleActionsAutomationActionParameterToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsAutomationActionParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalSetRuleActionsAutomationActionParameterToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsAutomationActionParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRuleActionsAutomationActionParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRuleActionsAutomationActionParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRuleActionsAutomationActionParameter[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference {
    return new EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSetRuleActionsAutomationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}
  */
  readonly autoSend?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}
  */
  readonly triggerTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}
  */
  readonly url: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}
  */
  readonly header?: EventOrchestrationGlobalSetRuleActionsAutomationActionHeader[] | cdktn.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}
  */
  readonly parameter?: EventOrchestrationGlobalSetRuleActionsAutomationActionParameter[] | cdktn.IResolvable;
}

export function eventOrchestrationGlobalSetRuleActionsAutomationActionToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference | EventOrchestrationGlobalSetRuleActionsAutomationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_send: cdktn.booleanToTerraform(struct!.autoSend),
    name: cdktn.stringToTerraform(struct!.name),
    trigger_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.triggerTypes),
    url: cdktn.stringToTerraform(struct!.url),
    header: cdktn.listMapper(eventOrchestrationGlobalSetRuleActionsAutomationActionHeaderToTerraform, true)(struct!.header),
    parameter: cdktn.listMapper(eventOrchestrationGlobalSetRuleActionsAutomationActionParameterToTerraform, true)(struct!.parameter),
  }
}


export function eventOrchestrationGlobalSetRuleActionsAutomationActionToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference | EventOrchestrationGlobalSetRuleActionsAutomationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_send: {
      value: cdktn.booleanToHclTerraform(struct!.autoSend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.triggerTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleActionsAutomationActionHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList",
    },
    parameter: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleActionsAutomationActionParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalSetRuleActionsAutomationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSend = this._autoSend;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._triggerTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerTypes = this._triggerTypes;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRuleActionsAutomationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSend = undefined;
      this._name = undefined;
      this._triggerTypes = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSend = value.autoSend;
      this._name = value.name;
      this._triggerTypes = value.triggerTypes;
      this._url = value.url;
      this._header.internalValue = value.header;
      this._parameter.internalValue = value.parameter;
    }
  }

  // auto_send - computed: false, optional: true, required: false
  private _autoSend?: boolean | cdktn.IResolvable; 
  public get autoSend() {
    return this.getBooleanAttribute('auto_send');
  }
  public set autoSend(value: boolean | cdktn.IResolvable) {
    this._autoSend = value;
  }
  public resetAutoSend() {
    this._autoSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSendInput() {
    return this._autoSend;
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

  // trigger_types - computed: false, optional: true, required: false
  private _triggerTypes?: string[]; 
  public get triggerTypes() {
    return this.getListAttribute('trigger_types');
  }
  public set triggerTypes(value: string[]) {
    this._triggerTypes = value;
  }
  public resetTriggerTypes() {
    this._triggerTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypesInput() {
    return this._triggerTypes;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // header - computed: false, optional: true, required: false
  private _header = new EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: EventOrchestrationGlobalSetRuleActionsAutomationActionHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: EventOrchestrationGlobalSetRuleActionsAutomationActionParameter[] | cdktn.IResolvable) {
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
export interface EventOrchestrationGlobalSetRuleActionsExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}
  */
  readonly template?: string;
}

export function eventOrchestrationGlobalSetRuleActionsExtractionToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsExtraction | cdktn.IResolvable): any {
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


export function eventOrchestrationGlobalSetRuleActionsExtractionToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsExtraction | cdktn.IResolvable): any {
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

export class EventOrchestrationGlobalSetRuleActionsExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRuleActionsExtraction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EventOrchestrationGlobalSetRuleActionsExtraction | cdktn.IResolvable | undefined) {
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
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

export class EventOrchestrationGlobalSetRuleActionsExtractionList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRuleActionsExtraction[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleActionsExtractionOutputReference {
    return new EventOrchestrationGlobalSetRuleActionsExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate | cdktn.IResolvable): any {
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

export class EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference {
    return new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSetRuleActionsVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}
  */
  readonly value: string;
}

export function eventOrchestrationGlobalSetRuleActionsVariableToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventOrchestrationGlobalSetRuleActionsVariableToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsVariable | cdktn.IResolvable): any {
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
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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

export class EventOrchestrationGlobalSetRuleActionsVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRuleActionsVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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

  public set internalValue(value: EventOrchestrationGlobalSetRuleActionsVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
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
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
      this._value = value.value;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventOrchestrationGlobalSetRuleActionsVariableList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRuleActionsVariable[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleActionsVariableOutputReference {
    return new EventOrchestrationGlobalSetRuleActionsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSetRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}
  */
  readonly annotate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}
  */
  readonly dropEvent?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}
  */
  readonly escalationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}
  */
  readonly routeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}
  */
  readonly suppress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}
  */
  readonly suspend?: number;
  /**
  * automation_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}
  */
  readonly automationAction?: EventOrchestrationGlobalSetRuleActionsAutomationAction;
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}
  */
  readonly extraction?: EventOrchestrationGlobalSetRuleActionsExtraction[] | cdktn.IResolvable;
  /**
  * incident_custom_field_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}
  */
  readonly incidentCustomFieldUpdate?: EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate[] | cdktn.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}
  */
  readonly variable?: EventOrchestrationGlobalSetRuleActionsVariable[] | cdktn.IResolvable;
}

export function eventOrchestrationGlobalSetRuleActionsToTerraform(struct?: EventOrchestrationGlobalSetRuleActionsOutputReference | EventOrchestrationGlobalSetRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotate: cdktn.stringToTerraform(struct!.annotate),
    drop_event: cdktn.booleanToTerraform(struct!.dropEvent),
    escalation_policy: cdktn.stringToTerraform(struct!.escalationPolicy),
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    priority: cdktn.stringToTerraform(struct!.priority),
    route_to: cdktn.stringToTerraform(struct!.routeTo),
    severity: cdktn.stringToTerraform(struct!.severity),
    suppress: cdktn.booleanToTerraform(struct!.suppress),
    suspend: cdktn.numberToTerraform(struct!.suspend),
    automation_action: eventOrchestrationGlobalSetRuleActionsAutomationActionToTerraform(struct!.automationAction),
    extraction: cdktn.listMapper(eventOrchestrationGlobalSetRuleActionsExtractionToTerraform, true)(struct!.extraction),
    incident_custom_field_update: cdktn.listMapper(eventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateToTerraform, true)(struct!.incidentCustomFieldUpdate),
    variable: cdktn.listMapper(eventOrchestrationGlobalSetRuleActionsVariableToTerraform, true)(struct!.variable),
  }
}


export function eventOrchestrationGlobalSetRuleActionsToHclTerraform(struct?: EventOrchestrationGlobalSetRuleActionsOutputReference | EventOrchestrationGlobalSetRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotate: {
      value: cdktn.stringToHclTerraform(struct!.annotate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_event: {
      value: cdktn.booleanToHclTerraform(struct!.dropEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    escalation_policy: {
      value: cdktn.stringToHclTerraform(struct!.escalationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_to: {
      value: cdktn.stringToHclTerraform(struct!.routeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress: {
      value: cdktn.booleanToHclTerraform(struct!.suppress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend: {
      value: cdktn.numberToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    automation_action: {
      value: eventOrchestrationGlobalSetRuleActionsAutomationActionToHclTerraform(struct!.automationAction),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsAutomationActionList",
    },
    extraction: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleActionsExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsExtractionList",
    },
    incident_custom_field_update: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateToHclTerraform, true)(struct!.incidentCustomFieldUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList",
    },
    variable: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleActionsVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalSetRuleActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalSetRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotate !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotate = this._annotate;
    }
    if (this._dropEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropEvent = this._dropEvent;
    }
    if (this._escalationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicy = this._escalationPolicy;
    }
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._routeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTo = this._routeTo;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._suppress !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppress = this._suppress;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._automationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationAction = this._automationAction?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._incidentCustomFieldUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentCustomFieldUpdate = this._incidentCustomFieldUpdate?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotate = undefined;
      this._dropEvent = undefined;
      this._escalationPolicy = undefined;
      this._eventAction = undefined;
      this._priority = undefined;
      this._routeTo = undefined;
      this._severity = undefined;
      this._suppress = undefined;
      this._suspend = undefined;
      this._automationAction.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._incidentCustomFieldUpdate.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotate = value.annotate;
      this._dropEvent = value.dropEvent;
      this._escalationPolicy = value.escalationPolicy;
      this._eventAction = value.eventAction;
      this._priority = value.priority;
      this._routeTo = value.routeTo;
      this._severity = value.severity;
      this._suppress = value.suppress;
      this._suspend = value.suspend;
      this._automationAction.internalValue = value.automationAction;
      this._extraction.internalValue = value.extraction;
      this._incidentCustomFieldUpdate.internalValue = value.incidentCustomFieldUpdate;
      this._variable.internalValue = value.variable;
    }
  }

  // annotate - computed: false, optional: true, required: false
  private _annotate?: string; 
  public get annotate() {
    return this.getStringAttribute('annotate');
  }
  public set annotate(value: string) {
    this._annotate = value;
  }
  public resetAnnotate() {
    this._annotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotateInput() {
    return this._annotate;
  }

  // drop_event - computed: false, optional: true, required: false
  private _dropEvent?: boolean | cdktn.IResolvable; 
  public get dropEvent() {
    return this.getBooleanAttribute('drop_event');
  }
  public set dropEvent(value: boolean | cdktn.IResolvable) {
    this._dropEvent = value;
  }
  public resetDropEvent() {
    this._dropEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropEventInput() {
    return this._dropEvent;
  }

  // escalation_policy - computed: false, optional: true, required: false
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  public resetEscalationPolicy() {
    this._escalationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
  }

  // event_action - computed: false, optional: true, required: false
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_to - computed: false, optional: true, required: false
  private _routeTo?: string; 
  public get routeTo() {
    return this.getStringAttribute('route_to');
  }
  public set routeTo(value: string) {
    this._routeTo = value;
  }
  public resetRouteTo() {
    this._routeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToInput() {
    return this._routeTo;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // suppress - computed: false, optional: true, required: false
  private _suppress?: boolean | cdktn.IResolvable; 
  public get suppress() {
    return this.getBooleanAttribute('suppress');
  }
  public set suppress(value: boolean | cdktn.IResolvable) {
    this._suppress = value;
  }
  public resetSuppress() {
    this._suppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInput() {
    return this._suppress;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: number; 
  public get suspend() {
    return this.getNumberAttribute('suspend');
  }
  public set suspend(value: number) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // automation_action - computed: false, optional: true, required: false
  private _automationAction = new EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference(this, "automation_action");
  public get automationAction() {
    return this._automationAction;
  }
  public putAutomationAction(value: EventOrchestrationGlobalSetRuleActionsAutomationAction) {
    this._automationAction.internalValue = value;
  }
  public resetAutomationAction() {
    this._automationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationActionInput() {
    return this._automationAction.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new EventOrchestrationGlobalSetRuleActionsExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: EventOrchestrationGlobalSetRuleActionsExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // incident_custom_field_update - computed: false, optional: true, required: false
  private _incidentCustomFieldUpdate = new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList(this, "incident_custom_field_update", false);
  public get incidentCustomFieldUpdate() {
    return this._incidentCustomFieldUpdate;
  }
  public putIncidentCustomFieldUpdate(value: EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate[] | cdktn.IResolvable) {
    this._incidentCustomFieldUpdate.internalValue = value;
  }
  public resetIncidentCustomFieldUpdate() {
    this._incidentCustomFieldUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentCustomFieldUpdateInput() {
    return this._incidentCustomFieldUpdate.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new EventOrchestrationGlobalSetRuleActionsVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: EventOrchestrationGlobalSetRuleActionsVariable[] | cdktn.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}
export interface EventOrchestrationGlobalSetRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}
  */
  readonly expression: string;
}

export function eventOrchestrationGlobalSetRuleConditionToTerraform(struct?: EventOrchestrationGlobalSetRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function eventOrchestrationGlobalSetRuleConditionToHclTerraform(struct?: EventOrchestrationGlobalSetRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalSetRuleConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class EventOrchestrationGlobalSetRuleConditionList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRuleCondition[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleConditionOutputReference {
    return new EventOrchestrationGlobalSetRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSetRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}
  */
  readonly label?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}
  */
  readonly actions: EventOrchestrationGlobalSetRuleActions;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#condition EventOrchestrationGlobal#condition}
  */
  readonly condition?: EventOrchestrationGlobalSetRuleCondition[] | cdktn.IResolvable;
}

export function eventOrchestrationGlobalSetRuleToTerraform(struct?: EventOrchestrationGlobalSetRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    label: cdktn.stringToTerraform(struct!.label),
    actions: eventOrchestrationGlobalSetRuleActionsToTerraform(struct!.actions),
    condition: cdktn.listMapper(eventOrchestrationGlobalSetRuleConditionToTerraform, true)(struct!.condition),
  }
}


export function eventOrchestrationGlobalSetRuleToHclTerraform(struct?: EventOrchestrationGlobalSetRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: eventOrchestrationGlobalSetRuleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleActionsList",
    },
    condition: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalSetRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSetRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSetRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._label = undefined;
      this._actions.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._label = value.label;
      this._actions.internalValue = value.actions;
      this._condition.internalValue = value.condition;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new EventOrchestrationGlobalSetRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EventOrchestrationGlobalSetRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new EventOrchestrationGlobalSetRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: EventOrchestrationGlobalSetRuleCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class EventOrchestrationGlobalSetRuleList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSetRule[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetRuleOutputReference {
    return new EventOrchestrationGlobalSetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#rule EventOrchestrationGlobal#rule}
  */
  readonly rule?: EventOrchestrationGlobalSetRule[] | cdktn.IResolvable;
}

export function eventOrchestrationGlobalSetToTerraform(struct?: EventOrchestrationGlobalSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    rule: cdktn.listMapper(eventOrchestrationGlobalSetRuleToTerraform, true)(struct!.rule),
  }
}


export function eventOrchestrationGlobalSetToHclTerraform(struct?: EventOrchestrationGlobalSet | cdktn.IResolvable): any {
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
    rule: {
      value: cdktn.listMapperHcl(eventOrchestrationGlobalSetRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "EventOrchestrationGlobalSetRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._rule.internalValue = value.rule;
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

  // rule - computed: false, optional: true, required: false
  private _rule = new EventOrchestrationGlobalSetRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: EventOrchestrationGlobalSetRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class EventOrchestrationGlobalSetList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalSet[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalSetOutputReference {
    return new EventOrchestrationGlobalSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global pagerduty_event_orchestration_global}
*/
export class EventOrchestrationGlobal extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_orchestration_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EventOrchestrationGlobal resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventOrchestrationGlobal to import
  * @param importFromId The id of the existing EventOrchestrationGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventOrchestrationGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_event_orchestration_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/event_orchestration_global pagerduty_event_orchestration_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventOrchestrationGlobalConfig
  */
  public constructor(scope: Construct, id: string, config: EventOrchestrationGlobalConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_orchestration_global',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.31.2',
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
    this._eventOrchestration = config.eventOrchestration;
    this._id = config.id;
    this._catchAll.internalValue = config.catchAll;
    this._set.internalValue = config.set;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_orchestration - computed: false, optional: false, required: true
  private _eventOrchestration?: string; 
  public get eventOrchestration() {
    return this.getStringAttribute('event_orchestration');
  }
  public set eventOrchestration(value: string) {
    this._eventOrchestration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventOrchestrationInput() {
    return this._eventOrchestration;
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

  // catch_all - computed: false, optional: false, required: true
  private _catchAll = new EventOrchestrationGlobalCatchAllOutputReference(this, "catch_all");
  public get catchAll() {
    return this._catchAll;
  }
  public putCatchAll(value: EventOrchestrationGlobalCatchAll) {
    this._catchAll.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllInput() {
    return this._catchAll.internalValue;
  }

  // set - computed: false, optional: false, required: true
  private _set = new EventOrchestrationGlobalSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: EventOrchestrationGlobalSet[] | cdktn.IResolvable) {
    this._set.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_orchestration: cdktn.stringToTerraform(this._eventOrchestration),
      id: cdktn.stringToTerraform(this._id),
      catch_all: eventOrchestrationGlobalCatchAllToTerraform(this._catchAll.internalValue),
      set: cdktn.listMapper(eventOrchestrationGlobalSetToTerraform, true)(this._set.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_orchestration: {
        value: cdktn.stringToHclTerraform(this._eventOrchestration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catch_all: {
        value: eventOrchestrationGlobalCatchAllToHclTerraform(this._catchAll.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventOrchestrationGlobalCatchAllList",
      },
      set: {
        value: cdktn.listMapperHcl(eventOrchestrationGlobalSetToHclTerraform, true)(this._set.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventOrchestrationGlobalSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
