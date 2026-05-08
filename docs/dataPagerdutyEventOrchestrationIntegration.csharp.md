# `dataPagerdutyEventOrchestrationIntegration` Submodule <a name="`dataPagerdutyEventOrchestrationIntegration` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationIntegrationA <a name="DataPagerdutyEventOrchestrationIntegrationA" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration pagerduty_event_orchestration_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationIntegrationA(Construct Scope, string Id, DataPagerdutyEventOrchestrationIntegrationAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig">DataPagerdutyEventOrchestrationIntegrationAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig">DataPagerdutyEventOrchestrationIntegrationAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetLabel"></a>

```csharp
private void ResetLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyEventOrchestrationIntegrationA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyEventOrchestrationIntegrationA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyEventOrchestrationIntegrationA.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyEventOrchestrationIntegrationA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyEventOrchestrationIntegrationA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyEventOrchestrationIntegrationA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationIntegrationA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList">DataPagerdutyEventOrchestrationIntegrationParametersAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestrationInput">EventOrchestrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.label">Label</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.parameters"></a>

```csharp
public DataPagerdutyEventOrchestrationIntegrationParametersAList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList">DataPagerdutyEventOrchestrationIntegrationParametersAList</a>

---

##### `EventOrchestrationInput`<sup>Optional</sup> <a name="EventOrchestrationInput" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestrationInput"></a>

```csharp
public string EventOrchestrationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationIntegrationAConfig <a name="DataPagerdutyEventOrchestrationIntegrationAConfig" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationIntegrationAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EventOrchestration,
    string Id = null,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}.

---

### DataPagerdutyEventOrchestrationIntegrationParametersA <a name="DataPagerdutyEventOrchestrationIntegrationParametersA" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationIntegrationParametersA {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationIntegrationParametersAList <a name="DataPagerdutyEventOrchestrationIntegrationParametersAList" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationIntegrationParametersAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get"></a>

```csharp
private DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference <a name="DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.routingKey">RoutingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA">DataPagerdutyEventOrchestrationIntegrationParametersA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.routingKey"></a>

```csharp
public string RoutingKey { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyEventOrchestrationIntegrationParametersA InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA">DataPagerdutyEventOrchestrationIntegrationParametersA</a>

---



