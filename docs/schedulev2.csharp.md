# `schedulev2` Submodule <a name="`schedulev2` Submodule" id="@cdktn/provider-pagerduty.schedulev2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedulev2 <a name="Schedulev2" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2 pagerduty_schedulev2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2(Construct Scope, string Id, Schedulev2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config">Schedulev2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config">Schedulev2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation">PutRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation">ResetRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotation` <a name="PutRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation"></a>

```csharp
private void PutRotation(IResolvable|Schedulev2Rotation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRotation` <a name="ResetRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation"></a>

```csharp
private void ResetRotation()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams"></a>

```csharp
private void ResetTeams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

Schedulev2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

Schedulev2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

Schedulev2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

Schedulev2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Schedulev2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Schedulev2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Schedulev2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation">Rotation</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput">RotationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation"></a>

```csharp
public Schedulev2RotationList Rotation { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RotationInput`<sup>Optional</sup> <a name="RotationInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput"></a>

```csharp
public IResolvable|Schedulev2Rotation[] RotationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Schedulev2Config <a name="Schedulev2Config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string TimeZone,
    string Description = null,
    IResolvable|Schedulev2Rotation[] Rotation = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name">Name</a></code> | <code>string</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description">Description</a></code> | <code>string</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation">Rotation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]</code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams">Teams</a></code> | <code>string[]</code> | List of team IDs to associate with this schedule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#name Schedulev2#name}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#description Schedulev2#description}

---

##### `Rotation`<sup>Optional</sup> <a name="Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation"></a>

```csharp
public IResolvable|Schedulev2Rotation[] Rotation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#teams Schedulev2#teams}

---

### Schedulev2Rotation <a name="Schedulev2Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2Rotation {
    IResolvable|Schedulev2RotationEvent[] Event = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event">Event</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]</code> | event block. |

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event"></a>

```csharp
public IResolvable|Schedulev2RotationEvent[] Event { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#event Schedulev2#event}

---

### Schedulev2RotationEvent <a name="Schedulev2RotationEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEvent {
    string EffectiveSince,
    string EndTime,
    string Name,
    string[] Recurrence,
    string StartTime,
    IResolvable|Schedulev2RotationEventAssignmentStrategy[] AssignmentStrategy = null,
    string EffectiveUntil = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince">EffectiveSince</a></code> | <code>string</code> | When this event configuration starts producing shifts (ISO-8601 UTC). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime">EndTime</a></code> | <code>string</code> | The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name">Name</a></code> | <code>string</code> | The name of the event. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence">Recurrence</a></code> | <code>string[]</code> | List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime">StartTime</a></code> | <code>string</code> | The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy">AssignmentStrategy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]</code> | assignment_strategy block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil">EffectiveUntil</a></code> | <code>string</code> | When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite. |

---

##### `EffectiveSince`<sup>Required</sup> <a name="EffectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince"></a>

```csharp
public string EffectiveSince { get; set; }
```

- *Type:* string

When this event configuration starts producing shifts (ISO-8601 UTC).

Must be a future time; the API will adjust past times to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#effective_since Schedulev2#effective_since}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#end_time Schedulev2#end_time}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#name Schedulev2#name}

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence"></a>

```csharp
public string[] Recurrence { get; set; }
```

- *Type:* string[]

List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#recurrence Schedulev2#recurrence}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#start_time Schedulev2#start_time}

---

##### `AssignmentStrategy`<sup>Optional</sup> <a name="AssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategy[] AssignmentStrategy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#assignment_strategy Schedulev2#assignment_strategy}

---

##### `EffectiveUntil`<sup>Optional</sup> <a name="EffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil"></a>

```csharp
public string EffectiveUntil { get; set; }
```

- *Type:* string

When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#effective_until Schedulev2#effective_until}

---

### Schedulev2RotationEventAssignmentStrategy <a name="Schedulev2RotationEventAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventAssignmentStrategy {
    string Type,
    IResolvable|Schedulev2RotationEventAssignmentStrategyMember[] Member = null,
    double ShiftsPerMember = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type">Type</a></code> | <code>string</code> | The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member">Member</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]</code> | member block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember">ShiftsPerMember</a></code> | <code>double</code> | Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#type Schedulev2#type}

---

##### `Member`<sup>Optional</sup> <a name="Member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategyMember[] Member { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#member Schedulev2#member}

---

##### `ShiftsPerMember`<sup>Optional</sup> <a name="ShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember"></a>

```csharp
public double ShiftsPerMember { get; set; }
```

- *Type:* double

Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#shifts_per_member Schedulev2#shifts_per_member}

---

### Schedulev2RotationEventAssignmentStrategyMember <a name="Schedulev2RotationEventAssignmentStrategyMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventAssignmentStrategyMember {
    string Type,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type">Type</a></code> | <code>string</code> | The member type. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId">UserId</a></code> | <code>string</code> | The obfuscated user ID. Required when type is 'user_member'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The member type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#type Schedulev2#type}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The obfuscated user ID. Required when type is 'user_member'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#user_id Schedulev2#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Schedulev2RotationEventAssignmentStrategyList <a name="Schedulev2RotationEventAssignmentStrategyList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventAssignmentStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get"></a>

```csharp
private Schedulev2RotationEventAssignmentStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

