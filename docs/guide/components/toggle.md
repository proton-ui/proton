---
title: Toggle
---

# Toggle

## Examples
<proton-example>
<p-toggle name="sign_up_newsletter"></p-toggle>

<template slot="code">

```html
<p-toggle name="sign_up_newsletter"></p-toggle>
```

</template>
</proton-example>

## Label
Add a label to the toggle input with the `label` property.

<proton-example>
<p-toggle name="sign_up_newsletter" label="Sign up for newsletter"></p-toggle>

<template slot="code">

```html
<p-toggle name="sign_up_newsletter" label="Sign up for newsletter"></p-toggle>
```

</template>
</proton-example>

## Help
Add help text below the toggle with the `help` property.

<proton-example>
<p-toggle name="sign_up_newsletter" help="Yes, I'd like to sign up for your awesome newsletter!"></p-toggle>

<template slot="code">

```html
<p-toggle name="sign_up_newsletter" help="Yes, I'd like to sign up for your awesome newsletter!"></p-toggle>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `checked` | `Boolean` | If the toggle field should be checked or not. | true, false | false |
| `name` | `String` | The name and ID of the toggle. | | |
| `label` | `String` | Label to be associated with and displayed above the toggle field. | | |
| `help` | `String` | Help text to be displayed below the toggle field. | | |
| `required` | `Boolean` | If the toggle field is required or not. | true, false | false |
| `readonly` | `Boolean` | If the toggle field should be read-only or not. | true, false | false |
| `disabled` | `Boolean` | If the toggle field should be disabled or not. | true, false | false |