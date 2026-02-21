# `incidentTypeCustomField` Submodule <a name="`incidentTypeCustomField` Submodule" id="@cdktn/provider-pagerduty.incidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentTypeCustomField <a name="IncidentTypeCustomField" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/incidenttypecustomfield"

incidenttypecustomfield.NewIncidentTypeCustomField(scope Construct, id *string, config IncidentTypeCustomFieldConfig) IncidentTypeCustomField
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig">IncidentTypeCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig">IncidentTypeCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions">ResetFieldOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType">ResetFieldType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFieldOptions` <a name="ResetFieldOptions" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions"></a>

```go
func ResetFieldOptions()
```

##### `ResetFieldType` <a name="ResetFieldType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType"></a>

```go
func ResetFieldType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentTypeCustomField resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/incidenttypecustomfield"

incidenttypecustomfield.IncidentTypeCustomField_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/incidenttypecustomfield"

incidenttypecustomfield.IncidentTypeCustomField_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/incidenttypecustomfield"

incidenttypecustomfield.IncidentTypeCustomField_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/incidenttypecustomfield"

incidenttypecustomfield.IncidentTypeCustomField_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IncidentTypeCustomField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IncidentTypeCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput">FieldOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput">FieldTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions">FieldOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType">FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType">IncidentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FieldOptionsInput`<sup>Optional</sup> <a name="FieldOptionsInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput"></a>

```go
func FieldOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldTypeInput`<sup>Optional</sup> <a name="FieldTypeInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput"></a>

```go
func FieldTypeInput() *string
```

- *Type:* *string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput"></a>

```go
func IncidentTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FieldOptions`<sup>Required</sup> <a name="FieldOptions" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions"></a>

```go
func FieldOptions() *[]*string
```

- *Type:* *[]*string

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType"></a>

```go
func FieldType() *string
```

- *Type:* *string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType"></a>

```go
func IncidentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeCustomFieldConfig <a name="IncidentTypeCustomFieldConfig" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/incidenttypecustomfield"

&incidenttypecustomfield.IncidentTypeCustomFieldConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataType: *string,
	DisplayName: *string,
	IncidentType: *string,
	Name: *string,
	DefaultValue: *string,
	Description: *string,
	Enabled: interface{},
	FieldOptions: *[]*string,
	FieldType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType">IncidentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions">FieldOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}. |
| <code><a href="#@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType">FieldType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}.

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType"></a>

```go
IncidentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}.

---

##### `FieldOptions`<sup>Optional</sup> <a name="FieldOptions" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions"></a>

```go
FieldOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}.

---

##### `FieldType`<sup>Optional</sup> <a name="FieldType" id="@cdktn/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType"></a>

```go
FieldType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}.

---



