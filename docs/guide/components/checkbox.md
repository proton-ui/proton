---
title: Checkbox
---

# Checkbox

## Default
To create a basic checkbox component, you must specify the `name`, `id`, and `value` properties.

```html
<p-checkbox name="option" id="option_a" value="option_a">Option A</p-checkbox>
<p-checkbox name="option" id="option_b" value="option_b">Option B</p-checkbox>
<p-checkbox name="option" id="option_c" value="option_c">Option C</p-checkbox>
```

## Checked State
To bind the checked state, you may either manually define `checked` or supply a `v-model` property.

:::tip NOTE
In this instance, the `value` prop does not translate to a `v-model` binding. The `v-model` instance is instead tied to a `model` prop to free up the use of the `value` prop for the actual value of the checkbox element.
:::

### Using `v-model`
```html
<p-checkbox name="option" id="option_a" value="option_a" v-model="option">Option A</p-checkbox>
<p-checkbox name="option" id="option_b" value="option_b" v-model="option">Option B</p-checkbox>
<p-checkbox name="option" id="option_c" value="option_c" v-model="option">Option C</p-checkbox>
```

### Manually
```html
<p-checkbox name="option" id="option_a" value="option_a" checked>Option A</p-checkbox>
<p-checkbox name="option" id="option_b" value="option_b">Option B</p-checkbox>
<p-checkbox name="option" id="option_c" value="option_c">Option C</p-checkbox>
```

## Grouping
In most cases, checkboxes will be grouped together. You may wrap a set of checkbox components within a checkbox group, allowing you to define a label, help text, and error messaging.

```html
<p-checkbox-group label="Select your options" help="Choose one or more options for your item.">
    <p-checkbox name="option" id="option_a" value="option_a" v-model="option">Option A</p-checkbox>
    <p-checkbox name="option" id="option_b" value="option_b" v-model="option">Option B</p-checkbox>
    <p-checkbox name="option" id="option_c" value="option_c" v-model="option">Option C</p-checkbox>
</p-checkbox-group>
```

### Inline Checkboxes
You may make your checkbox group become inline by specifying the `inline` prop.

```html
<p-checkbox-group label="Select your options" help="Choose one or more options for your item." inline>
    ...
</p-checkbox-group>
```

## Props

### Checkbox
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `name` | `String` | The name of the checkbox. | | |
| `id` | `String` | The unique ID of the checkbox. | | |
| `value` | `String` | The value associated with the checkbox. | | |
| `checked` | `Boolean` | If the checkbox should be checked or not. | true, false | false |
| `readonly` | `Boolean` | If the checkbox should be read-only or not. | true, false | false |
| `disabled` | `Boolean` | If the checkbox should be disabled or not. | true, false | false |

### Checkbox Group
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `help` | `String` | Help text to be displayed below the checkbox items. | | |
| `required` | `Boolean` | If the checkbox group is required or not. | true, false | false |
| `has-error` | `Boolean` | Toggle if the checkbox group has validation errors or not. | true, false | false |
| `error-message` | `String` | The message to be displayed when the checkbox group has an error. | | |