---
title: Dropdown Item
---

# Dropdown Item

## Default
Used in combination with the [`dropdown`](/guide/components/dropdown) component.

```html
<p-dropdown-item>Item A</p-dropdown-item>
```

## Use As Link
To convert the dropdown item to an anchor, simply provide an `href` property value.

```html
<p-dropdown-item href="/edit">Edit</p-dropdown-item>
```

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `href` | `String` | Convert the dropdown item to an anchor by supplying a URL or URL fragment that the hyperlink points to. | | |

## Slots
| Name | Description |
|------|-------------|
| `default` | Content of the dropdown item. |