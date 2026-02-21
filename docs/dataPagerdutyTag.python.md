# `dataPagerdutyTag` Submodule <a name="`dataPagerdutyTag` Submodule" id="@cdktn/provider-pagerduty.dataPagerdutyTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyTag <a name="DataPagerdutyTag" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/tag pagerduty_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer"></a>

```python
from cdktn_provider_pagerduty import data_pagerduty_tag

dataPagerdutyTag.DataPagerdutyTag(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  label: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.label">label</a></code> | <code>str</code> | The label of the tag to find in the PagerDuty API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.Initializer.parameter.label"></a>

- *Type:* str

The label of the tag to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/tag#label DataPagerdutyTag#label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataPagerdutyTag resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isConstruct"></a>

```python
from cdktn_provider_pagerduty import data_pagerduty_tag

dataPagerdutyTag.DataPagerdutyTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isTerraformElement"></a>

```python
from cdktn_provider_pagerduty import data_pagerduty_tag

dataPagerdutyTag.DataPagerdutyTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isTerraformDataSource"></a>

```python
from cdktn_provider_pagerduty import data_pagerduty_tag

dataPagerdutyTag.DataPagerdutyTag.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.generateConfigForImport"></a>

```python
from cdktn_provider_pagerduty import data_pagerduty_tag

dataPagerdutyTag.DataPagerdutyTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataPagerdutyTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataPagerdutyTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.label">label</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.label"></a>

```python
label: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyTagConfig <a name="DataPagerdutyTagConfig" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.Initializer"></a>

```python
from cdktn_provider_pagerduty import data_pagerduty_tag

dataPagerdutyTag.DataPagerdutyTagConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  label: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.label">label</a></code> | <code>str</code> | The label of the tag to find in the PagerDuty API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-pagerduty.dataPagerdutyTag.DataPagerdutyTagConfig.property.label"></a>

```python
label: str
```

- *Type:* str

The label of the tag to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.31.0/docs/data-sources/tag#label DataPagerdutyTag#label}

---



