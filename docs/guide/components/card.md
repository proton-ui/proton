---
title: Card
---

# Card

## Default
```html
<p-card>
    Hello World!
</p-card>
```

## Theme
Define the theme of the card with the `theme` property.

```html
<p-card theme="dark">
    Hello darkness, my old friend
</p-card>
```

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `theme` | `String` | Define the theme of the card. | default, dark | default |
| `no-body` | `Boolean` | Disable padding inside card body. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Main body of the card. |