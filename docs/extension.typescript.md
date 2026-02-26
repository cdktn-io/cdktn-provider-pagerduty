# `extension` Submodule <a name="`extension` Submodule" id="@cdktn/provider-pagerduty.extension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Extension <a name="Extension" id="@cdktn/provider-pagerduty.extension.Extension"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension pagerduty_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.extension.Extension.Initializer"></a>

```typescript
import { extension } from '@cdktn/provider-pagerduty'

new extension.Extension(scope: Construct, id: string, config: ExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig">ExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.extension.Extension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extension.Extension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.extension.Extension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig">ExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.extension.Extension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.extension.Extension.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.extension.Extension.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.extension.Extension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.extension.Extension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.extension.Extension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.extension.Extension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.extension.Extension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.extension.Extension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.extension.Extension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.extension.Extension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.extension.Extension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-pagerduty.extension.Extension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.extension.Extension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-pagerduty.extension.Extension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-pagerduty.extension.Extension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extension.Extension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extension.Extension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.extension.Extension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extension.Extension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-pagerduty.extension.Extension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extension.Extension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-pagerduty.extension.Extension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.extension.Extension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.extension.Extension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-pagerduty.extension.Extension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extension.Extension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-pagerduty.extension.Extension.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="@cdktn/provider-pagerduty.extension.Extension.resetEndpointUrl"></a>

```typescript
public resetEndpointUrl(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-pagerduty.extension.Extension.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-pagerduty.extension.Extension.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Extension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.extension.Extension.isConstruct"></a>

```typescript
import { extension } from '@cdktn/provider-pagerduty'

extension.Extension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.extension.Extension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.extension.Extension.isTerraformElement"></a>

```typescript
import { extension } from '@cdktn/provider-pagerduty'

extension.Extension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.extension.Extension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-pagerduty.extension.Extension.isTerraformResource"></a>

```typescript
import { extension } from '@cdktn/provider-pagerduty'

extension.Extension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.extension.Extension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.extension.Extension.generateConfigForImport"></a>

```typescript
import { extension } from '@cdktn/provider-pagerduty'

extension.Extension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Extension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.extension.Extension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.extension.Extension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Extension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.extension.Extension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Extension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extension.Extension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Extension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.endpointUrlInput">endpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.extensionObjectsInput">extensionObjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.extensionSchemaInput">extensionSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.extensionObjects">extensionObjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.extensionSchema">extensionSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.extension.Extension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.extension.Extension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.extension.Extension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.extension.Extension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.extension.Extension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.extension.Extension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.extension.Extension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.extension.Extension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.extension.Extension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.extension.Extension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.extension.Extension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.extension.Extension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extension.Extension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.extension.Extension.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktn/provider-pagerduty.extension.Extension.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extension.Extension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-pagerduty.extension.Extension.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-pagerduty.extension.Extension.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="@cdktn/provider-pagerduty.extension.Extension.property.endpointUrlInput"></a>

```typescript
public readonly endpointUrlInput: string;
```

- *Type:* string

---

##### `extensionObjectsInput`<sup>Optional</sup> <a name="extensionObjectsInput" id="@cdktn/provider-pagerduty.extension.Extension.property.extensionObjectsInput"></a>

```typescript
public readonly extensionObjectsInput: string[];
```

- *Type:* string[]

---

##### `extensionSchemaInput`<sup>Optional</sup> <a name="extensionSchemaInput" id="@cdktn/provider-pagerduty.extension.Extension.property.extensionSchemaInput"></a>

```typescript
public readonly extensionSchemaInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.extension.Extension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.extension.Extension.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.extension.Extension.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-pagerduty.extension.Extension.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktn/provider-pagerduty.extension.Extension.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* string[]

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktn/provider-pagerduty.extension.Extension.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.extension.Extension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.extension.Extension.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extension.Extension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.extension.Extension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExtensionConfig <a name="ExtensionConfig" id="@cdktn/provider-pagerduty.extension.ExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.Initializer"></a>

```typescript
import { extension } from '@cdktn/provider-pagerduty'

const extensionConfig: extension.ExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.extensionObjects">extensionObjects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#extension_objects Extension#extension_objects}. |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.extensionSchema">extensionSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#extension_schema Extension#extension_schema}. |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.config">config</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#config Extension#config}. |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#endpoint_url Extension#endpoint_url}. |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#name Extension#name}. |
| <code><a href="#@cdktn/provider-pagerduty.extension.ExtensionConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#type Extension#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#extension_objects Extension#extension_objects}.

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#extension_schema Extension#extension_schema}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#config Extension#config}.

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#endpoint_url Extension#endpoint_url}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#name Extension#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-pagerduty.extension.ExtensionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/extension#type Extension#type}.

---



