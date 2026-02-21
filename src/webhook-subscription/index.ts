/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WebhookSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#active WebhookSubscription#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#description WebhookSubscription#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#events WebhookSubscription#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#id WebhookSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#type WebhookSubscription#type}
  */
  readonly type?: string;
  /**
  * delivery_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#delivery_method WebhookSubscription#delivery_method}
  */
  readonly deliveryMethod: WebhookSubscriptionDeliveryMethod[] | cdktn.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#filter WebhookSubscription#filter}
  */
  readonly filter: WebhookSubscriptionFilter[] | cdktn.IResolvable;
}
export interface WebhookSubscriptionDeliveryMethodCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#name WebhookSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#value WebhookSubscription#value}
  */
  readonly value: string;
}

export function webhookSubscriptionDeliveryMethodCustomHeaderToTerraform(struct?: WebhookSubscriptionDeliveryMethodCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function webhookSubscriptionDeliveryMethodCustomHeaderToHclTerraform(struct?: WebhookSubscriptionDeliveryMethodCustomHeader | cdktn.IResolvable): any {
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

export class WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebhookSubscriptionDeliveryMethodCustomHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookSubscriptionDeliveryMethodCustomHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class WebhookSubscriptionDeliveryMethodCustomHeaderList extends cdktn.ComplexList {
  public internalValue? : WebhookSubscriptionDeliveryMethodCustomHeader[] | cdktn.IResolvable

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
  public get(index: number): WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference {
    return new WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebhookSubscriptionDeliveryMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}
  */
  readonly temporarilyDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#type WebhookSubscription#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#url WebhookSubscription#url}
  */
  readonly url?: string;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#custom_header WebhookSubscription#custom_header}
  */
  readonly customHeader?: WebhookSubscriptionDeliveryMethodCustomHeader[] | cdktn.IResolvable;
}

export function webhookSubscriptionDeliveryMethodToTerraform(struct?: WebhookSubscriptionDeliveryMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    temporarily_disabled: cdktn.booleanToTerraform(struct!.temporarilyDisabled),
    type: cdktn.stringToTerraform(struct!.type),
    url: cdktn.stringToTerraform(struct!.url),
    custom_header: cdktn.listMapper(webhookSubscriptionDeliveryMethodCustomHeaderToTerraform, true)(struct!.customHeader),
  }
}


export function webhookSubscriptionDeliveryMethodToHclTerraform(struct?: WebhookSubscriptionDeliveryMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    temporarily_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.temporarilyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header: {
      value: cdktn.listMapperHcl(webhookSubscriptionDeliveryMethodCustomHeaderToHclTerraform, true)(struct!.customHeader),
      isBlock: true,
      type: "list",
      storageClassType: "WebhookSubscriptionDeliveryMethodCustomHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookSubscriptionDeliveryMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebhookSubscriptionDeliveryMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._temporarilyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporarilyDisabled = this._temporarilyDisabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._customHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookSubscriptionDeliveryMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._temporarilyDisabled = undefined;
      this._type = undefined;
      this._url = undefined;
      this._customHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._temporarilyDisabled = value.temporarilyDisabled;
      this._type = value.type;
      this._url = value.url;
      this._customHeader.internalValue = value.customHeader;
    }
  }

  // temporarily_disabled - computed: true, optional: true, required: false
  private _temporarilyDisabled?: boolean | cdktn.IResolvable; 
  public get temporarilyDisabled() {
    return this.getBooleanAttribute('temporarily_disabled');
  }
  public set temporarilyDisabled(value: boolean | cdktn.IResolvable) {
    this._temporarilyDisabled = value;
  }
  public resetTemporarilyDisabled() {
    this._temporarilyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporarilyDisabledInput() {
    return this._temporarilyDisabled;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new WebhookSubscriptionDeliveryMethodCustomHeaderList(this, "custom_header", false);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: WebhookSubscriptionDeliveryMethodCustomHeader[] | cdktn.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }
}

export class WebhookSubscriptionDeliveryMethodList extends cdktn.ComplexList {
  public internalValue? : WebhookSubscriptionDeliveryMethod[] | cdktn.IResolvable

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
  public get(index: number): WebhookSubscriptionDeliveryMethodOutputReference {
    return new WebhookSubscriptionDeliveryMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebhookSubscriptionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#id WebhookSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#type WebhookSubscription#type}
  */
  readonly type: string;
}

export function webhookSubscriptionFilterToTerraform(struct?: WebhookSubscriptionFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function webhookSubscriptionFilterToHclTerraform(struct?: WebhookSubscriptionFilter | cdktn.IResolvable): any {
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

export class WebhookSubscriptionFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebhookSubscriptionFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookSubscriptionFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
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

export class WebhookSubscriptionFilterList extends cdktn.ComplexList {
  public internalValue? : WebhookSubscriptionFilter[] | cdktn.IResolvable

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
  public get(index: number): WebhookSubscriptionFilterOutputReference {
    return new WebhookSubscriptionFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription pagerduty_webhook_subscription}
*/
export class WebhookSubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_webhook_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WebhookSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookSubscription to import
  * @param importFromId The id of the existing WebhookSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_webhook_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/webhook_subscription pagerduty_webhook_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_webhook_subscription',
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
    this._active = config.active;
    this._description = config.description;
    this._events = config.events;
    this._id = config.id;
    this._type = config.type;
    this._deliveryMethod.internalValue = config.deliveryMethod;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktn.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktn.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // delivery_method - computed: false, optional: false, required: true
  private _deliveryMethod = new WebhookSubscriptionDeliveryMethodList(this, "delivery_method", false);
  public get deliveryMethod() {
    return this._deliveryMethod;
  }
  public putDeliveryMethod(value: WebhookSubscriptionDeliveryMethod[] | cdktn.IResolvable) {
    this._deliveryMethod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodInput() {
    return this._deliveryMethod.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new WebhookSubscriptionFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: WebhookSubscriptionFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktn.booleanToTerraform(this._active),
      description: cdktn.stringToTerraform(this._description),
      events: cdktn.listMapper(cdktn.stringToTerraform, false)(this._events),
      id: cdktn.stringToTerraform(this._id),
      type: cdktn.stringToTerraform(this._type),
      delivery_method: cdktn.listMapper(webhookSubscriptionDeliveryMethodToTerraform, true)(this._deliveryMethod.internalValue),
      filter: cdktn.listMapper(webhookSubscriptionFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktn.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_method: {
        value: cdktn.listMapperHcl(webhookSubscriptionDeliveryMethodToHclTerraform, true)(this._deliveryMethod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebhookSubscriptionDeliveryMethodList",
      },
      filter: {
        value: cdktn.listMapperHcl(webhookSubscriptionFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebhookSubscriptionFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