---


### Schedulev2RotationEventAssignmentStrategyMemberList <a name="Schedulev2RotationEventAssignmentStrategyMemberList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventAssignmentStrategyMemberList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get"></a>

```csharp
private Schedulev2RotationEventAssignmentStrategyMemberOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategyMember[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

---


### Schedulev2RotationEventAssignmentStrategyMemberOutputReference <a name="Schedulev2RotationEventAssignmentStrategyMemberOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventAssignmentStrategyMemberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategyMember InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>

---


### Schedulev2RotationEventAssignmentStrategyOutputReference <a name="Schedulev2RotationEventAssignmentStrategyOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventAssignmentStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember">PutMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember">ResetMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember">ResetShiftsPerMember</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMember` <a name="PutMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember"></a>

```csharp
private void PutMember(IResolvable|Schedulev2RotationEventAssignmentStrategyMember[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

---

##### `ResetMember` <a name="ResetMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember"></a>

```csharp
private void ResetMember()
```

##### `ResetShiftsPerMember` <a name="ResetShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember"></a>

```csharp
private void ResetShiftsPerMember()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member">Member</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput">MemberInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput">ShiftsPerMemberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember">ShiftsPerMember</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member"></a>

```csharp
public Schedulev2RotationEventAssignmentStrategyMemberList Member { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a>

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategyMember[] MemberInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

---

##### `ShiftsPerMemberInput`<sup>Optional</sup> <a name="ShiftsPerMemberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput"></a>

```csharp
public double ShiftsPerMemberInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ShiftsPerMember`<sup>Required</sup> <a name="ShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember"></a>

```csharp
public double ShiftsPerMember { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>

---


### Schedulev2RotationEventList <a name="Schedulev2RotationEventList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get"></a>

```csharp
private Schedulev2RotationEventOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2RotationEvent[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

---


### Schedulev2RotationEventOutputReference <a name="Schedulev2RotationEventOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationEventOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy">PutAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy">ResetAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil">ResetEffectiveUntil</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssignmentStrategy` <a name="PutAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy"></a>

```csharp
private void PutAssignmentStrategy(IResolvable|Schedulev2RotationEventAssignmentStrategy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

---

##### `ResetAssignmentStrategy` <a name="ResetAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy"></a>

```csharp
private void ResetAssignmentStrategy()
```

##### `ResetEffectiveUntil` <a name="ResetEffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil"></a>

```csharp
private void ResetEffectiveUntil()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy">AssignmentStrategy</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput">AssignmentStrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput">EffectiveSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput">EffectiveUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince">EffectiveSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil">EffectiveUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence">Recurrence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignmentStrategy`<sup>Required</sup> <a name="AssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy"></a>

```csharp
public Schedulev2RotationEventAssignmentStrategyList AssignmentStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AssignmentStrategyInput`<sup>Optional</sup> <a name="AssignmentStrategyInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput"></a>

```csharp
public IResolvable|Schedulev2RotationEventAssignmentStrategy[] AssignmentStrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

---

##### `EffectiveSinceInput`<sup>Optional</sup> <a name="EffectiveSinceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput"></a>

```csharp
public string EffectiveSinceInput { get; }
```

- *Type:* string

---

##### `EffectiveUntilInput`<sup>Optional</sup> <a name="EffectiveUntilInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput"></a>

```csharp
public string EffectiveUntilInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput"></a>

```csharp
public string[] RecurrenceInput { get; }
```

- *Type:* string[]

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EffectiveSince`<sup>Required</sup> <a name="EffectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince"></a>

```csharp
public string EffectiveSince { get; }
```

- *Type:* string

---

##### `EffectiveUntil`<sup>Required</sup> <a name="EffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil"></a>

```csharp
public string EffectiveUntil { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence"></a>

```csharp
public string[] Recurrence { get; }
```

- *Type:* string[]

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2RotationEvent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>

---


### Schedulev2RotationList <a name="Schedulev2RotationList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get"></a>

```csharp
private Schedulev2RotationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2Rotation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

---


### Schedulev2RotationOutputReference <a name="Schedulev2RotationOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new Schedulev2RotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent">PutEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvent` <a name="PutEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent"></a>

```csharp
private void PutEvent(IResolvable|Schedulev2RotationEvent[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

---

##### `ResetEvent` <a name="ResetEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent"></a>

```csharp
private void ResetEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event">Event</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput">EventInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event"></a>

```csharp
public Schedulev2RotationEventList Event { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput"></a>

```csharp
public IResolvable|Schedulev2RotationEvent[] EventInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Schedulev2Rotation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>

---



