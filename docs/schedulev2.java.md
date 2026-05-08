# `schedulev2` Submodule <a name="`schedulev2` Submodule" id="@cdktn/provider-pagerduty.schedulev2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedulev2 <a name="Schedulev2" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2 pagerduty_schedulev2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2;

Schedulev2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .rotation(IResolvable|java.util.List<Schedulev2Rotation>)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.rotation">rotation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>></code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | List of team IDs to associate with this schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#name Schedulev2#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#description Schedulev2#description}

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.rotation"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.teams"></a>

- *Type:* java.util.List<java.lang.String>

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#teams Schedulev2#teams}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotation` <a name="putRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation"></a>

```java
public void putRotation(IResolvable|java.util.List<Schedulev2Rotation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRotation` <a name="resetRotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation"></a>

```java
public void resetRotation()
```

##### `resetTeams` <a name="resetTeams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams"></a>

```java
public void resetTeams()
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

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2;

Schedulev2.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2;

Schedulev2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2;

Schedulev2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2;

Schedulev2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Schedulev2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Schedulev2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Schedulev2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Schedulev2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput">rotationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation"></a>

```java
public Schedulev2RotationList getRotation();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rotationInput`<sup>Optional</sup> <a name="rotationInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput"></a>

```java
public IResolvable|java.util.List<Schedulev2Rotation> getRotationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>>

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Schedulev2Config <a name="Schedulev2Config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2Config;

Schedulev2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .rotation(IResolvable|java.util.List<Schedulev2Rotation>)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name">name</a></code> | <code>java.lang.String</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description">description</a></code> | <code>java.lang.String</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation">rotation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>></code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | List of team IDs to associate with this schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#name Schedulev2#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#description Schedulev2#description}

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation"></a>

```java
public IResolvable|java.util.List<Schedulev2Rotation> getRotation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#teams Schedulev2#teams}

---

### Schedulev2Rotation <a name="Schedulev2Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2Rotation;

Schedulev2Rotation.builder()
//  .event(IResolvable|java.util.List<Schedulev2RotationEvent>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event">event</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>></code> | event block. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEvent> getEvent();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#event Schedulev2#event}

---

### Schedulev2RotationEvent <a name="Schedulev2RotationEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEvent;

Schedulev2RotationEvent.builder()
    .effectiveSince(java.lang.String)
    .endTime(java.lang.String)
    .name(java.lang.String)
    .recurrence(java.util.List<java.lang.String>)
    .startTime(java.lang.String)
//  .assignmentStrategy(IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategy>)
//  .effectiveUntil(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince">effectiveSince</a></code> | <code>java.lang.String</code> | When this event configuration starts producing shifts (ISO-8601 UTC). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name">name</a></code> | <code>java.lang.String</code> | The name of the event. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence">recurrence</a></code> | <code>java.util.List<java.lang.String></code> | List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy">assignmentStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>></code> | assignment_strategy block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil">effectiveUntil</a></code> | <code>java.lang.String</code> | When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite. |

---

##### `effectiveSince`<sup>Required</sup> <a name="effectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince"></a>

```java
public java.lang.String getEffectiveSince();
```

- *Type:* java.lang.String

When this event configuration starts producing shifts (ISO-8601 UTC).

Must be a future time; the API will adjust past times to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#effective_since Schedulev2#effective_since}

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#end_time Schedulev2#end_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#name Schedulev2#name}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence"></a>

```java
public java.util.List<java.lang.String> getRecurrence();
```

- *Type:* java.util.List<java.lang.String>

List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#recurrence Schedulev2#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#start_time Schedulev2#start_time}

---

##### `assignmentStrategy`<sup>Optional</sup> <a name="assignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategy> getAssignmentStrategy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>>

assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#assignment_strategy Schedulev2#assignment_strategy}

---

##### `effectiveUntil`<sup>Optional</sup> <a name="effectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil"></a>

```java
public java.lang.String getEffectiveUntil();
```

- *Type:* java.lang.String

When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#effective_until Schedulev2#effective_until}

---

### Schedulev2RotationEventAssignmentStrategy <a name="Schedulev2RotationEventAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy;

Schedulev2RotationEventAssignmentStrategy.builder()
    .type(java.lang.String)
//  .member(IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategyMember>)
//  .shiftsPerMember(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type">type</a></code> | <code>java.lang.String</code> | The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member">member</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>></code> | member block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember">shiftsPerMember</a></code> | <code>java.lang.Number</code> | Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#type Schedulev2#type}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategyMember> getMember();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>>

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#member Schedulev2#member}

---

##### `shiftsPerMember`<sup>Optional</sup> <a name="shiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember"></a>

```java
public java.lang.Number getShiftsPerMember();
```

- *Type:* java.lang.Number

Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#shifts_per_member Schedulev2#shifts_per_member}

---

### Schedulev2RotationEventAssignmentStrategyMember <a name="Schedulev2RotationEventAssignmentStrategyMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember;

Schedulev2RotationEventAssignmentStrategyMember.builder()
    .type(java.lang.String)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type">type</a></code> | <code>java.lang.String</code> | The member type. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId">userId</a></code> | <code>java.lang.String</code> | The obfuscated user ID. Required when type is 'user_member'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The member type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#type Schedulev2#type}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

The obfuscated user ID. Required when type is 'user_member'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/schedulev2#user_id Schedulev2#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Schedulev2RotationEventAssignmentStrategyList <a name="Schedulev2RotationEventAssignmentStrategyList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList;

new Schedulev2RotationEventAssignmentStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get"></a>

```java
public Schedulev2RotationEventAssignmentStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>>

