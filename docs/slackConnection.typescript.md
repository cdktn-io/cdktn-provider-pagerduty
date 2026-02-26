# `slackConnection` Submodule <a name="`slackConnection` Submodule" id="@cdktn/provider-pagerduty.slackConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SlackConnection <a name="SlackConnection" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection pagerduty_slack_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

new slackConnection.SlackConnection(scope: Construct, id: string, config: SlackConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig">SlackConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig">SlackConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.putConfig"></a>

```typescript
public putConfig(value: IResolvable | SlackConnectionConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.putConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]

---

##### `resetId` <a name="resetId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SlackConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.isConstruct"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

slackConnection.SlackConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.isTerraformElement"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

slackConnection.SlackConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.isTerraformResource"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

slackConnection.SlackConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.generateConfigForImport"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

slackConnection.SlackConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SlackConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SlackConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SlackConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SlackConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList">SlackConnectionConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.config"></a>

```typescript
public readonly config: SlackConnectionConfigAList;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList">SlackConnectionConfigAList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | SlackConnectionConfigA[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.slackConnection.SlackConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SlackConnectionConfig <a name="SlackConnectionConfig" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.Initializer"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

const slackConnectionConfig: slackConnection.SlackConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.channelId">channelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#channel_id SlackConnection#channel_id}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.config">config</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]</code> | config block. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#notification_type SlackConnection#notification_type}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#source_id SlackConnection#source_id}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#source_type SlackConnection#source_type}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#id SlackConnection#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#channel_id SlackConnection#channel_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.config"></a>

```typescript
public readonly config: IResolvable | SlackConnectionConfigA[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#config SlackConnection#config}

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#notification_type SlackConnection#notification_type}.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#source_id SlackConnection#source_id}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#source_type SlackConnection#source_type}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#workspace_id SlackConnection#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#id SlackConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SlackConnectionConfigA <a name="SlackConnectionConfigA" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.Initializer"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

const slackConnectionConfigA: slackConnection.SlackConnectionConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#events SlackConnection#events}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.priorities">priorities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#priorities SlackConnection#priorities}. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.urgency">urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#urgency SlackConnection#urgency}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#events SlackConnection#events}.

---

##### `priorities`<sup>Optional</sup> <a name="priorities" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.priorities"></a>

```typescript
public readonly priorities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#priorities SlackConnection#priorities}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.2/docs/resources/slack_connection#urgency SlackConnection#urgency}.

---

## Classes <a name="Classes" id="Classes"></a>

### SlackConnectionConfigAList <a name="SlackConnectionConfigAList" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

new slackConnection.SlackConnectionConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.get"></a>

```typescript
public get(index: number): SlackConnectionConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SlackConnectionConfigA[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>[]

---


### SlackConnectionConfigAOutputReference <a name="SlackConnectionConfigAOutputReference" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer"></a>

```typescript
import { slackConnection } from '@cdktn/provider-pagerduty'

new slackConnection.SlackConnectionConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetPriorities">resetPriorities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPriorities` <a name="resetPriorities" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetPriorities"></a>

```typescript
public resetPriorities(): void
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.resetUrgency"></a>

```typescript
public resetUrgency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.prioritiesInput">prioritiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.priorities">priorities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgency">urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `prioritiesInput`<sup>Optional</sup> <a name="prioritiesInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.prioritiesInput"></a>

```typescript
public readonly prioritiesInput: string[];
```

- *Type:* string[]

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `priorities`<sup>Required</sup> <a name="priorities" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.priorities"></a>

```typescript
public readonly priorities: string[];
```

- *Type:* string[]

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SlackConnectionConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.slackConnection.SlackConnectionConfigA">SlackConnectionConfigA</a>

---



