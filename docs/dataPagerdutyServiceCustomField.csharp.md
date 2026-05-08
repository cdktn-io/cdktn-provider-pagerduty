# `dataPagerdutyServiceCustomField` Submodule <a name="`dataPagerdutyServiceCustomField` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyServiceCustomField <a name="DataPagerdutyServiceCustomField" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/service_custom_field pagerduty_service_custom_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyServiceCustomField(Construct Scope, string Id, DataPagerdutyServiceCustomFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig">DataPagerdutyServiceCustomFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig">DataPagerdutyServiceCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyServiceCustomField resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyServiceCustomField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyServiceCustomField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyServiceCustomField.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

DataPagerdutyServiceCustomField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataPagerdutyServiceCustomField resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyServiceCustomField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyServiceCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/service_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyServiceCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldOptions">FieldOptions</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList">DataPagerdutyServiceCustomFieldFieldOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldType">FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FieldOptions`<sup>Required</sup> <a name="FieldOptions" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldOptions"></a>

```csharp
public DataPagerdutyServiceCustomFieldFieldOptionsList FieldOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList">DataPagerdutyServiceCustomFieldFieldOptionsList</a>

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldType"></a>

```csharp
public string FieldType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyServiceCustomFieldConfig <a name="DataPagerdutyServiceCustomFieldConfig" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyServiceCustomFieldConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the field. This must be unique across an account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/data-sources/service_custom_field#display_name DataPagerdutyServiceCustomField#display_name}

---

### DataPagerdutyServiceCustomFieldFieldOptions <a name="DataPagerdutyServiceCustomFieldFieldOptions" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyServiceCustomFieldFieldOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyServiceCustomFieldFieldOptionsList <a name="DataPagerdutyServiceCustomFieldFieldOptionsList" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyServiceCustomFieldFieldOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.get"></a>

```csharp
private DataPagerdutyServiceCustomFieldFieldOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyServiceCustomFieldFieldOptionsOutputReference <a name="DataPagerdutyServiceCustomFieldFieldOptionsOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Pagerduty;

new DataPagerdutyServiceCustomFieldFieldOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions">DataPagerdutyServiceCustomFieldFieldOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyServiceCustomFieldFieldOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions">DataPagerdutyServiceCustomFieldFieldOptions</a>

---



