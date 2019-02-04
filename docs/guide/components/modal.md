---
title: Modal
---

# Modal
### Add dialogs, notifications, or other helpful content through with modals

---

## Examples
The default modal includes a close button in both the header and footer sections.

<proton-example>
<ClientOnly>
<p-button v-modal:example-1>Launch Modal</p-button>

<p-modal name="example-1">Hello World!</p-modal>
</ClientOnly>

<template slot="code">

```html
<p-button v-modal:example-1>Launch Modal</p-input>

<p-modal name="example-1">
    Hello World!
</p-modal>
```

</template>
</proton-example>

## Title
Define a title for your modal with the `title` prop.

<proton-example>
<ClientOnly>
<p-button v-modal:example-2>Launch Modal</p-button>

<p-modal name="example-2" title="Greetings">Hello World!</p-modal>
</ClientOnly>

<template slot="code">

```html
<p-button v-modal:example-2>Launch Modal</p-input>

<p-modal name="example-2" title="Greetings">
    Hello World!
</p-modal>
```

</template>
</proton-example>

## Sizes
Modals have a few sizing options, each togglable through the use of a couple props. By default, modals are "medium" sized with the options to be `large` or `extra-large`. These control the max width of your modal on non-mobile devices.

### Large
<proton-example>
<ClientOnly>
<p-button v-modal:example-3>Launch Large Modal</p-button>

<p-modal name="example-3" title="Large" large>Hello World!</p-modal>
</ClientOnly>

<template slot="code">

```html
<p-button v-modal:example-3>Launch Large Modal</p-input>

<p-modal name="example-3" title="Large" large>
    Hello World!
</p-modal>
```

</template>
</proton-example>

### Extra Large
<proton-example>
<ClientOnly>
<p-button v-modal:example-4>Launch Extra Large Modal</p-button>

<p-modal name="example-4" title="Extra Large" extra-large>Hello World!</p-modal>
</ClientOnly>

<template slot="code">

```html
<p-button v-modal:example-4>Launch Extra Large Modal</p-input>

<p-modal name="example-4" title="Extra Large" extra-large>
    Hello World!
</p-modal>
```

</template>
</proton-example>

## Visibility
### Toggle Event
To toggle the visibility of a modal instance, we recommend using the `v-modal` directive while referencing your modal's `name` property. The `v-modal` directive can be used on any clickable entity.

```html
<a href="#" v-modal:example>Open Modal</a>
```

### v-model
You may also toggle the visibility of modals through the `v-model` directive. This is useful if you are wrapping your modals within their own components. Sometimes it's nice to keep everything nice and tidy :metal:

```html
<template>
    <div>
        <a href="#" @click.prevent="toggle">Toggle Me!</a>

        <p-modal name="example" v-model="show">
            ...
        </p-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        },

        methods: {
            toggle() {
                this.show = !this.show
            }
        }
    }
</script>
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
| `flush` | `Boolean` | If the modal body should be flush (no padding) to the border. | true, false | false |
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