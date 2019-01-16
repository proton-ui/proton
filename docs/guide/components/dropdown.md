---
title: Dropdown
---

# Dropdown

## Default
A dropdown is made up of two components. The outer-wrapping `dropdown` and the inner [`dropdown-item`](/guide/components/dropdown-item).

<proton-example>
<ClientOnly>
<p-dropdown>Click me!
<template slot="options">
<p-dropdown-item>Item A</p-dropdown-item>
<p-dropdown-item>Item B</p-dropdown-item>
<p-dropdown-item>Item C</p-dropdown-item>
</template>
</p-dropdown>
</ClientOnly>

<template slot="code">

```html
<p-dropdown>
    Click me!

    <template slot="options">
        <p-dropdown-item>Item A</p-dropdown-item>
        <p-dropdown-item>Item B</p-dropdown-item>
        <p-dropdown-item>Item C</p-dropdown-item>
    </template>
</p-dropdown>
```

</template>
</proton-example>

## Right Aligned
Make the dropdown menu right-aligned with the `right` property.

<proton-example>
<ClientOnly>
<p-dropdown right>Click me!
<template slot="options">
<p-dropdown-item>Item A</p-dropdown-item>
<p-dropdown-item>Item B</p-dropdown-item>
<p-dropdown-item>Item C</p-dropdown-item>
</template>
</p-dropdown>
</ClientOnly>

<template slot="code">

```html
<p-dropdown right>
    Click me!

    <template slot="options">
        <p-dropdown-item>Item A</p-dropdown-item>
        <p-dropdown-item>Item B</p-dropdown-item>
        <p-dropdown-item>Item C</p-dropdown-item>
    </template>
</p-dropdown>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `right` | `Boolean` | Whether the dropdown menu should be aligned to the right edge or not. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Content of the dropdown button. |
| `options` | Content of the dropdown options menu. |