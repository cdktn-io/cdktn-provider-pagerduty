# `schedulev2` Submodule <a name="`schedulev2` Submodule" id="@cdktn/provider-pagerduty.schedulev2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedulev2 <a name="Schedulev2" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2 pagerduty_schedulev2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2(scope Construct, id *string, config Schedulev2Config) Schedulev2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config">Schedulev2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotation` <a name="PutRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation"></a>

```go
func PutRotation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRotation` <a name="ResetRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation"></a>

```go
func ResetRotation()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams"></a>

```go
func ResetTeams()
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

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.Schedulev2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.Schedulev2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.Schedulev2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.Schedulev2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Schedulev2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Schedulev2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Schedulev2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation">Rotation</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput">RotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation"></a>

```go
func Rotation() Schedulev2RotationList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RotationInput`<sup>Optional</sup> <a name="RotationInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput"></a>

```go
func RotationInput() interface{}
```

- *Type:* interface{}

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Schedulev2Config <a name="Schedulev2Config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

&schedulev2.Schedulev2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TimeZone: *string,
	Description: *string,
	Rotation: interface{},
	Teams: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name">Name</a></code> | <code>*string</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description">Description</a></code> | <code>*string</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation">Rotation</a></code> | <code>interface{}</code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams">Teams</a></code> | <code>*[]*string</code> | List of team IDs to associate with this schedule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#name Schedulev2#name}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#description Schedulev2#description}

---

##### `Rotation`<sup>Optional</sup> <a name="Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation"></a>

```go
Rotation interface{}
```

- *Type:* interface{}

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#teams Schedulev2#teams}

---

### Schedulev2Rotation <a name="Schedulev2Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

