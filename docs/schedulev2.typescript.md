# `schedulev2` Submodule <a name="`schedulev2` Submodule" id="@cdktn/provider-pagerduty.schedulev2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedulev2 <a name="Schedulev2" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2 pagerduty_schedulev2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2(scope: Construct, id: string, config: Schedulev2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config">Schedulev2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config">Schedulev2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation">putRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation">resetRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotation` <a name="putRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation"></a>

```typescript
public putRotation(value: IResolvable | Schedulev2Rotation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRotation` <a name="resetRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation"></a>

```typescript
public resetRotation(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams"></a>

```typescript
public resetTeams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

schedulev2.Schedulev2.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

schedulev2.Schedulev2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

schedulev2.Schedulev2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

schedulev2.Schedulev2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Schedulev2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Schedulev2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Schedulev2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput">rotationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation"></a>

```typescript
public readonly rotation: Schedulev2RotationList;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rotationInput`<sup>Optional</sup> <a name="rotationInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput"></a>

```typescript
public readonly rotationInput: IResolvable | Schedulev2Rotation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Schedulev2Config <a name="Schedulev2Config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

const schedulev2Config: schedulev2.Schedulev2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name">name</a></code> | <code>string</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description">description</a></code> | <code>string</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation">rotation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]</code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams">teams</a></code> | <code>string[]</code> | List of team IDs to associate with this schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#name Schedulev2#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#description Schedulev2#description}

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation"></a>

```typescript
public readonly rotation: IResolvable | Schedulev2Rotation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#teams Schedulev2#teams}

---

### Schedulev2Rotation <a name="Schedulev2Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

const schedulev2Rotation: schedulev2.Schedulev2Rotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event">event</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]</code> | event block. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event"></a>

```typescript
public readonly event: IResolvable | Schedulev2RotationEvent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#event Schedulev2#event}

---

### Schedulev2RotationEvent <a name="Schedulev2RotationEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

const schedulev2RotationEvent: schedulev2.Schedulev2RotationEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince">effectiveSince</a></code> | <code>string</code> | When this event configuration starts producing shifts (ISO-8601 UTC). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime">endTime</a></code> | <code>string</code> | The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name">name</a></code> | <code>string</code> | The name of the event. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence">recurrence</a></code> | <code>string[]</code> | List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime">startTime</a></code> | <code>string</code> | The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy">assignmentStrategy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]</code> | assignment_strategy block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil">effectiveUntil</a></code> | <code>string</code> | When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite. |

---

##### `effectiveSince`<sup>Required</sup> <a name="effectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince"></a>

```typescript
public readonly effectiveSince: string;
```

- *Type:* string

When this event configuration starts producing shifts (ISO-8601 UTC).

Must be a future time; the API will adjust past times to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#effective_since Schedulev2#effective_since}

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#end_time Schedulev2#end_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#name Schedulev2#name}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence"></a>

```typescript
public readonly recurrence: string[];
```

- *Type:* string[]

List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#recurrence Schedulev2#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#start_time Schedulev2#start_time}

---

##### `assignmentStrategy`<sup>Optional</sup> <a name="assignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy"></a>

```typescript
public readonly assignmentStrategy: IResolvable | Schedulev2RotationEventAssignmentStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#assignment_strategy Schedulev2#assignment_strategy}

---

##### `effectiveUntil`<sup>Optional</sup> <a name="effectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil"></a>

```typescript
public readonly effectiveUntil: string;
```

- *Type:* string

When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#effective_until Schedulev2#effective_until}

---

### Schedulev2RotationEventAssignmentStrategy <a name="Schedulev2RotationEventAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

const schedulev2RotationEventAssignmentStrategy: schedulev2.Schedulev2RotationEventAssignmentStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type">type</a></code> | <code>string</code> | The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member">member</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]</code> | member block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember">shiftsPerMember</a></code> | <code>number</code> | Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#type Schedulev2#type}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member"></a>

```typescript
public readonly member: IResolvable | Schedulev2RotationEventAssignmentStrategyMember[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#member Schedulev2#member}

---

##### `shiftsPerMember`<sup>Optional</sup> <a name="shiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember"></a>

```typescript
public readonly shiftsPerMember: number;
```

- *Type:* number

Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#shifts_per_member Schedulev2#shifts_per_member}

---

### Schedulev2RotationEventAssignmentStrategyMember <a name="Schedulev2RotationEventAssignmentStrategyMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

const schedulev2RotationEventAssignmentStrategyMember: schedulev2.Schedulev2RotationEventAssignmentStrategyMember = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type">type</a></code> | <code>string</code> | The member type. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId">userId</a></code> | <code>string</code> | The obfuscated user ID. Required when type is 'user_member'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The member type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#type Schedulev2#type}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The obfuscated user ID. Required when type is 'user_member'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.1/docs/resources/schedulev2#user_id Schedulev2#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Schedulev2RotationEventAssignmentStrategyList <a name="Schedulev2RotationEventAssignmentStrategyList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationEventAssignmentStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get"></a>

```typescript
public get(index: number): Schedulev2RotationEventAssignmentStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2RotationEventAssignmentStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

