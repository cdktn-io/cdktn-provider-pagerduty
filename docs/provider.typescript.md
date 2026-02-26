# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-pagerduty.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagerdutyProvider <a name="PagerdutyProvider" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs pagerduty}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

new provider.PagerdutyProvider(scope: Construct, id: string, config?: PagerdutyProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig">PagerdutyProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig">PagerdutyProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride">resetApiUrlOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion">resetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation">resetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken">resetUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUserToken">resetUserToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiUrlOverride` <a name="resetApiUrlOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetApiUrlOverride"></a>

```typescript
public resetApiUrlOverride(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetServiceRegion` <a name="resetServiceRegion" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetServiceRegion"></a>

```typescript
public resetServiceRegion(): void
```

##### `resetSkipCredentialsValidation` <a name="resetSkipCredentialsValidation" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetSkipCredentialsValidation"></a>

```typescript
public resetSkipCredentialsValidation(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUseAppOauthScopedToken` <a name="resetUseAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUseAppOauthScopedToken"></a>

```typescript
public resetUseAppOauthScopedToken(): void
```

##### `resetUserToken` <a name="resetUserToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.resetUserToken"></a>

```typescript
public resetUserToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PagerdutyProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

provider.PagerdutyProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

provider.PagerdutyProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

provider.PagerdutyProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

provider.PagerdutyProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PagerdutyProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PagerdutyProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PagerdutyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PagerdutyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput">apiUrlOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput">serviceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput">skipCredentialsValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput">useAppOauthScopedTokenInput</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput">userTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride">apiUrlOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion">serviceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken">useAppOauthScopedToken</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userToken">userToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiUrlOverrideInput`<sup>Optional</sup> <a name="apiUrlOverrideInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverrideInput"></a>

```typescript
public readonly apiUrlOverrideInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceRegionInput`<sup>Optional</sup> <a name="serviceRegionInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegionInput"></a>

```typescript
public readonly serviceRegionInput: string;
```

- *Type:* string

---

##### `skipCredentialsValidationInput`<sup>Optional</sup> <a name="skipCredentialsValidationInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidationInput"></a>

```typescript
public readonly skipCredentialsValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `useAppOauthScopedTokenInput`<sup>Optional</sup> <a name="useAppOauthScopedTokenInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedTokenInput"></a>

```typescript
public readonly useAppOauthScopedTokenInput: PagerdutyProviderUseAppOauthScopedToken;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `userTokenInput`<sup>Optional</sup> <a name="userTokenInput" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userTokenInput"></a>

```typescript
public readonly userTokenInput: string;
```

- *Type:* string

---

##### `apiUrlOverride`<sup>Optional</sup> <a name="apiUrlOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.apiUrlOverride"></a>

```typescript
public readonly apiUrlOverride: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.serviceRegion"></a>

```typescript
public readonly serviceRegion: string;
```

- *Type:* string

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `useAppOauthScopedToken`<sup>Optional</sup> <a name="useAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.useAppOauthScopedToken"></a>

```typescript
public readonly useAppOauthScopedToken: PagerdutyProviderUseAppOauthScopedToken;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

---

##### `userToken`<sup>Optional</sup> <a name="userToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.userToken"></a>

```typescript
public readonly userToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.provider.PagerdutyProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PagerdutyProviderConfig <a name="PagerdutyProviderConfig" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

const pagerdutyProviderConfig: provider.PagerdutyProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride">apiUrlOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#api_url_override PagerdutyProvider#api_url_override}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#insecure_tls PagerdutyProvider#insecure_tls}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion">serviceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#service_region PagerdutyProvider#service_region}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#token PagerdutyProvider#token}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken">useAppOauthScopedToken</a></code> | <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a></code> | use_app_oauth_scoped_token block. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken">userToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#user_token PagerdutyProvider#user_token}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#alias PagerdutyProvider#alias}

---

##### `apiUrlOverride`<sup>Optional</sup> <a name="apiUrlOverride" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.apiUrlOverride"></a>

```typescript
public readonly apiUrlOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#api_url_override PagerdutyProvider#api_url_override}.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#insecure_tls PagerdutyProvider#insecure_tls}.

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.serviceRegion"></a>

```typescript
public readonly serviceRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#service_region PagerdutyProvider#service_region}.

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#token PagerdutyProvider#token}.

---

##### `useAppOauthScopedToken`<sup>Optional</sup> <a name="useAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.useAppOauthScopedToken"></a>

```typescript
public readonly useAppOauthScopedToken: PagerdutyProviderUseAppOauthScopedToken;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken">PagerdutyProviderUseAppOauthScopedToken</a>

use_app_oauth_scoped_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#use_app_oauth_scoped_token PagerdutyProvider#use_app_oauth_scoped_token}

---

##### `userToken`<sup>Optional</sup> <a name="userToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderConfig.property.userToken"></a>

```typescript
public readonly userToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#user_token PagerdutyProvider#user_token}.

---

### PagerdutyProviderUseAppOauthScopedToken <a name="PagerdutyProviderUseAppOauthScopedToken" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-pagerduty'

const pagerdutyProviderUseAppOauthScopedToken: provider.PagerdutyProviderUseAppOauthScopedToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId">pdClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#pd_client_id PagerdutyProvider#pd_client_id}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret">pdClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#pd_client_secret PagerdutyProvider#pd_client_secret}. |
| <code><a href="#@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain">pdSubdomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#pd_subdomain PagerdutyProvider#pd_subdomain}. |

---

##### `pdClientId`<sup>Optional</sup> <a name="pdClientId" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientId"></a>

```typescript
public readonly pdClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#pd_client_id PagerdutyProvider#pd_client_id}.

---

##### `pdClientSecret`<sup>Optional</sup> <a name="pdClientSecret" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdClientSecret"></a>

```typescript
public readonly pdClientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#pd_client_secret PagerdutyProvider#pd_client_secret}.

---

##### `pdSubdomain`<sup>Optional</sup> <a name="pdSubdomain" id="@cdktn/provider-pagerduty.provider.PagerdutyProviderUseAppOauthScopedToken.property.pdSubdomain"></a>

```typescript
public readonly pdSubdomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs#pd_subdomain PagerdutyProvider#pd_subdomain}.

---



