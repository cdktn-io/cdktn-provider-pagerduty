# `dataPagerdutyEventOrchestration` Submodule <a name="`dataPagerdutyEventOrchestration` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestration <a name="DataPagerdutyEventOrchestration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration pagerduty_event_orchestration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.NewDataPagerdutyEventOrchestration(scope Construct, id *string, config DataPagerdutyEventOrchestrationConfig) DataPagerdutyEventOrchestration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig">DataPagerdutyEventOrchestrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig">DataPagerdutyEventOrchestrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.putIntegration">PutIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.resetIntegration">ResetIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIntegration` <a name="PutIntegration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.putIntegration"></a>

```go
func PutIntegration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.putIntegration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegration` <a name="ResetIntegration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.resetIntegration"></a>

```go
func ResetIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyEventOrchestration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.DataPagerdutyEventOrchestration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.DataPagerdutyEventOrchestration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.DataPagerdutyEventOrchestration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.DataPagerdutyEventOrchestration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataPagerdutyEventOrchestration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyEventOrchestration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyEventOrchestration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList">DataPagerdutyEventOrchestrationIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.integrationInput">IntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.integration"></a>

```go
func Integration() DataPagerdutyEventOrchestrationIntegrationList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList">DataPagerdutyEventOrchestrationIntegrationList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.integrationInput"></a>

```go
func IntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationConfig <a name="DataPagerdutyEventOrchestrationConfig" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

&datapagerdutyeventorchestration.DataPagerdutyEventOrchestrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Integration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration#name DataPagerdutyEventOrchestration#name}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration#id DataPagerdutyEventOrchestration#id}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.integration">Integration</a></code> | <code>interface{}</code> | integration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration#name DataPagerdutyEventOrchestration#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration#id DataPagerdutyEventOrchestration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Integration`<sup>Optional</sup> <a name="Integration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationConfig.property.integration"></a>

```go
Integration interface{}
```

- *Type:* interface{}

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/event_orchestration#integration DataPagerdutyEventOrchestration#integration}

---

### DataPagerdutyEventOrchestrationIntegration <a name="DataPagerdutyEventOrchestrationIntegration" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

&datapagerdutyeventorchestration.DataPagerdutyEventOrchestrationIntegration {

}
```


### DataPagerdutyEventOrchestrationIntegrationParameters <a name="DataPagerdutyEventOrchestrationIntegrationParameters" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

&datapagerdutyeventorchestration.DataPagerdutyEventOrchestrationIntegrationParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationIntegrationList <a name="DataPagerdutyEventOrchestrationIntegrationList" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.NewDataPagerdutyEventOrchestrationIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyEventOrchestrationIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.get"></a>

```go
func Get(index *f64) DataPagerdutyEventOrchestrationIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataPagerdutyEventOrchestrationIntegrationOutputReference <a name="DataPagerdutyEventOrchestrationIntegrationOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.NewDataPagerdutyEventOrchestrationIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyEventOrchestrationIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList">DataPagerdutyEventOrchestrationIntegrationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.parameters"></a>

```go
func Parameters() DataPagerdutyEventOrchestrationIntegrationParametersList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList">DataPagerdutyEventOrchestrationIntegrationParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataPagerdutyEventOrchestrationIntegrationParametersList <a name="DataPagerdutyEventOrchestrationIntegrationParametersList" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.NewDataPagerdutyEventOrchestrationIntegrationParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyEventOrchestrationIntegrationParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.get"></a>

```go
func Get(index *f64) DataPagerdutyEventOrchestrationIntegrationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyEventOrchestrationIntegrationParametersOutputReference <a name="DataPagerdutyEventOrchestrationIntegrationParametersOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyeventorchestration"

datapagerdutyeventorchestration.NewDataPagerdutyEventOrchestrationIntegrationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyEventOrchestrationIntegrationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.routingKey">RoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParameters">DataPagerdutyEventOrchestrationIntegrationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.routingKey"></a>

```go
func RoutingKey() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyEventOrchestrationIntegrationParameters
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyEventOrchestration.DataPagerdutyEventOrchestrationIntegrationParameters">DataPagerdutyEventOrchestrationIntegrationParameters</a>

---



