# `schedulev2` Submodule <a name="`schedulev2` Submodule" id="@cdktn/provider-pagerduty.schedulev2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schedulev2 <a name="Schedulev2" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2 pagerduty_schedulev2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  time_zone: str,
  description: str = None,
  rotation: IResolvable | typing.List[Schedulev2Rotation] = None,
  teams: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.rotation">rotation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]</code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.teams">teams</a></code> | <code>typing.List[str]</code> | List of team IDs to associate with this schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.name"></a>

- *Type:* str

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#name Schedulev2#name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.description"></a>

- *Type:* str

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#description Schedulev2#description}

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.rotation"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.Initializer.parameter.teams"></a>

- *Type:* typing.List[str]

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#teams Schedulev2#teams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation">put_rotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation">reset_rotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rotation` <a name="put_rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation"></a>

```python
def put_rotation(
  value: IResolvable | typing.List[Schedulev2Rotation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.putRotation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_rotation` <a name="reset_rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetRotation"></a>

```python
def reset_rotation() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.resetTeams"></a>

```python
def reset_teams() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isConstruct"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Schedulev2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Schedulev2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Schedulev2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Schedulev2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput">rotation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotation"></a>

```python
rotation: Schedulev2RotationList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList">Schedulev2RotationList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rotation_input`<sup>Optional</sup> <a name="rotation_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.rotationInput"></a>

```python
rotation_input: IResolvable | typing.List[Schedulev2Rotation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Schedulev2Config <a name="Schedulev2Config" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  time_zone: str,
  description: str = None,
  rotation: IResolvable | typing.List[Schedulev2Rotation] = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name">name</a></code> | <code>str</code> | The name of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the schedule (IANA format, e.g. 'America/New_York'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description">description</a></code> | <code>str</code> | A description of the schedule. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation">rotation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]</code> | rotation block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams">teams</a></code> | <code>typing.List[str]</code> | List of team IDs to associate with this schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#name Schedulev2#name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the schedule (IANA format, e.g. 'America/New_York').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#time_zone Schedulev2#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#description Schedulev2#description}

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.rotation"></a>

```python
rotation: IResolvable | typing.List[Schedulev2Rotation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#rotation Schedulev2#rotation}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Config.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

List of team IDs to associate with this schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#teams Schedulev2#teams}

---

### Schedulev2Rotation <a name="Schedulev2Rotation" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2Rotation(
  event: IResolvable | typing.List[Schedulev2RotationEvent] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event">event</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]</code> | event block. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation.property.event"></a>

```python
event: IResolvable | typing.List[Schedulev2RotationEvent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#event Schedulev2#event}

---

### Schedulev2RotationEvent <a name="Schedulev2RotationEvent" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEvent(
  effective_since: str,
  end_time: str,
  name: str,
  recurrence: typing.List[str],
  start_time: str,
  assignment_strategy: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategy] = None,
  effective_until: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince">effective_since</a></code> | <code>str</code> | When this event configuration starts producing shifts (ISO-8601 UTC). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime">end_time</a></code> | <code>str</code> | The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name">name</a></code> | <code>str</code> | The name of the event. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence">recurrence</a></code> | <code>typing.List[str]</code> | List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime">start_time</a></code> | <code>str</code> | The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00'). |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy">assignment_strategy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]</code> | assignment_strategy block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil">effective_until</a></code> | <code>str</code> | When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite. |

---

##### `effective_since`<sup>Required</sup> <a name="effective_since" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveSince"></a>

```python
effective_since: str
```

- *Type:* str

When this event configuration starts producing shifts (ISO-8601 UTC).

Must be a future time; the API will adjust past times to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#effective_since Schedulev2#effective_since}

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The shift end time with timezone offset (ISO-8601 format, e.g. '2024-01-01T17:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#end_time Schedulev2#end_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#name Schedulev2#name}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.recurrence"></a>

```python
recurrence: typing.List[str]
```

- *Type:* typing.List[str]

List of RRULE strings defining the recurrence pattern (RFC 5545, e.g. 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#recurrence Schedulev2#recurrence}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The shift start time with timezone offset (ISO-8601 format, e.g. '2024-01-01T09:00:00-05:00').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#start_time Schedulev2#start_time}

---

##### `assignment_strategy`<sup>Optional</sup> <a name="assignment_strategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.assignmentStrategy"></a>

```python
assignment_strategy: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]

assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#assignment_strategy Schedulev2#assignment_strategy}

---

##### `effective_until`<sup>Optional</sup> <a name="effective_until" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent.property.effectiveUntil"></a>

```python
effective_until: str
```

- *Type:* str

When this event configuration stops producing shifts (ISO-8601 UTC). Null or omitted means indefinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#effective_until Schedulev2#effective_until}

---

### Schedulev2RotationEventAssignmentStrategy <a name="Schedulev2RotationEventAssignmentStrategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventAssignmentStrategy(
  type: str,
  member: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategyMember] = None,
  shifts_per_member: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type">type</a></code> | <code>str</code> | The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member">member</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]</code> | member block. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember">shifts_per_member</a></code> | <code>typing.Union[int, float]</code> | Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.type"></a>

```python
type: str
```

- *Type:* str

The assignment strategy type. Use 'rotating_member_assignment_strategy' for user-based rotation, or 'every_member_assignment_strategy' for all-hands coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#type Schedulev2#type}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.member"></a>

```python
member: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategyMember]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#member Schedulev2#member}

---

##### `shifts_per_member`<sup>Optional</sup> <a name="shifts_per_member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy.property.shiftsPerMember"></a>

```python
shifts_per_member: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of shifts per member per recurrence cycle. Defaults to 1 for 'rotating_member_assignment_strategy' when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#shifts_per_member Schedulev2#shifts_per_member}

---

### Schedulev2RotationEventAssignmentStrategyMember <a name="Schedulev2RotationEventAssignmentStrategyMember" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventAssignmentStrategyMember(
  type: str,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type">type</a></code> | <code>str</code> | The member type. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId">user_id</a></code> | <code>str</code> | The obfuscated user ID. Required when type is 'user_member'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.type"></a>

```python
type: str
```

- *Type:* str

The member type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#type Schedulev2#type}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember.property.userId"></a>

```python
user_id: str
```

- *Type:* str

The obfuscated user ID. Required when type is 'user_member'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.32.0/docs/resources/schedulev2#user_id Schedulev2#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Schedulev2RotationEventAssignmentStrategyList <a name="Schedulev2RotationEventAssignmentStrategyList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventAssignmentStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Schedulev2RotationEventAssignmentStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]

---


### Schedulev2RotationEventAssignmentStrategyMemberList <a name="Schedulev2RotationEventAssignmentStrategyMemberList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Schedulev2RotationEventAssignmentStrategyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategyMember]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]

---


### Schedulev2RotationEventAssignmentStrategyMemberOutputReference <a name="Schedulev2RotationEventAssignmentStrategyMemberOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_id` <a name="reset_user_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Schedulev2RotationEventAssignmentStrategyMember
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>

---


### Schedulev2RotationEventAssignmentStrategyOutputReference <a name="Schedulev2RotationEventAssignmentStrategyOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember">put_member</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember">reset_member</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember">reset_shifts_per_member</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_member` <a name="put_member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember"></a>

```python
def put_member(
  value: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategyMember]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.putMember.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]

---

##### `reset_member` <a name="reset_member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetMember"></a>

```python
def reset_member() -> None
```

##### `reset_shifts_per_member` <a name="reset_shifts_per_member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.resetShiftsPerMember"></a>

```python
def reset_shifts_per_member() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member">member</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput">member_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput">shifts_per_member_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember">shifts_per_member</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.member"></a>

