/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface UserHandoffNotificationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#handoff_type UserHandoffNotificationRule#handoff_type}
  */
  readonly handoffType?: string;
  /**
  * The number of minutes before the handoff to notify the user. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#notify_advance_in_minutes UserHandoffNotificationRule#notify_advance_in_minutes}
  */
  readonly notifyAdvanceInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}
  */
  readonly userId: string;
  /**
  * contact_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#contact_method UserHandoffNotificationRule#contact_method}
  */
  readonly contactMethod?: UserHandoffNotificationRuleContactMethod[] | cdktn.IResolvable;
}
export interface UserHandoffNotificationRuleContactMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#type UserHandoffNotificationRule#type}
  */
  readonly type: string;
}

export function userHandoffNotificationRuleContactMethodToTerraform(struct?: UserHandoffNotificationRuleContactMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function userHandoffNotificationRuleContactMethodToHclTerraform(struct?: UserHandoffNotificationRuleContactMethod | cdktn.IResolvable): any {
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

export class UserHandoffNotificationRuleContactMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserHandoffNotificationRuleContactMethod | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserHandoffNotificationRuleContactMethod | cdktn.IResolvable | undefined) {
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

export class UserHandoffNotificationRuleContactMethodList extends cdktn.ComplexList {
  public internalValue? : UserHandoffNotificationRuleContactMethod[] | cdktn.IResolvable

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
  public get(index: number): UserHandoffNotificationRuleContactMethodOutputReference {
    return new UserHandoffNotificationRuleContactMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule pagerduty_user_handoff_notification_rule}
*/
export class UserHandoffNotificationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_user_handoff_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a UserHandoffNotificationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserHandoffNotificationRule to import
  * @param importFromId The id of the existing UserHandoffNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserHandoffNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_user_handoff_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/user_handoff_notification_rule pagerduty_user_handoff_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserHandoffNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: UserHandoffNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_handoff_notification_rule',
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
    this._handoffType = config.handoffType;
    this._notifyAdvanceInMinutes = config.notifyAdvanceInMinutes;
    this._userId = config.userId;
    this._contactMethod.internalValue = config.contactMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // handoff_type - computed: true, optional: true, required: false
  private _handoffType?: string; 
  public get handoffType() {
    return this.getStringAttribute('handoff_type');
  }
  public set handoffType(value: string) {
    this._handoffType = value;
  }
  public resetHandoffType() {
    this._handoffType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffTypeInput() {
    return this._handoffType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_advance_in_minutes - computed: false, optional: false, required: true
  private _notifyAdvanceInMinutes?: number; 
  public get notifyAdvanceInMinutes() {
    return this.getNumberAttribute('notify_advance_in_minutes');
  }
  public set notifyAdvanceInMinutes(value: number) {
    this._notifyAdvanceInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAdvanceInMinutesInput() {
    return this._notifyAdvanceInMinutes;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // contact_method - computed: false, optional: true, required: false
  private _contactMethod = new UserHandoffNotificationRuleContactMethodList(this, "contact_method", false);
  public get contactMethod() {
    return this._contactMethod;
  }
  public putContactMethod(value: UserHandoffNotificationRuleContactMethod[] | cdktn.IResolvable) {
    this._contactMethod.internalValue = value;
  }
  public resetContactMethod() {
    this._contactMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactMethodInput() {
    return this._contactMethod.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      handoff_type: cdktn.stringToTerraform(this._handoffType),
      notify_advance_in_minutes: cdktn.numberToTerraform(this._notifyAdvanceInMinutes),
      user_id: cdktn.stringToTerraform(this._userId),
      contact_method: cdktn.listMapper(userHandoffNotificationRuleContactMethodToTerraform, true)(this._contactMethod.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      handoff_type: {
        value: cdktn.stringToHclTerraform(this._handoffType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_advance_in_minutes: {
        value: cdktn.numberToHclTerraform(this._notifyAdvanceInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_id: {
        value: cdktn.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_method: {
        value: cdktn.listMapperHcl(userHandoffNotificationRuleContactMethodToHclTerraform, true)(this._contactMethod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserHandoffNotificationRuleContactMethodList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
