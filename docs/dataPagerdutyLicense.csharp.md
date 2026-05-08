# `dataPagerdutyLicense` Submodule <a name="`dataPagerdutyLicense` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyLicense <a name="DataPagerdutyLicense" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license pagerduty_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyLicense(Construct Scope, string Id, DataPagerdutyLicenseConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig">DataPagerdutyLicenseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig">DataPagerdutyLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyLicense resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyLicense.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyLicense.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyLicense.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyLicense.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataPagerdutyLicense resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyLicense to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailable">AllocationsAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValue">CurrentValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroup">RoleGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRoles">ValidRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocationsAvailable`<sup>Required</sup> <a name="AllocationsAvailable" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailable"></a>

```csharp
public double AllocationsAvailable { get; }
```

- *Type:* double

---

##### `CurrentValue`<sup>Required</sup> <a name="CurrentValue" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValue"></a>

```csharp
public double CurrentValue { get; }
```

- *Type:* double

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `RoleGroup`<sup>Required</sup> <a name="RoleGroup" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroup"></a>

```csharp
public string RoleGroup { get; }
```

- *Type:* string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidRoles`<sup>Required</sup> <a name="ValidRoles" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRoles"></a>

```csharp
public string[] ValidRoles { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyLicenseConfig <a name="DataPagerdutyLicenseConfig" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyLicenseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#description DataPagerdutyLicense#description}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#id DataPagerdutyLicense#id}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#name DataPagerdutyLicense#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#description DataPagerdutyLicense#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#id DataPagerdutyLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/license#name DataPagerdutyLicense#name}.

---



