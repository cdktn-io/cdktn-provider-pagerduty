# `incidentWorkflowTrigger` Submodule <a name="`incidentWorkflowTrigger` Submodule" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflowTrigger <a name="IncidentWorkflowTrigger" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger pagerduty_incident_workflow_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new IncidentWorkflowTrigger(Construct Scope, string Id, IncidentWorkflowTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig">IncidentWorkflowTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig">IncidentWorkflowTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.putPermissions"></a>

```csharp
private void PutPermissions(IncidentWorkflowTriggerPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetServices` <a name="ResetServices" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetServices"></a>

```csharp
private void ResetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentWorkflowTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

IncidentWorkflowTrigger.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

IncidentWorkflowTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

IncidentWorkflowTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

IncidentWorkflowTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IncidentWorkflowTrigger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentWorkflowTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentWorkflowTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IncidentWorkflowTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference">IncidentWorkflowTriggerPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServicesInput">SubscribedToAllServicesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflowInput">WorkflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.services">Services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServices">SubscribedToAllServices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflow">Workflow</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissions"></a>

```csharp
public IncidentWorkflowTriggerPermissionsOutputReference Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference">IncidentWorkflowTriggerPermissionsOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.permissionsInput"></a>

```csharp
public IncidentWorkflowTriggerPermissions PermissionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `SubscribedToAllServicesInput`<sup>Optional</sup> <a name="SubscribedToAllServicesInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServicesInput"></a>

```csharp
public bool|IResolvable SubscribedToAllServicesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflowInput"></a>

```csharp
public string WorkflowInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

##### `SubscribedToAllServices`<sup>Required</sup> <a name="SubscribedToAllServices" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServices"></a>

```csharp
public bool|IResolvable SubscribedToAllServices { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflow"></a>

```csharp
public string Workflow { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowTriggerConfig <a name="IncidentWorkflowTriggerConfig" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new IncidentWorkflowTriggerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable SubscribedToAllServices,
    string Type,
    string Workflow,
    string Condition = null,
    string Id = null,
    IncidentWorkflowTriggerPermissions Permissions = null,
    string[] Services = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.subscribedToAllServices">SubscribedToAllServices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.workflow">Workflow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a></code> | permissions block. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.services">Services</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SubscribedToAllServices`<sup>Required</sup> <a name="SubscribedToAllServices" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.subscribedToAllServices"></a>

```csharp
public bool|IResolvable SubscribedToAllServices { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}.

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.workflow"></a>

```csharp
public string Workflow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.permissions"></a>

```csharp
public IncidentWorkflowTriggerPermissions Permissions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#permissions IncidentWorkflowTrigger#permissions}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}.

---

### IncidentWorkflowTriggerPermissions <a name="IncidentWorkflowTriggerPermissions" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new IncidentWorkflowTriggerPermissions {
    bool|IResolvable Restricted = null,
    string TeamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.restricted">Restricted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#restricted IncidentWorkflowTrigger#restricted}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#team_id IncidentWorkflowTrigger#team_id}. |

---

##### `Restricted`<sup>Optional</sup> <a name="Restricted" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.restricted"></a>

```csharp
public bool|IResolvable Restricted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#restricted IncidentWorkflowTrigger#restricted}.

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/incident_workflow_trigger#team_id IncidentWorkflowTrigger#team_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentWorkflowTriggerPermissionsOutputReference <a name="IncidentWorkflowTriggerPermissionsOutputReference" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new IncidentWorkflowTriggerPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetRestricted">ResetRestricted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetTeamId">ResetTeamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestricted` <a name="ResetRestricted" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetRestricted"></a>

```csharp
private void ResetRestricted()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.resetTeamId"></a>

```csharp
private void ResetTeamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restrictedInput">RestrictedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restricted">Restricted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedInput`<sup>Optional</sup> <a name="RestrictedInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restrictedInput"></a>

```csharp
public bool|IResolvable RestrictedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `Restricted`<sup>Required</sup> <a name="Restricted" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.restricted"></a>

```csharp
public bool|IResolvable Restricted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissionsOutputReference.property.internalValue"></a>

```csharp
public IncidentWorkflowTriggerPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerPermissions">IncidentWorkflowTriggerPermissions</a>

---



