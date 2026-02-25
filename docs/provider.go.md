# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-pagerduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagerdutyProvider <a name="PagerdutyProvider" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs pagerduty}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

provider.NewPagerdutyProvider(scope Construct, id *string, config PagerdutyProviderConfig) PagerdutyProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig">PagerdutyProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig">PagerdutyProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride">ResetApiUrlOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion">ResetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation">ResetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken">ResetUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUserToken">ResetUserToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiUrlOverride` <a name="ResetApiUrlOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride"></a>

```go
func ResetApiUrlOverride()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetServiceRegion` <a name="ResetServiceRegion" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion"></a>

```go
func ResetServiceRegion()
```

##### `ResetSkipCredentialsValidation` <a name="ResetSkipCredentialsValidation" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation"></a>

```go
func ResetSkipCredentialsValidation()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUseAppOauthScopedToken` <a name="ResetUseAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken"></a>

```go
func ResetUseAppOauthScopedToken()
```

##### `ResetUserToken` <a name="ResetUserToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUserToken"></a>

```go
func ResetUserToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PagerdutyProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

provider.PagerdutyProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

provider.PagerdutyProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

provider.PagerdutyProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

provider.PagerdutyProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PagerdutyProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PagerdutyProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PagerdutyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PagerdutyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput">ApiUrlOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput">ServiceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput">SkipCredentialsValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput">UseAppOauthScopedTokenInput</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput">UserTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride">ApiUrlOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion">ServiceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation">SkipCredentialsValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken">UseAppOauthScopedToken</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userToken">UserToken</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiUrlOverrideInput`<sup>Optional</sup> <a name="ApiUrlOverrideInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput"></a>

```go
func ApiUrlOverrideInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceRegionInput`<sup>Optional</sup> <a name="ServiceRegionInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput"></a>

```go
func ServiceRegionInput() *string
```

- *Type:* *string

---

##### `SkipCredentialsValidationInput`<sup>Optional</sup> <a name="SkipCredentialsValidationInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput"></a>

```go
func SkipCredentialsValidationInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UseAppOauthScopedTokenInput`<sup>Optional</sup> <a name="UseAppOauthScopedTokenInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput"></a>

```go
func UseAppOauthScopedTokenInput() PagerdutyProviderUseAppOauthScopedToken
```

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `UserTokenInput`<sup>Optional</sup> <a name="UserTokenInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput"></a>

```go
func UserTokenInput() *string
```

- *Type:* *string

---

##### `ApiUrlOverride`<sup>Optional</sup> <a name="ApiUrlOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride"></a>

```go
func ApiUrlOverride() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion"></a>

```go
func ServiceRegion() *string
```

- *Type:* *string

---

##### `SkipCredentialsValidation`<sup>Optional</sup> <a name="SkipCredentialsValidation" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation"></a>

```go
func SkipCredentialsValidation() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `UseAppOauthScopedToken`<sup>Optional</sup> <a name="UseAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken"></a>

```go
func UseAppOauthScopedToken() PagerdutyProviderUseAppOauthScopedToken
```

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `UserToken`<sup>Optional</sup> <a name="UserToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userToken"></a>

```go
func UserToken() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PagerdutyProviderConfig <a name="PagerdutyProviderConfig" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

&provider.PagerdutyProviderConfig {
	Alias: *string,
	ApiUrlOverride: *string,
	InsecureTls: interface{},
	ServiceRegion: *string,
	SkipCredentialsValidation: interface{},
	Token: *string,
	UseAppOauthScopedToken: github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15.provider.PagerdutyProviderUseAppOauthScopedToken,
	UserToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride">ApiUrlOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#insecure_tls PagerdutyProvider#insecure_tls}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion">ServiceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation">SkipCredentialsValidation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#token PagerdutyProvider#token}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken">UseAppOauthScopedToken</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | use_app_oauth_scoped_token block. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken">UserToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#user_token PagerdutyProvider#user_token}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#alias PagerdutyProvider#alias}

---

##### `ApiUrlOverride`<sup>Optional</sup> <a name="ApiUrlOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride"></a>

```go
ApiUrlOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#api_url_override PagerdutyProvider#api_url_override}.

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#insecure_tls PagerdutyProvider#insecure_tls}.

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion"></a>

```go
ServiceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#service_region PagerdutyProvider#service_region}.

---

##### `SkipCredentialsValidation`<sup>Optional</sup> <a name="SkipCredentialsValidation" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation"></a>

```go
SkipCredentialsValidation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#token PagerdutyProvider#token}.

---

##### `UseAppOauthScopedToken`<sup>Optional</sup> <a name="UseAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken"></a>

```go
UseAppOauthScopedToken PagerdutyProviderUseAppOauthScopedToken
```

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

use_app_oauth_scoped_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}

---

##### `UserToken`<sup>Optional</sup> <a name="UserToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken"></a>

```go
UserToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#user_token PagerdutyProvider#user_token}.

---

### PagerdutyProviderUseAppOauthScopedToken <a name="PagerdutyProviderUseAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-pagerduty-go/pagerduty/v15/provider"

&provider.PagerdutyProviderUseAppOauthScopedToken {
	PdClientId: *string,
	PdClientSecret: *string,
	PdSubdomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId">PdClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#pd_client_id PagerdutyProvider#pd_client_id}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret">PdClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#pd_client_secret PagerdutyProvider#pd_client_secret}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain">PdSubdomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#pd_subdomain PagerdutyProvider#pd_subdomain}. |

---

##### `PdClientId`<sup>Optional</sup> <a name="PdClientId" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId"></a>

```go
PdClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#pd_client_id PagerdutyProvider#pd_client_id}.

---

##### `PdClientSecret`<sup>Optional</sup> <a name="PdClientSecret" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret"></a>

```go
PdClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#pd_client_secret PagerdutyProvider#pd_client_secret}.

---

##### `PdSubdomain`<sup>Optional</sup> <a name="PdSubdomain" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain"></a>

```go
PdSubdomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs#pd_subdomain PagerdutyProvider#pd_subdomain}.

---