---


### Schedulev2RotationEventAssignmentStrategyMemberList <a name="Schedulev2RotationEventAssignmentStrategyMemberList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList;

new Schedulev2RotationEventAssignmentStrategyMemberList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get"></a>

```java
public Schedulev2RotationEventAssignmentStrategyMemberOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategyMember> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>>

---


### Schedulev2RotationEventAssignmentStrategyMemberOutputReference <a name="Schedulev2RotationEventAssignmentStrategyMemberOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference;

new Schedulev2RotationEventAssignmentStrategyMemberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue"></a>

```java
public IResolvable|Schedulev2RotationEventAssignmentStrategyMember getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>

---


### Schedulev2RotationEventAssignmentStrategyOutputReference <a name="Schedulev2RotationEventAssignmentStrategyOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference;

new Schedulev2RotationEventAssignmentStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMember` <a name="putMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember"></a>

```java
public void putMember(IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategyMember> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>>

---

##### `resetMember` <a name="resetMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember"></a>

```java
public void resetMember()
```

##### `resetShiftsPerMember` <a name="resetShiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember"></a>

```java
public void resetShiftsPerMember()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member">member</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput">memberInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput">shiftsPerMemberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember">shiftsPerMember</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member"></a>

```java
public Schedulev2RotationEventAssignmentStrategyMemberList getMember();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a>

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategyMember> getMemberInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>>

---

##### `shiftsPerMemberInput`<sup>Optional</sup> <a name="shiftsPerMemberInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput"></a>

```java
public java.lang.Number getShiftsPerMemberInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `shiftsPerMember`<sup>Required</sup> <a name="shiftsPerMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember"></a>

```java
public java.lang.Number getShiftsPerMember();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|Schedulev2RotationEventAssignmentStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>

---


### Schedulev2RotationEventList <a name="Schedulev2RotationEventList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventList;

new Schedulev2RotationEventList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get"></a>

```java
public Schedulev2RotationEventOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEvent> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>>

---


### Schedulev2RotationEventOutputReference <a name="Schedulev2RotationEventOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationEventOutputReference;

new Schedulev2RotationEventOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssignmentStrategy` <a name="putAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy"></a>

```java
public void putAssignmentStrategy(IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>>

---

##### `resetAssignmentStrategy` <a name="resetAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy"></a>

```java
public void resetAssignmentStrategy()
```

##### `resetEffectiveUntil` <a name="resetEffectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil"></a>

```java
public void resetEffectiveUntil()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy">assignmentStrategy</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput">assignmentStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput">effectiveSinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput">effectiveUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince">effectiveSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil">effectiveUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence">recurrence</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignmentStrategy`<sup>Required</sup> <a name="assignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy"></a>

```java
public Schedulev2RotationEventAssignmentStrategyList getAssignmentStrategy();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `assignmentStrategyInput`<sup>Optional</sup> <a name="assignmentStrategyInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEventAssignmentStrategy> getAssignmentStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>>

---

##### `effectiveSinceInput`<sup>Optional</sup> <a name="effectiveSinceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput"></a>

```java
public java.lang.String getEffectiveSinceInput();
```

- *Type:* java.lang.String

---

##### `effectiveUntilInput`<sup>Optional</sup> <a name="effectiveUntilInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput"></a>

```java
public java.lang.String getEffectiveUntilInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput"></a>

```java
public java.util.List<java.lang.String> getRecurrenceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `effectiveSince`<sup>Required</sup> <a name="effectiveSince" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince"></a>

```java
public java.lang.String getEffectiveSince();
```

- *Type:* java.lang.String

---

##### `effectiveUntil`<sup>Required</sup> <a name="effectiveUntil" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil"></a>

```java
public java.lang.String getEffectiveUntil();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence"></a>

```java
public java.util.List<java.lang.String> getRecurrence();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue"></a>

```java
public IResolvable|Schedulev2RotationEvent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>

---


### Schedulev2RotationList <a name="Schedulev2RotationList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationList;

new Schedulev2RotationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get"></a>

```java
public Schedulev2RotationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Schedulev2Rotation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>>

---


### Schedulev2RotationOutputReference <a name="Schedulev2RotationOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.schedulev2.Schedulev2RotationOutputReference;

new Schedulev2RotationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvent` <a name="putEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent"></a>

```java
public void putEvent(IResolvable|java.util.List<Schedulev2RotationEvent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>>

---

##### `resetEvent` <a name="resetEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent"></a>

```java
public void resetEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event">event</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput">eventInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event"></a>

```java
public Schedulev2RotationEventList getEvent();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput"></a>

```java
public IResolvable|java.util.List<Schedulev2RotationEvent> getEventInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue"></a>

```java
public IResolvable|Schedulev2Rotation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>

---



