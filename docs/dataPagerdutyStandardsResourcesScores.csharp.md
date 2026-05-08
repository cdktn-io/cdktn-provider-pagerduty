# `dataPagerdutyStandardsResourcesScores` Submodule <a name="`dataPagerdutyStandardsResourcesScores` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyStandardsResourcesScores <a name="DataPagerdutyStandardsResourcesScores" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/standards_resources_scores pagerduty_standards_resources_scores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScores(Construct Scope, string Id, DataPagerdutyStandardsResourcesScoresConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig">DataPagerdutyStandardsResourcesScoresConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig">DataPagerdutyStandardsResourcesScoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyStandardsResourcesScores.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyStandardsResourcesScores.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyStandardsResourcesScores.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyStandardsResourcesScores.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyStandardsResourcesScores to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyStandardsResourcesScores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/standards_resources_scores#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyStandardsResourcesScores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList">DataPagerdutyStandardsResourcesScoresResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resources"></a>

```csharp
public DataPagerdutyStandardsResourcesScoresResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList">DataPagerdutyStandardsResourcesScoresResourcesList</a>

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyStandardsResourcesScoresConfig <a name="DataPagerdutyStandardsResourcesScoresConfig" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Ids,
    string ResourceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.ids">Ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}.

---

### DataPagerdutyStandardsResourcesScoresResources <a name="DataPagerdutyStandardsResourcesScoresResources" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResources {

};
```


### DataPagerdutyStandardsResourcesScoresResourcesScore <a name="DataPagerdutyStandardsResourcesScoresResourcesScore" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesScore {

};
```


### DataPagerdutyStandardsResourcesScoresResourcesStandards <a name="DataPagerdutyStandardsResourcesScoresResourcesStandards" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesStandards {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyStandardsResourcesScoresResourcesList <a name="DataPagerdutyStandardsResourcesScoresResourcesList" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get"></a>

```csharp
private DataPagerdutyStandardsResourcesScoresResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyStandardsResourcesScoresResourcesOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.score">Score</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference">DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.standards">Standards</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList">DataPagerdutyStandardsResourcesScoresResourcesStandardsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources">DataPagerdutyStandardsResourcesScoresResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.score"></a>

```csharp
public DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference Score { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference">DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference</a>

---

##### `Standards`<sup>Required</sup> <a name="Standards" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.standards"></a>

```csharp
public DataPagerdutyStandardsResourcesScoresResourcesStandardsList Standards { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList">DataPagerdutyStandardsResourcesScoresResourcesStandardsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyStandardsResourcesScoresResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources">DataPagerdutyStandardsResourcesScoresResources</a>

---


### DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.passing">Passing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.total">Total</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore">DataPagerdutyStandardsResourcesScoresResourcesScore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Passing`<sup>Required</sup> <a name="Passing" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.passing"></a>

```csharp
public double Passing { get; }
```

- *Type:* double

---

##### `Total`<sup>Required</sup> <a name="Total" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.total"></a>

```csharp
public double Total { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyStandardsResourcesScoresResourcesScore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore">DataPagerdutyStandardsResourcesScoresResourcesScore</a>

---


### DataPagerdutyStandardsResourcesScoresResourcesStandardsList <a name="DataPagerdutyStandardsResourcesScoresResourcesStandardsList" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesStandardsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get"></a>

```csharp
private DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.active">Active</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.pass">Pass</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards">DataPagerdutyStandardsResourcesScoresResourcesStandards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.pass"></a>

```csharp
public IResolvable Pass { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyStandardsResourcesScoresResourcesStandards InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards">DataPagerdutyStandardsResourcesScoresResourcesStandards</a>

---



