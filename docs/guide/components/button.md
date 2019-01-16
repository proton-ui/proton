---
title: Button
---

# Button

## Examples

<proton-example>
<p-button>Default</p-button>
<p-button theme="primary">Primary</p-button>
<p-button theme="secondary">Secondary</p-button>
<p-button theme="success">Success</p-button>
<p-button theme="danger">Danger</p-button>
<p-button theme="warning">Warning</p-button>
<p-button theme="info">Info</p-button>

<template slot="code">

```html
<p-button>Default</p-button>
<p-button theme="primary">Primary</p-button>
<p-button theme="secondary">Secondary</p-button>
<p-button theme="success">Success</p-button>
<p-button theme="danger">Danger</p-button>
<p-button theme="warning">Warning</p-button>
<p-button theme="info">Info</p-button>
```

</template>
</proton-example>

## Size
Define the size of the button with the `size` property.

<proton-example>
<p-button size="large">Large Button</p-button>
<p-button size="large" theme="secondary">Large Button</p-button>

<template slot="code">

```html
<p-button size="large">Large Button</p-button>
<p-button size="large" theme="secondary">Large Button</p-button>
```

</template>
</proton-example>

<proton-example>
<p-button size="small">Small Button</p-button>
<p-button size="small" theme="secondary">Small Button</p-button>

<template slot="code">

```html
<p-button size="small">Small Button</p-button>
<p-button size="small" theme="secondary">Small Button</p-button>
```

</template>
</proton-example>

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