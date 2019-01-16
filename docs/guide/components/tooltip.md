---
title: Tooltip
---

# Tooltip

## Default
With Proton, there are a couple of ways to utilize tooltips.

### Directive
For simple and quick tooltips, you may use the `v-tooltip` directive.

:::warning NOTE
You must pass the value through as a `String` by wrapping your tooltip text in single-quotes. Otherwise, Vue will attempt to execute your string as JavaScript.
:::

<proton-example>
<p>Hover over <b v-tooltip="'Hello World'">me</b> for more information!</p>

<template slot="code">

```html
<p>Hover over <b v-tooltip="'Hello World'">me</b> for more information!</p>
```

</template>
</proton-example>

### Component
For more complex or detailed tooltips, you may use the `p-tooltip` component.

<proton-example>
<p-tooltip><p-button>Hover over me</p-button><template slot="content"><h1>Hello World!</h1><p>I'm a tooltip with HTML content!</p></template></p-tooltip>

<template slot="code">

```html
<p-tooltip>
    <p-button>Hover over me</p-button>

    <template slot="content">
        <h1>Hello World!</h1>
        <p>I'm a tooltip with HTML content!</p>
    </template>
</p-tooltip>
```

</template>
</proton-example>

## Placement
You may specify one of the following options to place your tooltip:

- `auto`
- `top` (default)
- `right`
- `bottom`
- `left`

Each placement can have a variation from this list:

- `-start`
- `-end`

Variations are interpreted easily if you think of them as the left to right written languages.

- Horizontally (`top` and `bottom`), `start` is left and `end` is right.
- Vertically (`left` and `right`), `start` is top and `end` is bottom.

Some valid examples are:

- `top-end` (on top of reference, right aligned)
- `right-start` (on right of reference, top aligned)
- `bottom` (on bottom, centered)
- `auto-end` (on the side with more space available, alignment depends by placement)

---

How you specify the placement depends on the method you're using to display tooltips.

### Directive
With the directive, pass the placement through as a modifier.

<proton-example>
<p>Hover over <b v-tooltip:bottom="'I will show on the bottom'">me</b> for more information!</p>

<template slot="code">

```html
<p>
    Hover over <b v-tooltip:bottom="'I will show on the bottom'">me</b> for more information!
</p>
```

</template>
</proton-example>

### Component
With the component, pass the position through the `placement` prop.

<proton-example>
<p-tooltip><p-button>Hover over me</p-button><template slot="content" placement="bottom"><h1>Hello World!</h1><p>I'm a tooltip with HTML content!</p></template></p-tooltip>

<template slot="code">

```html
<p-tooltip>
    <p-button>Hover over me</p-button>

    <template slot="content" placement="bottom">
        <h1>Hello World!</h1>
        <p>I'm a tooltip with HTML content!</p>
    </template>
</p-tooltip>
```

</template>
</proton-example>