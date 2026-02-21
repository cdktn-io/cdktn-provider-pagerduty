/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EventOrchestrationGlobalCacheVariableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}
  */
  readonly eventOrchestration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#condition EventOrchestrationGlobalCacheVariable#condition}
  */
  readonly condition?: EventOrchestrationGlobalCacheVariableCondition[] | cdktn.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#configuration EventOrchestrationGlobalCacheVariable#configuration}
  */
  readonly configuration: EventOrchestrationGlobalCacheVariableConfiguration;
}
export interface EventOrchestrationGlobalCacheVariableCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#expression EventOrchestrationGlobalCacheVariable#expression}
  */
  readonly expression: string;
}

export function eventOrchestrationGlobalCacheVariableConditionToTerraform(struct?: EventOrchestrationGlobalCacheVariableCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function eventOrchestrationGlobalCacheVariableConditionToHclTerraform(struct?: EventOrchestrationGlobalCacheVariableCondition | cdktn.IResolvable): any {
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

export class EventOrchestrationGlobalCacheVariableConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventOrchestrationGlobalCacheVariableCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EventOrchestrationGlobalCacheVariableCondition | cdktn.IResolvable | undefined) {
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

export class EventOrchestrationGlobalCacheVariableConditionList extends cdktn.ComplexList {
  public internalValue? : EventOrchestrationGlobalCacheVariableCondition[] | cdktn.IResolvable

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
  public get(index: number): EventOrchestrationGlobalCacheVariableConditionOutputReference {
    return new EventOrchestrationGlobalCacheVariableConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventOrchestrationGlobalCacheVariableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#data_type EventOrchestrationGlobalCacheVariable#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}
  */
  readonly ttlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}
  */
  readonly type: string;
}

export function eventOrchestrationGlobalCacheVariableConfigurationToTerraform(struct?: EventOrchestrationGlobalCacheVariableConfigurationOutputReference | EventOrchestrationGlobalCacheVariableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    regex: cdktn.stringToTerraform(struct!.regex),
    source: cdktn.stringToTerraform(struct!.source),
    ttl_seconds: cdktn.numberToTerraform(struct!.ttlSeconds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function eventOrchestrationGlobalCacheVariableConfigurationToHclTerraform(struct?: EventOrchestrationGlobalCacheVariableConfigurationOutputReference | EventOrchestrationGlobalCacheVariableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    ttl_seconds: {
      value: cdktn.numberToHclTerraform(struct!.ttlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventOrchestrationGlobalCacheVariableConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventOrchestrationGlobalCacheVariableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._ttlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSeconds = this._ttlSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventOrchestrationGlobalCacheVariableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataType = undefined;
      this._regex = undefined;
      this._source = undefined;
      this._ttlSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataType = value.dataType;
      this._regex = value.regex;
      this._source = value.source;
      this._ttlSeconds = value.ttlSeconds;
      this._type = value.type;
    }
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // ttl_seconds - computed: false, optional: true, required: false
  private _ttlSeconds?: number; 
  public get ttlSeconds() {
    return this.getNumberAttribute('ttl_seconds');
  }
  public set ttlSeconds(value: number) {
    this._ttlSeconds = value;
  }
  public resetTtlSeconds() {
    this._ttlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsInput() {
    return this._ttlSeconds;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}
*/
export class EventOrchestrationGlobalCacheVariable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_event_orchestration_global_cache_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EventOrchestrationGlobalCacheVariable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventOrchestrationGlobalCacheVariable to import
  * @param importFromId The id of the existing EventOrchestrationGlobalCacheVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventOrchestrationGlobalCacheVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_event_orchestration_global_cache_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventOrchestrationGlobalCacheVariableConfig
  */
  public constructor(scope: Construct, id: string, config: EventOrchestrationGlobalCacheVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_event_orchestration_global_cache_variable',
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
    this._eventOrchestration = config.eventOrchestration;
    this._name = config.name;
    this._condition.internalValue = config.condition;
    this._configuration.internalValue = config.configuration;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new EventOrchestrationGlobalCacheVariableConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: EventOrchestrationGlobalCacheVariableCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new EventOrchestrationGlobalCacheVariableConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EventOrchestrationGlobalCacheVariableConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktn.booleanToTerraform(this._disabled),
      event_orchestration: cdktn.stringToTerraform(this._eventOrchestration),
      name: cdktn.stringToTerraform(this._name),
      condition: cdktn.listMapper(eventOrchestrationGlobalCacheVariableConditionToTerraform, true)(this._condition.internalValue),
      configuration: eventOrchestrationGlobalCacheVariableConfigurationToTerraform(this._configuration.internalValue),
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
      event_orchestration: {
        value: cdktn.stringToHclTerraform(this._eventOrchestration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktn.listMapperHcl(eventOrchestrationGlobalCacheVariableConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventOrchestrationGlobalCacheVariableConditionList",
      },
      configuration: {
        value: eventOrchestrationGlobalCacheVariableConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventOrchestrationGlobalCacheVariableConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
