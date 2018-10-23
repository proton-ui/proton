---
title: Dropdown
---

# Dropdown

## Default
A dropdown is made up of two components. The outer-wrapping `dropdown` and the inner [`dropdown-item`](/guide/components/dropdown-item).

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

## Right Aligned
Make the dropdown menu right-aligned with the `right` property.

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

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `right` | `Boolean` | Whether the dropdown menu should be aligned to the right edge or not. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Content of the dropdown button. |
| `options` | Content of the dropdown options menu. |