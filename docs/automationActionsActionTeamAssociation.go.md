# `automationActionsActionTeamAssociation` Submodule <a name="`automationActionsActionTeamAssociation` Submodule" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsActionTeamAssociation <a name="AutomationActionsActionTeamAssociation" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association pagerduty_automation_actions_action_team_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/automationactionsactionteamassociation"

automationactionsactionteamassociation.NewAutomationActionsActionTeamAssociation(scope Construct, id *string, config AutomationActionsActionTeamAssociationConfig) AutomationActionsActionTeamAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig">AutomationActionsActionTeamAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig">AutomationActionsActionTeamAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutomationActionsActionTeamAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/automationactionsactionteamassociation"

automationactionsactionteamassociation.AutomationActionsActionTeamAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/automationactionsactionteamassociation"

automationactionsactionteamassociation.AutomationActionsActionTeamAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/automationactionsactionteamassociation"

automationactionsactionteamassociation.AutomationActionsActionTeamAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/automationactionsactionteamassociation"

automationactionsactionteamassociation.AutomationActionsActionTeamAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AutomationActionsActionTeamAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationActionsActionTeamAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationActionsActionTeamAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AutomationActionsActionTeamAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.actionIdInput">ActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionIdInput`<sup>Optional</sup> <a name="ActionIdInput" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.actionIdInput"></a>

```go
func ActionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsActionTeamAssociationConfig <a name="AutomationActionsActionTeamAssociationConfig" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/automationactionsactionteamassociation"

&automationactionsactionteamassociation.AutomationActionsActionTeamAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActionId: *string,
	TeamId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.actionId">ActionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#action_id AutomationActionsActionTeamAssociation#action_id}. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#team_id AutomationActionsActionTeamAssociation#team_id}. |
| <code><a href="#@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#id AutomationActionsActionTeamAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.actionId"></a>

```go
ActionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#action_id AutomationActionsActionTeamAssociation#action_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#team_id AutomationActionsActionTeamAssociation#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-pagerduty.automationActionsActionTeamAssociation.AutomationActionsActionTeamAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/automation_actions_action_team_association#id AutomationActionsActionTeamAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