&schedulev2.Schedulev2Rotation {
	Event: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event">Event</a></code> | <code>interface{}</code> | event block. |

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event"></a>

```go
Event interface{}
```

- *Type:* interface{}

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#event Schedulev2#event}

---

### Schedulev2RotationEvent <a name="Schedulev2RotationEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

&schedulev2.Schedulev2RotationEvent {
	EffectiveSince: *string,
	EndTime: *string,
	Name: *string,
	Recurrence: *[]*string,
	StartTime: *string,
	AssignmentStrategy: interface{},
	EffectiveUntil: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince">EffectiveSince</a></code> | <code>*string</code> | When this event configuration starts producing shifts (ISO-8601 UTC). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime">EndTime</a></code> | <code>*string</code> | The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name">Name</a></code> | <code>*string</code> | The name of the event. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence">Recurrence</a></code> | <code>*[]*string</code> | List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime">StartTime</a></code> | <code>*string</code> | The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy">AssignmentStrategy</a></code> | <code>interface{}</code> | assignment_strategy block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil">EffectiveUntil</a></code> | <code>*string</code> | When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite. |

---

##### `EffectiveSince`<sup>Required</sup> <a name="EffectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince"></a>

```go
EffectiveSince *string
```

- *Type:* *string

When this event configuration starts producing shifts (ISO-8601 UTC).

Must be a future time; the API will adjust past times to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#effective_since Schedulev2#effective_since}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#end_time Schedulev2#end_time}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#name Schedulev2#name}

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence"></a>

```go
Recurrence *[]*string
```

- *Type:* *[]*string

List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#recurrence Schedulev2#recurrence}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#start_time Schedulev2#start_time}

---

##### `AssignmentStrategy`<sup>Optional</sup> <a name="AssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy"></a>

```go
AssignmentStrategy interface{}
```

- *Type:* interface{}

assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#assignment_strategy Schedulev2#assignment_strategy}

---

##### `EffectiveUntil`<sup>Optional</sup> <a name="EffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil"></a>

```go
EffectiveUntil *string
```

- *Type:* *string

When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#effective_until Schedulev2#effective_until}

---

### Schedulev2RotationEventAssignmentStrategy <a name="Schedulev2RotationEventAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

&schedulev2.Schedulev2RotationEventAssignmentStrategy {
	Type: *string,
	Member: interface{},
	ShiftsPerMember: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type">Type</a></code> | <code>*string</code> | The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member">Member</a></code> | <code>interface{}</code> | member block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember">ShiftsPerMember</a></code> | <code>*f64</code> | Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type"></a>

```go
Type *string
```

- *Type:* *string

The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#type Schedulev2#type}

---

##### `Member`<sup>Optional</sup> <a name="Member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member"></a>

```go
Member interface{}
```

- *Type:* interface{}

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#member Schedulev2#member}

---

##### `ShiftsPerMember`<sup>Optional</sup> <a name="ShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember"></a>

```go
ShiftsPerMember *f64
```

- *Type:* *f64

Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#shifts_per_member Schedulev2#shifts_per_member}

---

### Schedulev2RotationEventAssignmentStrategyMember <a name="Schedulev2RotationEventAssignmentStrategyMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

&schedulev2.Schedulev2RotationEventAssignmentStrategyMember {
	Type: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type">Type</a></code> | <code>*string</code> | The member type. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId">UserId</a></code> | <code>*string</code> | The obfuscated user ID. Required when type is 'user_member'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type"></a>

```go
Type *string
```

- *Type:* *string

The member type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#type Schedulev2#type}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

The obfuscated user ID. Required when type is 'user_member'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.3/docs/resources/schedulev2#user_id Schedulev2#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Schedulev2RotationEventAssignmentStrategyList <a name="Schedulev2RotationEventAssignmentStrategyList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationEventAssignmentStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Schedulev2RotationEventAssignmentStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get"></a>

```go
func Get(index *f64) Schedulev2RotationEventAssignmentStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationEventAssignmentStrategyMemberList <a name="Schedulev2RotationEventAssignmentStrategyMemberList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationEventAssignmentStrategyMemberList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Schedulev2RotationEventAssignmentStrategyMemberList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get"></a>

```go
func Get(index *f64) Schedulev2RotationEventAssignmentStrategyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationEventAssignmentStrategyMemberOutputReference <a name="Schedulev2RotationEventAssignmentStrategyMemberOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationEventAssignmentStrategyMemberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Schedulev2RotationEventAssignmentStrategyMemberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationEventAssignmentStrategyOutputReference <a name="Schedulev2RotationEventAssignmentStrategyOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationEventAssignmentStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Schedulev2RotationEventAssignmentStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMember` <a name="PutMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember"></a>

```go
func PutMember(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMember` <a name="ResetMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember"></a>

```go
func ResetMember()
```

##### `ResetShiftsPerMember` <a name="ResetShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember"></a>

```go
func ResetShiftsPerMember()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member">Member</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput">MemberInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput">ShiftsPerMemberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember">ShiftsPerMember</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member"></a>

```go
func Member() Schedulev2RotationEventAssignmentStrategyMemberList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a>

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput"></a>

```go
func MemberInput() interface{}
```

- *Type:* interface{}

---

##### `ShiftsPerMemberInput`<sup>Optional</sup> <a name="ShiftsPerMemberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput"></a>

```go
func ShiftsPerMemberInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ShiftsPerMember`<sup>Required</sup> <a name="ShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember"></a>

```go
func ShiftsPerMember() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationEventList <a name="Schedulev2RotationEventList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationEventList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Schedulev2RotationEventList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get"></a>

```go
func Get(index *f64) Schedulev2RotationEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationEventOutputReference <a name="Schedulev2RotationEventOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationEventOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Schedulev2RotationEventOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssignmentStrategy` <a name="PutAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy"></a>

```go
func PutAssignmentStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssignmentStrategy` <a name="ResetAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy"></a>

```go
func ResetAssignmentStrategy()
```

##### `ResetEffectiveUntil` <a name="ResetEffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil"></a>

```go
func ResetEffectiveUntil()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy">AssignmentStrategy</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput">AssignmentStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput">EffectiveSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput">EffectiveUntilInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince">EffectiveSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil">EffectiveUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence">Recurrence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignmentStrategy`<sup>Required</sup> <a name="AssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy"></a>

```go
func AssignmentStrategy() Schedulev2RotationEventAssignmentStrategyList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AssignmentStrategyInput`<sup>Optional</sup> <a name="AssignmentStrategyInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput"></a>

```go
func AssignmentStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `EffectiveSinceInput`<sup>Optional</sup> <a name="EffectiveSinceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput"></a>

```go
func EffectiveSinceInput() *string
```

- *Type:* *string

---

##### `EffectiveUntilInput`<sup>Optional</sup> <a name="EffectiveUntilInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput"></a>

```go
func EffectiveUntilInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EffectiveSince`<sup>Required</sup> <a name="EffectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince"></a>

```go
func EffectiveSince() *string
```

- *Type:* *string

---

##### `EffectiveUntil`<sup>Required</sup> <a name="EffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil"></a>

```go
func EffectiveUntil() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence"></a>

```go
func Recurrence() *[]*string
```

- *Type:* *[]*string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationList <a name="Schedulev2RotationList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Schedulev2RotationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get"></a>

```go
func Get(index *f64) Schedulev2RotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Schedulev2RotationOutputReference <a name="Schedulev2RotationOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/schedulev2"

schedulev2.NewSchedulev2RotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Schedulev2RotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvent` <a name="PutEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent"></a>

```go
func PutEvent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEvent` <a name="ResetEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent"></a>

```go
func ResetEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event">Event</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput">EventInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event"></a>

```go
func Event() Schedulev2RotationEventList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput"></a>

```go
func EventInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



