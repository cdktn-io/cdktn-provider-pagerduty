# `dataPagerdutyServiceCustomField` Submodule <a name="`dataPagerdutyServiceCustomField` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyServiceCustomField <a name="DataPagerdutyServiceCustomField" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/data-sources/service_custom_field pagerduty_service_custom_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

new dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField(scope: Construct, id: string, config: DataPagerdutyServiceCustomFieldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig">DataPagerdutyServiceCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig">DataPagerdutyServiceCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataPagerdutyServiceCustomField resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataPagerdutyServiceCustomField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyServiceCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyServiceCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/data-sources/service_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyServiceCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldOptions">fieldOptions</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList">DataPagerdutyServiceCustomFieldFieldOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fieldOptions`<sup>Required</sup> <a name="fieldOptions" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: DataPagerdutyServiceCustomFieldFieldOptionsList;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList">DataPagerdutyServiceCustomFieldFieldOptionsList</a>

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomField.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyServiceCustomFieldConfig <a name="DataPagerdutyServiceCustomFieldConfig" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

const dataPagerdutyServiceCustomFieldConfig: dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the field. This must be unique across an account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.1/docs/data-sources/service_custom_field#display_name DataPagerdutyServiceCustomField#display_name}

---

### DataPagerdutyServiceCustomFieldFieldOptions <a name="DataPagerdutyServiceCustomFieldFieldOptions" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

const dataPagerdutyServiceCustomFieldFieldOptions: dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyServiceCustomFieldFieldOptionsList <a name="DataPagerdutyServiceCustomFieldFieldOptionsList" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

new dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.get"></a>

```typescript
public get(index: number): DataPagerdutyServiceCustomFieldFieldOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyServiceCustomFieldFieldOptionsOutputReference <a name="DataPagerdutyServiceCustomFieldFieldOptionsOutputReference" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomField } from '@cdktn/provider-pagerduty'

new dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions">DataPagerdutyServiceCustomFieldFieldOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyServiceCustomFieldFieldOptions;
```

- *Type:* <a href="#@cdktn/provider-pagerduty.dataPagerdutyServiceCustomField.DataPagerdutyServiceCustomFieldFieldOptions">DataPagerdutyServiceCustomFieldFieldOptions</a>

---



