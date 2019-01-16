---
title: Card
---

# Card

## Examples
<proton-example>
<p-card>
<h3>The Big Bang Theory</h3>
<p>The model describes how the universe expanded from a very high-density and high-temperature state, and offers a comprehensive explanation for a broad range of phenomena, including the abundance of light elements, the cosmic microwave background (CMB), large scale structure and Hubble's law (the farther away galaxies are, the faster they are moving away from Earth).</p>
</p-card>

<template slot="code">

```html
<p-card>
    <h3>The Big Bang Theory</h3>
    <p>The model describes how the universe expanded from a very high-density and high-temperature state, and offers a comprehensive explanation for a broad range of phenomena, including the abundance of light elements, the cosmic microwave background (CMB), large scale structure and Hubble's law (the farther away galaxies are, the faster they are moving away from Earth).</p>
</p-card>
```

</template>
</proton-example>

## Theme
Define the theme of the card with the `theme` property.

<proton-example>
<p-card theme="dark">
<h3>Black Holes</h3>
<p>A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing—not even particles and electromagnetic radiation such as light—can escape from inside it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.</p>
</p-card>

<template slot="code">

```html
<p-card theme="dark">
    <h3>Black Holes</h3>
    <p>A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing—not even particles and electromagnetic radiation such as light—can escape from inside it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.</p>
</p-card>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `theme` | `String` | Define the theme of the card. | default, dark | default |
| `no-body` | `Boolean` | Disable padding inside card body. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `default` | Main body of the card. |