```python
member: Schedulev2RotationEventAssignmentStrategyMemberList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMemberList">Schedulev2RotationEventAssignmentStrategyMemberList</a>

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.memberInput"></a>

```python
member_input: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategyMember]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyMember">Schedulev2RotationEventAssignmentStrategyMember</a>]

---

##### `shifts_per_member_input`<sup>Optional</sup> <a name="shifts_per_member_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMemberInput"></a>

```python
shifts_per_member_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `shifts_per_member`<sup>Required</sup> <a name="shifts_per_member" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.shiftsPerMember"></a>

```python
shifts_per_member: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Schedulev2RotationEventAssignmentStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>

---


### Schedulev2RotationEventList <a name="Schedulev2RotationEventList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Schedulev2RotationEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Schedulev2RotationEvent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]

---


### Schedulev2RotationEventOutputReference <a name="Schedulev2RotationEventOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationEventOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy">put_assignment_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy">reset_assignment_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil">reset_effective_until</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_assignment_strategy` <a name="put_assignment_strategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy"></a>

```python
def put_assignment_strategy(
  value: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.putAssignmentStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]

---

##### `reset_assignment_strategy` <a name="reset_assignment_strategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetAssignmentStrategy"></a>

```python
def reset_assignment_strategy() -> None
```

##### `reset_effective_until` <a name="reset_effective_until" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.resetEffectiveUntil"></a>

```python
def reset_effective_until() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy">assignment_strategy</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput">assignment_strategy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput">effective_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput">effective_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince">effective_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil">effective_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence">recurrence</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assignment_strategy`<sup>Required</sup> <a name="assignment_strategy" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategy"></a>

```python
assignment_strategy: Schedulev2RotationEventAssignmentStrategyList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategyList">Schedulev2RotationEventAssignmentStrategyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `assignment_strategy_input`<sup>Optional</sup> <a name="assignment_strategy_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.assignmentStrategyInput"></a>

```python
assignment_strategy_input: IResolvable | typing.List[Schedulev2RotationEventAssignmentStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventAssignmentStrategy">Schedulev2RotationEventAssignmentStrategy</a>]

---

##### `effective_since_input`<sup>Optional</sup> <a name="effective_since_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSinceInput"></a>

```python
effective_since_input: str
```

- *Type:* str

---

##### `effective_until_input`<sup>Optional</sup> <a name="effective_until_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntilInput"></a>

```python
effective_until_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `effective_since`<sup>Required</sup> <a name="effective_since" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveSince"></a>

```python
effective_since: str
```

- *Type:* str

---

##### `effective_until`<sup>Required</sup> <a name="effective_until" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.effectiveUntil"></a>

```python
effective_until: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.recurrence"></a>

```python
recurrence: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Schedulev2RotationEvent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>

---


### Schedulev2RotationList <a name="Schedulev2RotationList" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Schedulev2RotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Schedulev2Rotation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>]

---


### Schedulev2RotationOutputReference <a name="Schedulev2RotationOutputReference" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer"></a>

```python
from cdktn_provider_pagerduty import schedulev2

schedulev2.Schedulev2RotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent">put_event</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent">reset_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event` <a name="put_event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent"></a>

```python
def put_event(
  value: IResolvable | typing.List[Schedulev2RotationEvent]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.putEvent.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]

---

##### `reset_event` <a name="reset_event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.resetEvent"></a>

```python
def reset_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event">event</a></code> | <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput">event_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.event"></a>

```python
event: Schedulev2RotationEventList
```

- *Type:* <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEventList">Schedulev2RotationEventList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.eventInput"></a>

```python
event_input: IResolvable | typing.List[Schedulev2RotationEvent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationEvent">Schedulev2RotationEvent</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-pagerduty.schedulev2.Schedulev2RotationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Schedulev2Rotation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-pagerduty.schedulev2.Schedulev2Rotation">Schedulev2Rotation</a>

---