---


### Schedulev2RotationEventAssignmentStrategyMemberList <a name="Schedulev2RotationEventAssignmentStrategyMemberList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get"></a>

```typescript
public get(index: number): Schedulev2RotationEventAssignmentStrategyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2RotationEventAssignmentStrategyMember[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

---


### Schedulev2RotationEventAssignmentStrategyMemberOutputReference <a name="Schedulev2RotationEventAssignmentStrategyMemberOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2RotationEventAssignmentStrategyMember;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>

---


### Schedulev2RotationEventAssignmentStrategyOutputReference <a name="Schedulev2RotationEventAssignmentStrategyOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember">putMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember">resetMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember">resetShiftsPerMember</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMember` <a name="putMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember"></a>

```typescript
public putMember(value: IResolvable | Schedulev2RotationEventAssignmentStrategyMember[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

---

##### `resetMember` <a name="resetMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember"></a>

```typescript
public resetMember(): void
```

##### `resetShiftsPerMember` <a name="resetShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember"></a>

```typescript
public resetShiftsPerMember(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member">member</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput">memberInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput">shiftsPerMemberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember">shiftsPerMember</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member"></a>

```typescript
public readonly member: Schedulev2RotationEventAssignmentStrategyMemberList;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a>

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput"></a>

```typescript
public readonly memberInput: IResolvable | Schedulev2RotationEventAssignmentStrategyMember[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>[]

---

##### `shiftsPerMemberInput`<sup>Optional</sup> <a name="shiftsPerMemberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput"></a>

```typescript
public readonly shiftsPerMemberInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `shiftsPerMember`<sup>Required</sup> <a name="shiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember"></a>

```typescript
public readonly shiftsPerMember: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2RotationEventAssignmentStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>

---


### Schedulev2RotationEventList <a name="Schedulev2RotationEventList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationEventList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get"></a>

```typescript
public get(index: number): Schedulev2RotationEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2RotationEvent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

---


### Schedulev2RotationEventOutputReference <a name="Schedulev2RotationEventOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationEventOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy">putAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy">resetAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil">resetEffectiveUntil</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssignmentStrategy` <a name="putAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy"></a>

```typescript
public putAssignmentStrategy(value: IResolvable | Schedulev2RotationEventAssignmentStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

---

##### `resetAssignmentStrategy` <a name="resetAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy"></a>

```typescript
public resetAssignmentStrategy(): void
```

##### `resetEffectiveUntil` <a name="resetEffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil"></a>

```typescript
public resetEffectiveUntil(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy">assignmentStrategy</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput">assignmentStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput">effectiveSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput">effectiveUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince">effectiveSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil">effectiveUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence">recurrence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignmentStrategy`<sup>Required</sup> <a name="assignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy"></a>

```typescript
public readonly assignmentStrategy: Schedulev2RotationEventAssignmentStrategyList;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `assignmentStrategyInput`<sup>Optional</sup> <a name="assignmentStrategyInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput"></a>

```typescript
public readonly assignmentStrategyInput: IResolvable | Schedulev2RotationEventAssignmentStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>[]

---

##### `effectiveSinceInput`<sup>Optional</sup> <a name="effectiveSinceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput"></a>

```typescript
public readonly effectiveSinceInput: string;
```

- *Type:* string

---

##### `effectiveUntilInput`<sup>Optional</sup> <a name="effectiveUntilInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput"></a>

```typescript
public readonly effectiveUntilInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: string[];
```

- *Type:* string[]

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `effectiveSince`<sup>Required</sup> <a name="effectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince"></a>

```typescript
public readonly effectiveSince: string;
```

- *Type:* string

---

##### `effectiveUntil`<sup>Required</sup> <a name="effectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil"></a>

```typescript
public readonly effectiveUntil: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: string[];
```

- *Type:* string[]

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2RotationEvent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>

---


### Schedulev2RotationList <a name="Schedulev2RotationList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get"></a>

```typescript
public get(index: number): Schedulev2RotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2Rotation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>[]

---


### Schedulev2RotationOutputReference <a name="Schedulev2RotationOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer"></a>

```typescript
import { schedulev2 } from '@cdktn/provider-pagerduty'

new schedulev2.Schedulev2RotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent">resetEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvent` <a name="putEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent"></a>

```typescript
public putEvent(value: IResolvable | Schedulev2RotationEvent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

---

##### `resetEvent` <a name="resetEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event">event</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput">eventInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event"></a>

```typescript
public readonly event: Schedulev2RotationEventList;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: IResolvable | Schedulev2RotationEvent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Schedulev2Rotation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>

---



