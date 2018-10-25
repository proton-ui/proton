---
title: Radio
---

# Radio

## Default
To create a basic radio component, you must specify the `name`, `id`, and `value` properties.

```html
<p-radio name="option" id="option_a" value="option_a">Option A</p-radio>
<p-radio name="option" id="option_b" value="option_b">Option B</p-radio>
<p-radio name="option" id="option_c" value="option_c">Option C</p-radio>
```

## Checked State
To bind the checked state, you may either manually define `checked` or supply a `v-model` property.

:::tip NOTE
In this instance, the `value` prop does not translate to a `v-model` binding. The `v-model` instance is instead tied to a `model` prop to free up the use of the `value` prop for the actual value of the radio element.
:::

### Using `v-model`
```html
<p-radio name="option" id="option_a" value="option_a" v-model="option">Option A</p-radio>
<p-radio name="option" id="option_b" value="option_b" v-model="option">Option B</p-radio>
<p-radio name="option" id="option_c" value="option_c" v-model="option">Option C</p-radio>
```

### Manually
```html
<p-radio name="option" id="option_a" value="option_a" checked>Option A</p-radio>
<p-radio name="option" id="option_b" value="option_b">Option B</p-radio>
<p-radio name="option" id="option_c" value="option_c">Option C</p-radio>
```

## Grouping
In most cases, radio buttons will want to be grouped together. You may wrap a set of radio components within a radio group, allowing you to define a label, help text, and error messaging.

```html
<p-radio-group label="Select an option" help="Choose an option for your item.">
    <p-radio name="option" id="option_a" value="option_a" v-model="option">Option A</p-radio>
    <p-radio name="option" id="option_b" value="option_b" v-model="option">Option B</p-radio>
    <p-radio name="option" id="option_c" value="option_c" v-model="option">Option C</p-radio>
</p-radio-group>
```

### Inline Radios
You may make your radio group become inline by specifying the `inline` prop.

```html
<p-radio-group label="Select an option" help="Choose an option for your item." inline>
    ...
</p-radio-group>
```

## Props

### Radio
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `name` | `String` | The name of the radio. | | |
| `id` | `String` | The unique ID of the radio. | | |
| `value` | `String` | The value associated with the radio. | | |
| `checked` | `Boolean` | If the radio should be checked or not. | true, false | false |
| `readonly` | `Boolean` | If the radio should be read-only or not. | true, false | false |
| `disabled` | `Boolean` | If the radio should be disabled or not. | true, false | false |

### Radio Group
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `help` | `String` | Help text to be displayed below the radio items. | | |
| `required` | `Boolean` | If the radio group is required or not. | true, false | false |
| `has-error` | `Boolean` | Toggle if the radio group has validation errors or not. | true, false | false |
| `error-message` | `String` | The message to be displayed when the radio group has an error. | | |