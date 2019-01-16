---
title: Select
---

# Select

## Examples
<proton-example>
<p-select name="color" :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']"></p-select>

<template slot="code">

```html
<p-select name="color" v-model="color" :options="[
    'Red',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Black',
    'White'
]">
</p-select>
```

</template>
</proton-example>

## Label
Add a label to the select with the `label` property.

<proton-example>
<p-select name="color" label="Choose a color" :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']"></p-select>

<template slot="code">

```html
<p-select name="color" label="Choose a color" v-model="color" :options="colors"></p-select>
```

</template>
</proton-example>

## Placeholder
Customize the placeholder for the select with the `placeholder` property.

<proton-example>
<p-select name="color" placeholder="Please choose a color..." :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']"></p-select>

<template slot="code">

```html
<p-select name="color" placeholder="Please choose a color..." v-model="color" :options="colors"></p-select>
```

</template>
</proton-example>

## Help
Add help text below the select with the `help` property.

<proton-example>
<p-select name="color" help="We will use this color to customize your experience." :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']"></p-select>

<template slot="code">

```html
<p-select name="color" help="We will use this color to customize your experience." v-model="color" :options="colors"></p-select>
```

</template>
</proton-example>

## Validation Errors and Messaging
Add a validation message that can be toggled with the `error-message` and `has-error` properties.

<proton-example>
<p-select name="color" error-message="We need to know what color you prefer." :has-error="true" :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']"></p-select>

<template slot="code">

```html
<p-select name="color" error-message="We need to know what color you prefer." :has-error="true" v-model="color" :options="colors"></p-select>
```

</template>
</proton-example>

## Filtering
Enable the ability to filter down available options by passing the `filterable` prop.

<proton-example>
<p-select name="color" :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']" filterable></p-select>

<template slot="code">

```html
<p-select name="color" v-model="color" filterable :options="colors"></p-select>
```

</template>
</proton-example>

## Dark Mode
Enable the dark variation of the select's dropdown menu by passing the `dark` prop.

<proton-example>
<p-select name="color" :options="['Red', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']" dark></p-select>

<template slot="code">

```html
<p-select name="color" v-model="color" dark :options="colors"></p-select>
```

</template>
</proton-example>

## Option Value and Labels
Pass specific labels and values for options through an array of objects as the `options` prop. Otherwise, if your values and labels are the same, you are free to pass through a simple array of options.

<proton-example>
<p-select name="color" :options="[ { 'label': 'Red', 'value': '#FF0000', }, { 'label': 'Yellow', 'value': '#FFFF00', }, { 'label': 'Green', 'value': '#008000', }, { 'label': 'Blue', 'value': '#0000FF', }, { 'label': 'Purple', 'value': '#800080', }, { 'label': 'Black', 'value': '#000000', }, { 'label': 'White', 'value': '#FFFFFF', }, ]"></p-select>

<template slot="code">

```html
<p-select name="color" v-model="color" :options="[
    {
        'label': 'Red',
        'value': '#FF0000',
    },
    {
        'label': 'Yellow',
        'value': '#FFFF00',
    },
    {
        'label': 'Green',
        'value': '#008000',
    },
    {
        'label': 'Blue',
        'value': '#0000FF',
    },
    {
        'label': 'Purple',
        'value': '#800080',
    },
    {
        'label': 'Black',
        'value': '#000000',
    },
    {
        'label': 'White',
        'value': '#FFFFFF',
    },
]">
</p-select>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `name` | `String` | The name and ID of the field. | | |
| `placeholder` | `String` | Placeholder value to be displayed inside the select field. | | |
| `label` | `String` | Label to be associated with and displayed above the select field. | | |
| `help` | `String` | Help text to be displayed below the select field. | | |
| `required` | `Boolean` | If the select field type is required or not. | true, false | false |
| `disabled` | `Boolean` | If the select field should be disabled or not. | true, false | false |
| `options` | `Array` | The options available within the select field. | | |
| `filterable` | `Boolean` | Enable the ability to filter down available options. | true, false | false |
| `filter-function` | `Function` | Customize the filter function. | | |
| `dark` | `Boolean` | Enable the dark appearance of the dropdown menu. | true, false | false |
| `has-error` | `Boolean` | Toggle if the select field has validation errors or not. | true, false | false |
| `error-message` | `String` | The message to be displayed when the select field has an error. | | |