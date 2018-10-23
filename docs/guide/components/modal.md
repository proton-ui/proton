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
<p-button v-modal:example>Open Modal<p-button>

<p-modal name="example" extra-large>
    Hello World!
</p-modal>
```

## Passing Data
You may optionally pass data along to the modal by assigning the directive with a value. The passed data will be available in each of the modal slots.

::: tip NOTE
The passed value will be parsed as an expression allowing you to easily pass objects and arrays of data through. If you wish to only pass a string through, you'll want to wrap your string in single-quotes.
:::

```js
let data = {
    foo: 'bar'
}
```

```html
<p-button v-modal:example="data">Open Modal<p-button>

<p-modal name="example">
    <template scope-slot="modal">
        {{ modal.data.foo }}
    </template>
</p-modal>
```

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | The identifying name of the modal. | | |
| `title` | `String` | An optional title to be displayed in the header of the modal. | | |
| `show` | `Boolean` | Set the initial visibility state of the modal. | true, false | false |
| `large` | `Boolean` | If the modal should be large in size. | true, false | false |
| `extra-large` | `Boolean` | If the modal should be extra large in size. | true, false | false |
| `no-header` | `Boolean` | Disable the modal header section completely. | true, false | false |
| `no-footer` | `Boolean` | Disable the modal footer section completely. | true, false | false |
| `no-close-button` | `Boolean` | Disable the close button in the header of the modal. | true, false | false |
| `no-esc-close` | `Boolean` | Disable the ability to dismiss the modal with the `esc` key. | true, false | false |
| `no-outside-close` | `Boolean` | Disable the ability to dismiss the modal by clicking outside of it. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Main body of the modal. |
| `header` | Header section of the modal. |
| `footer` | Footer section of the modal. |