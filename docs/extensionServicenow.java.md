# `extensionServicenow` Submodule <a name="`extensionServicenow` Submodule" id="@cdktn/provider-pagerduty.extensionServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtensionServicenow <a name="ExtensionServicenow" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow pagerduty_extension_servicenow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.extension_servicenow.ExtensionServicenow;

ExtensionServicenow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .extensionObjects(java.util.List<java.lang.String>)
    .extensionSchema(java.lang.String)
    .referer(java.lang.String)
    .snowPassword(java.lang.String)
    .snowUser(java.lang.String)
    .syncOptions(java.lang.String)
    .target(java.lang.String)
    .taskType(java.lang.String)
//  .endpointUrl(java.lang.String)
//  .name(java.lang.String)
//  .summary(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionObjects">extensionObjects</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionSchema">extensionSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.referer">referer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowPassword">snowPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowUser">snowUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.syncOptions">syncOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#target ExtensionServicenow#target}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#name ExtensionServicenow#name}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.summary">summary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#type ExtensionServicenow#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionObjects"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}.

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.extensionSchema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}.

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.referer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}.

---

##### `snowPassword`<sup>Required</sup> <a name="snowPassword" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}.

---

##### `snowUser`<sup>Required</sup> <a name="snowUser" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.snowUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}.

---

##### `syncOptions`<sup>Required</sup> <a name="syncOptions" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.syncOptions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#target ExtensionServicenow#target}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.taskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}.

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.endpointUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#name ExtensionServicenow#name}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.summary"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#type ExtensionServicenow#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl"></a>

```java
public void resetEndpointUrl()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName"></a>

```java
public void resetName()
```

##### `resetSummary` <a name="resetSummary" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary"></a>

```java
public void resetSummary()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ExtensionServicenow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct"></a>

```java
import io.cdktn.providers.pagerduty.extension_servicenow.ExtensionServicenow;

ExtensionServicenow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement"></a>

```java
import io.cdktn.providers.pagerduty.extension_servicenow.ExtensionServicenow;

ExtensionServicenow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource"></a>

```java
import io.cdktn.providers.pagerduty.extension_servicenow.ExtensionServicenow;

ExtensionServicenow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport"></a>

```java
import io.cdktn.providers.pagerduty.extension_servicenow.ExtensionServicenow;

ExtensionServicenow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExtensionServicenow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ExtensionServicenow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExtensionServicenow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExtensionServicenow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ExtensionServicenow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput">endpointUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput">extensionObjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput">extensionSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput">refererInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput">snowPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput">snowUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput">syncOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects">extensionObjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema">extensionSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer">referer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword">snowPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser">snowUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions">syncOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput"></a>

```java
public java.lang.String getEndpointUrlInput();
```

- *Type:* java.lang.String

---

##### `extensionObjectsInput`<sup>Optional</sup> <a name="extensionObjectsInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput"></a>

```java
public java.util.List<java.lang.String> getExtensionObjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `extensionSchemaInput`<sup>Optional</sup> <a name="extensionSchemaInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput"></a>

```java
public java.lang.String getExtensionSchemaInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `refererInput`<sup>Optional</sup> <a name="refererInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput"></a>

```java
public java.lang.String getRefererInput();
```

- *Type:* java.lang.String

---

##### `snowPasswordInput`<sup>Optional</sup> <a name="snowPasswordInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput"></a>

```java
public java.lang.String getSnowPasswordInput();
```

- *Type:* java.lang.String

---

##### `snowUserInput`<sup>Optional</sup> <a name="snowUserInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput"></a>

```java
public java.lang.String getSnowUserInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `syncOptionsInput`<sup>Optional</sup> <a name="syncOptionsInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput"></a>

```java
public java.lang.String getSyncOptionsInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects"></a>

```java
public java.util.List<java.lang.String> getExtensionObjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema"></a>

```java
public java.lang.String getExtensionSchema();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer"></a>

```java
public java.lang.String getReferer();
```

- *Type:* java.lang.String

---

##### `snowPassword`<sup>Required</sup> <a name="snowPassword" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword"></a>

```java
public java.lang.String getSnowPassword();
```

- *Type:* java.lang.String

---

##### `snowUser`<sup>Required</sup> <a name="snowUser" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser"></a>

```java
public java.lang.String getSnowUser();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `syncOptions`<sup>Required</sup> <a name="syncOptions" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions"></a>

```java
public java.lang.String getSyncOptions();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExtensionServicenowConfig <a name="ExtensionServicenowConfig" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.Initializer"></a>

```java
import io.cdktn.providers.pagerduty.extension_servicenow.ExtensionServicenowConfig;

ExtensionServicenowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .extensionObjects(java.util.List<java.lang.String>)
    .extensionSchema(java.lang.String)
    .referer(java.lang.String)
    .snowPassword(java.lang.String)
    .snowUser(java.lang.String)
    .syncOptions(java.lang.String)
    .target(java.lang.String)
    .taskType(java.lang.String)
//  .endpointUrl(java.lang.String)
//  .name(java.lang.String)
//  .summary(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects">extensionObjects</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema">extensionSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer">referer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword">snowPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser">snowUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions">syncOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#target ExtensionServicenow#target}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#name ExtensionServicenow#name}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary">summary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}. |
| <code><a href="#@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#type ExtensionServicenow#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `extensionObjects`<sup>Required</sup> <a name="extensionObjects" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects"></a>

```java
public java.util.List<java.lang.String> getExtensionObjects();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}.

---

##### `extensionSchema`<sup>Required</sup> <a name="extensionSchema" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema"></a>

```java
public java.lang.String getExtensionSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}.

---

##### `referer`<sup>Required</sup> <a name="referer" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer"></a>

```java
public java.lang.String getReferer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}.

---

##### `snowPassword`<sup>Required</sup> <a name="snowPassword" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword"></a>

```java
public java.lang.String getSnowPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}.

---

##### `snowUser`<sup>Required</sup> <a name="snowUser" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser"></a>

```java
public java.lang.String getSnowUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}.

---

##### `syncOptions`<sup>Required</sup> <a name="syncOptions" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions"></a>

```java
public java.lang.String getSyncOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#target ExtensionServicenow#target}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}.

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#name ExtensionServicenow#name}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.4/docs/resources/extension_servicenow#type ExtensionServicenow#type}.

---



