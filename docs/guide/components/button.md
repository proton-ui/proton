---
title: Button
---

# Button

## Default
```html
<p-button>Click Me</p-button>
```

## Size
Define the size of the button with the `size` property.

```html
<p-button size="large">Save</p-button>
```

## Theme
Define the theme of the button with the `theme` property.

```html
<p-button theme="primary">Save</p-button>
```

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `size` | `String` | Define the size of the button. | normal, small, large | normal |
| `theme` | `String` | Define the theme of the button. | default, primary, secondary, info, success, warning, danger, dark | default |
| `disabled` | `Boolean` | If the button should be disabled or not. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Main text of the button. |