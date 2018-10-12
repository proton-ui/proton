---
title: Input
---

# Input

## Default
```html
<p-input name="full_name"></p-input>
```

## Label
Add a label to the input with the `label` property.

```html
<p-input name="full_name" label="Full Name"></p-input>
```

## Placeholder
Add a placeholder to the input with the `placeholder` property.

```html
<p-input name="full_name" placeholder="Full Name"></p-input>
```

## Help
Add help text below the input with the `help` property.

```html
<p-input name="full_name" help="Please put in your full name."></p-input>
```

## API
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `name` | `String` | The name and ID of the field. | | |
| `placeholder` | `String` | Placeholder value to be displayed inside the input field. | | |
| `label` | `String` | Label to be associated with and displayed above the input field. | | |
| `help` | `String` | Help text to be displayed below the input field. | | |
| `type` | `String` | The input field type. | text, email, password, url | text |
| `required` | `Boolean` | If the input field type is required or not. | true, false | false |
| `readonly` | `Boolean` | If the input field should be read-only or not. | true, false | false |
| `disabled` | `Boolean` | If the input field should be disabled or not. | true, false | false |
| `monospaced` | `Boolean` | If the font used in the input field should be monospaced or not. | true, false | false |