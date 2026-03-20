/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Schedulev2Config extends cdktn.TerraformMetaArguments {
  /**
  * A description of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#description Schedulev2#description}
  */
  readonly description?: string;
  /**
  * The name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#name Schedulev2#name}
  */
  readonly name: string;
  /**
  * List of team IDs to associate with this schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#teams Schedulev2#teams}
  */
  readonly teams?: string[];
  /**
  * The time zone of the schedule (IANA format, e.g. 'America/New_York').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#time_zone Schedulev2#time_zone}
  */
  readonly timeZone: string;
  /**
  * rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#rotation Schedulev2#rotation}
  */
  readonly rotation?: Schedulev2Rotation[] | cdktn.IResolvable;
}
export interface Schedulev2RotationEventAssignmentStrategyMember {
  /**
  * The member type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#type Schedulev2#type}
  */
  readonly type: string;
  /**
  * The obfuscated user ID. Required when type is 'user_member'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#user_id Schedulev2#user_id}
  */
  readonly userId?: string;
}

export function schedulev2RotationEventAssignmentStrategyMemberToTerraform(struct?: Schedulev2RotationEventAssignmentStrategyMember | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function schedulev2RotationEventAssignmentStrategyMemberToHclTerraform(struct?: Schedulev2RotationEventAssignmentStrategyMember | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Schedulev2RotationEventAssignmentStrategyMemberOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Schedulev2RotationEventAssignmentStrategyMember | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Schedulev2RotationEventAssignmentStrategyMember | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userId = value.userId;
    }
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

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class Schedulev2RotationEventAssignmentStrategyMemberList extends cdktn.ComplexList {
  public internalValue? : Schedulev2RotationEventAssignmentStrategyMember[] | cdktn.IResolvable

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
  public get(index: number): Schedulev2RotationEventAssignmentStrategyMemberOutputReference {
    return new Schedulev2RotationEventAssignmentStrategyMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Schedulev2RotationEventAssignmentStrategy {
  /**
  * Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#shifts_per_member Schedulev2#shifts_per_member}
  */
  readonly shiftsPerMember?: number;
  /**
  * The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#type Schedulev2#type}
  */
  readonly type: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#member Schedulev2#member}
  */
  readonly member?: Schedulev2RotationEventAssignmentStrategyMember[] | cdktn.IResolvable;
}

export function schedulev2RotationEventAssignmentStrategyToTerraform(struct?: Schedulev2RotationEventAssignmentStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shifts_per_member: cdktn.numberToTerraform(struct!.shiftsPerMember),
    type: cdktn.stringToTerraform(struct!.type),
    member: cdktn.listMapper(schedulev2RotationEventAssignmentStrategyMemberToTerraform, true)(struct!.member),
  }
}


export function schedulev2RotationEventAssignmentStrategyToHclTerraform(struct?: Schedulev2RotationEventAssignmentStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shifts_per_member: {
      value: cdktn.numberToHclTerraform(struct!.shiftsPerMember),
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
    member: {
      value: cdktn.listMapperHcl(schedulev2RotationEventAssignmentStrategyMemberToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "list",
      storageClassType: "Schedulev2RotationEventAssignmentStrategyMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Schedulev2RotationEventAssignmentStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Schedulev2RotationEventAssignmentStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shiftsPerMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftsPerMember = this._shiftsPerMember;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Schedulev2RotationEventAssignmentStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shiftsPerMember = undefined;
      this._type = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shiftsPerMember = value.shiftsPerMember;
      this._type = value.type;
      this._member.internalValue = value.member;
    }
  }

  // shifts_per_member - computed: false, optional: true, required: false
  private _shiftsPerMember?: number; 
  public get shiftsPerMember() {
    return this.getNumberAttribute('shifts_per_member');
  }
  public set shiftsPerMember(value: number) {
    this._shiftsPerMember = value;
  }
  public resetShiftsPerMember() {
    this._shiftsPerMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftsPerMemberInput() {
    return this._shiftsPerMember;
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

  // member - computed: false, optional: true, required: false
  private _member = new Schedulev2RotationEventAssignmentStrategyMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: Schedulev2RotationEventAssignmentStrategyMember[] | cdktn.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}

export class Schedulev2RotationEventAssignmentStrategyList extends cdktn.ComplexList {
  public internalValue? : Schedulev2RotationEventAssignmentStrategy[] | cdktn.IResolvable

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
  public get(index: number): Schedulev2RotationEventAssignmentStrategyOutputReference {
    return new Schedulev2RotationEventAssignmentStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Schedulev2RotationEvent {
  /**
  * When this event configuration starts producing shifts (ISO-8601 UTC). Must be a future time; the API will adjust past times to the current time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#effective_since Schedulev2#effective_since}
  */
  readonly effectiveSince: string;
  /**
  * When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#effective_until Schedulev2#effective_until}
  */
  readonly effectiveUntil?: string;
  /**
  * The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#end_time Schedulev2#end_time}
  */
  readonly endTime: string;
  /**
  * The name of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#name Schedulev2#name}
  */
  readonly name: string;
  /**
  * List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#recurrence Schedulev2#recurrence}
  */
  readonly recurrence: string[];
  /**
  * The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#start_time Schedulev2#start_time}
  */
  readonly startTime: string;
  /**
  * assignment_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#assignment_strategy Schedulev2#assignment_strategy}
  */
  readonly assignmentStrategy?: Schedulev2RotationEventAssignmentStrategy[] | cdktn.IResolvable;
}

export function schedulev2RotationEventToTerraform(struct?: Schedulev2RotationEvent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effective_since: cdktn.stringToTerraform(struct!.effectiveSince),
    effective_until: cdktn.stringToTerraform(struct!.effectiveUntil),
    end_time: cdktn.stringToTerraform(struct!.endTime),
    name: cdktn.stringToTerraform(struct!.name),
    recurrence: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recurrence),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    assignment_strategy: cdktn.listMapper(schedulev2RotationEventAssignmentStrategyToTerraform, true)(struct!.assignmentStrategy),
  }
}


export function schedulev2RotationEventToHclTerraform(struct?: Schedulev2RotationEvent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effective_since: {
      value: cdktn.stringToHclTerraform(struct!.effectiveSince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_until: {
      value: cdktn.stringToHclTerraform(struct!.effectiveUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
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
    recurrence: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recurrence),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assignment_strategy: {
      value: cdktn.listMapperHcl(schedulev2RotationEventAssignmentStrategyToHclTerraform, true)(struct!.assignmentStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "Schedulev2RotationEventAssignmentStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Schedulev2RotationEventOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Schedulev2RotationEvent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveSince !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveSince = this._effectiveSince;
    }
    if (this._effectiveUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveUntil = this._effectiveUntil;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._assignmentStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentStrategy = this._assignmentStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Schedulev2RotationEvent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectiveSince = undefined;
      this._effectiveUntil = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
      this._assignmentStrategy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effectiveSince = value.effectiveSince;
      this._effectiveUntil = value.effectiveUntil;
      this._endTime = value.endTime;
      this._name = value.name;
      this._recurrence = value.recurrence;
      this._startTime = value.startTime;
      this._assignmentStrategy.internalValue = value.assignmentStrategy;
    }
  }

  // effective_since - computed: false, optional: false, required: true
  private _effectiveSince?: string; 
  public get effectiveSince() {
    return this.getStringAttribute('effective_since');
  }
  public set effectiveSince(value: string) {
    this._effectiveSince = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveSinceInput() {
    return this._effectiveSince;
  }

  // effective_until - computed: false, optional: true, required: false
  private _effectiveUntil?: string; 
  public get effectiveUntil() {
    return this.getStringAttribute('effective_until');
  }
  public set effectiveUntil(value: string) {
    this._effectiveUntil = value;
  }
  public resetEffectiveUntil() {
    this._effectiveUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveUntilInput() {
    return this._effectiveUntil;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string[]; 
  public get recurrence() {
    return this.getListAttribute('recurrence');
  }
  public set recurrence(value: string[]) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // assignment_strategy - computed: false, optional: true, required: false
  private _assignmentStrategy = new Schedulev2RotationEventAssignmentStrategyList(this, "assignment_strategy", false);
  public get assignmentStrategy() {
    return this._assignmentStrategy;
  }
  public putAssignmentStrategy(value: Schedulev2RotationEventAssignmentStrategy[] | cdktn.IResolvable) {
    this._assignmentStrategy.internalValue = value;
  }
  public resetAssignmentStrategy() {
    this._assignmentStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentStrategyInput() {
    return this._assignmentStrategy.internalValue;
  }
}

export class Schedulev2RotationEventList extends cdktn.ComplexList {
  public internalValue? : Schedulev2RotationEvent[] | cdktn.IResolvable

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
  public get(index: number): Schedulev2RotationEventOutputReference {
    return new Schedulev2RotationEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Schedulev2Rotation {
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#event Schedulev2#event}
  */
  readonly event?: Schedulev2RotationEvent[] | cdktn.IResolvable;
}

export function schedulev2RotationToTerraform(struct?: Schedulev2Rotation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktn.listMapper(schedulev2RotationEventToTerraform, true)(struct!.event),
  }
}


export function schedulev2RotationToHclTerraform(struct?: Schedulev2Rotation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktn.listMapperHcl(schedulev2RotationEventToHclTerraform, true)(struct!.event),
      isBlock: true,
      type: "list",
      storageClassType: "Schedulev2RotationEventList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Schedulev2RotationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Schedulev2Rotation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Schedulev2Rotation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event.internalValue = value.event;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // event - computed: false, optional: true, required: false
  private _event = new Schedulev2RotationEventList(this, "event", false);
  public get event() {
    return this._event;
  }
  public putEvent(value: Schedulev2RotationEvent[] | cdktn.IResolvable) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }
}

export class Schedulev2RotationList extends cdktn.ComplexList {
  public internalValue? : Schedulev2Rotation[] | cdktn.IResolvable

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
  public get(index: number): Schedulev2RotationOutputReference {
    return new Schedulev2RotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2 pagerduty_schedulev2}
*/
export class Schedulev2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pagerduty_schedulev2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schedulev2 to import
  * @param importFromId The id of the existing Schedulev2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schedulev2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "pagerduty_schedulev2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2 pagerduty_schedulev2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Schedulev2Config
  */
  public constructor(scope: Construct, id: string, config: Schedulev2Config) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_schedulev2',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty',
        providerVersion: '3.32.0',
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
    this._description = config.description;
    this._name = config.name;
    this._teams = config.teams;
    this._timeZone = config.timeZone;
    this._rotation.internalValue = config.rotation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // rotation - computed: false, optional: true, required: false
  private _rotation = new Schedulev2RotationList(this, "rotation", false);
  public get rotation() {
    return this._rotation;
  }
  public putRotation(value: Schedulev2Rotation[] | cdktn.IResolvable) {
    this._rotation.internalValue = value;
  }
  public resetRotation() {
    this._rotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      teams: cdktn.listMapper(cdktn.stringToTerraform, false)(this._teams),
      time_zone: cdktn.stringToTerraform(this._timeZone),
      rotation: cdktn.listMapper(schedulev2RotationToTerraform, true)(this._rotation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      teams: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktn.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation: {
        value: cdktn.listMapperHcl(schedulev2RotationToHclTerraform, true)(this._rotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Schedulev2RotationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
