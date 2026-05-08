# `eventOrchestrationGlobalCacheVariable` Submodule <a name="`eventOrchestrationGlobalCacheVariable` Submodule" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationGlobalCacheVariable <a name="EventOrchestrationGlobalCacheVariable" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariable;

EventOrchestrationGlobalCacheVariable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(EventOrchestrationGlobalCacheVariableConfiguration)
    .eventOrchestration(java.lang.String)
    .name(java.lang.String)
//  .condition(IResolvable|java.util.List<EventOrchestrationGlobalCacheVariableCondition>)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.eventOrchestration">eventOrchestration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#configuration EventOrchestrationGlobalCacheVariable#configuration}

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.eventOrchestration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.condition"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#condition EventOrchestrationGlobalCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putCondition"></a>

```java
public void putCondition(IResolvable|java.util.List<EventOrchestrationGlobalCacheVariableCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putCondition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>>

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration"></a>

```java
public void putConfiguration(EventOrchestrationGlobalCacheVariableConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetDisabled"></a>

```java
public void resetDisabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventOrchestrationGlobalCacheVariable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isConstruct"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariable;

EventOrchestrationGlobalCacheVariable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformElement"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariable;

EventOrchestrationGlobalCacheVariable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformResource"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariable;

EventOrchestrationGlobalCacheVariable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariable;

EventOrchestrationGlobalCacheVariable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventOrchestrationGlobalCacheVariable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EventOrchestrationGlobalCacheVariable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventOrchestrationGlobalCacheVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventOrchestrationGlobalCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EventOrchestrationGlobalCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList">EventOrchestrationGlobalCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference">EventOrchestrationGlobalCacheVariableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput">eventOrchestrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestration">eventOrchestration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.condition"></a>

```java
public EventOrchestrationGlobalCacheVariableConditionList getCondition();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList">EventOrchestrationGlobalCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configuration"></a>

```java
public EventOrchestrationGlobalCacheVariableConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference">EventOrchestrationGlobalCacheVariableConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.conditionInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCacheVariableCondition> getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configurationInput"></a>

```java
public EventOrchestrationGlobalCacheVariableConfiguration getConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventOrchestrationInput`<sup>Optional</sup> <a name="eventOrchestrationInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput"></a>

```java
public java.lang.String getEventOrchestrationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestration"></a>

```java
public java.lang.String getEventOrchestration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationGlobalCacheVariableCondition <a name="EventOrchestrationGlobalCacheVariableCondition" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariableCondition;

EventOrchestrationGlobalCacheVariableCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#expression EventOrchestrationGlobalCacheVariable#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#expression EventOrchestrationGlobalCacheVariable#expression}.

---

### EventOrchestrationGlobalCacheVariableConfig <a name="EventOrchestrationGlobalCacheVariableConfig" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariableConfig;

EventOrchestrationGlobalCacheVariableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(EventOrchestrationGlobalCacheVariableConfiguration)
    .eventOrchestration(java.lang.String)
    .name(java.lang.String)
//  .condition(IResolvable|java.util.List<EventOrchestrationGlobalCacheVariableCondition>)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration">eventOrchestration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.configuration"></a>

```java
public EventOrchestrationGlobalCacheVariableConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#configuration EventOrchestrationGlobalCacheVariable#configuration}

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration"></a>

```java
public java.lang.String getEventOrchestration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.condition"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCacheVariableCondition> getCondition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#condition EventOrchestrationGlobalCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}.

---

### EventOrchestrationGlobalCacheVariableConfiguration <a name="EventOrchestrationGlobalCacheVariableConfiguration" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariableConfiguration;

EventOrchestrationGlobalCacheVariableConfiguration.builder()
    .type(java.lang.String)
//  .dataType(java.lang.String)
//  .regex(java.lang.String)
//  .source(java.lang.String)
//  .ttlSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#data_type EventOrchestrationGlobalCacheVariable#data_type}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.ttlSeconds">ttlSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#data_type EventOrchestrationGlobalCacheVariable#data_type}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}.

---

##### `ttlSeconds`<sup>Optional</sup> <a name="ttlSeconds" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.ttlSeconds"></a>

```java
public java.lang.Number getTtlSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationGlobalCacheVariableConditionList <a name="EventOrchestrationGlobalCacheVariableConditionList" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariableConditionList;

new EventOrchestrationGlobalCacheVariableConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.get"></a>

```java
public EventOrchestrationGlobalCacheVariableConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCacheVariableCondition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>>

---


### EventOrchestrationGlobalCacheVariableConditionOutputReference <a name="EventOrchestrationGlobalCacheVariableConditionOutputReference" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariableConditionOutputReference;

new EventOrchestrationGlobalCacheVariableConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalCacheVariableCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>

---


### EventOrchestrationGlobalCacheVariableConfigurationOutputReference <a name="EventOrchestrationGlobalCacheVariableConfigurationOutputReference" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.event_orchestration_global_cache_variable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference;

new EventOrchestrationGlobalCacheVariableConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetTtlSeconds">resetTtlSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTtlSeconds` <a name="resetTtlSeconds" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetTtlSeconds"></a>

```java
public void resetTtlSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSecondsInput">ttlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds">ttlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `ttlSecondsInput`<sup>Optional</sup> <a name="ttlSecondsInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSecondsInput"></a>

```java
public java.lang.Number getTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `ttlSeconds`<sup>Required</sup> <a name="ttlSeconds" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```java
public java.lang.Number getTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue"></a>

```java
public EventOrchestrationGlobalCacheVariableConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

---



