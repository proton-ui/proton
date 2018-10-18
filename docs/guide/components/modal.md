---
title: Modal
---

# Modal
### Add dialogs, notifications, or other helpful content through with modals

---

## Default
The default modal includes a close button in both the header and footer sections.

```html
<p-modal name="example">
    Hello World!
</p-modal>
```

## Title
Define a title for your modal with the `title` prop.

```html
<p-modal name="example" title="Greetings">
    Hello World!
</p-modal>
```

## Sizes
Modals have a few sizing options, each togglable through the use of a couple props. By default, modals are "medium" sized with the options to be `large` or `extra-large`. These control the max width of your modal on non-mobile devices.

### Large
```html
<p-modal name="example" large>
    Hello World!
</p-modal>
```

### Extra Large
```html
<p-modal name="example" extra-large>
    Hello World!
</p-modal>
```

## Visibility
To toggle the visibility of a modal instance, we recommend using the `v-modal` directive while referencing your modal's `name` property. The `v-modal` directive can be used on any clickable entity.

```html
<p-button v-modal="example">Open Modal<p-button>
```

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | The identifying name of the modal. | | |
| `title` | `String` | An optional title to be displayed in the header of the modal. | | |
| `show` | `Boolean` | Set the initial visibility state of the modal. | true, false | false |
| `large` | `Boolean` | If the modal should be large in size. | true, false | false |
| `extra-large` | `Boolean` | If the modal should be extra large in size. | true, false | false |
| `no-close-button` | `Boolean` | Disable the close button in the header of the modal. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Main body of the modal. |
| `header` | Header section of the modal. |
| `footer` | Footer section of the modal. |