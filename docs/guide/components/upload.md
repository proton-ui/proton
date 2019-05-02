---
title: Upload
---

# Upload
Upload one or more files.

## Examples
<proton-example>

<template slot="code">

```html
<p-upload
    name="avatar"
    label="Avatar"
    help="Upload an avatar"
    v-model="avatar"
    accept="jpeg,jpg,png,gif"
></p-upload>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `name` | `String` | The name and ID of the field. | | |
| `label` | `String` | Label to be associated with and displayed above the input field. | | |
| `help` | `String` | Help text to be displayed below the input field. | | |
| `required` | `Boolean` | If the input field type is required or not. | true, false | false |
| `multiple` | `Boolean` | If multiple files can be uploaded or not. | true, false | false |
| `accept` | `String` | The types of files accepted for upload. | | |
| `error-message` | `String` | The message to be displayed when the input field has an error. | | |