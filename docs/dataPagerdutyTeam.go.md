# `dataPagerdutyTeam` Submodule <a name="`dataPagerdutyTeam` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyTeam <a name="DataPagerdutyTeam" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team pagerduty_team}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyteam"

datapagerdutyteam.NewDataPagerdutyTeam(scope Construct, id *string, config DataPagerdutyTeamConfig) DataPagerdutyTeam
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig">DataPagerdutyTeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig">DataPagerdutyTeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetDefaultRole">ResetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefaultRole` <a name="ResetDefaultRole" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetDefaultRole"></a>

```go
func ResetDefaultRole()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.resetParent"></a>

```go
func ResetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyTeam resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyteam"

datapagerdutyteam.DataPagerdutyTeam_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyteam"

datapagerdutyteam.DataPagerdutyTeam_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyteam"

datapagerdutyteam.DataPagerdutyTeam_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyteam"

datapagerdutyteam.DataPagerdutyTeam_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataPagerdutyTeam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyTeam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyTeam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyTeam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.defaultRoleInput">DefaultRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.defaultRole">DefaultRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DefaultRoleInput`<sup>Optional</sup> <a name="DefaultRoleInput" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.defaultRoleInput"></a>

```go
func DefaultRoleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `DefaultRole`<sup>Required</sup> <a name="DefaultRole" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.defaultRole"></a>

```go
func DefaultRole() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeam.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyTeamConfig <a name="DataPagerdutyTeamConfig" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/datapagerdutyteam"

&datapagerdutyteam.DataPagerdutyTeamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DefaultRole: *string,
	Id: *string,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.name">Name</a></code> | <code>*string</code> | The name of the team to find in the PagerDuty API. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.defaultRole">DefaultRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#default_role DataPagerdutyTeam#default_role}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#id DataPagerdutyTeam#id}. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#parent DataPagerdutyTeam#parent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the team to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#name DataPagerdutyTeam#name}

---

##### `DefaultRole`<sup>Optional</sup> <a name="DefaultRole" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.defaultRole"></a>

```go
DefaultRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#default_role DataPagerdutyTeam#default_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#id DataPagerdutyTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-pagerduty.dataPagerdutyTeam.DataPagerdutyTeamConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/data-sources/team#parent DataPagerdutyTeam#parent}.

---



