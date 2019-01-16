---
title: Collapse
---

# Collapse
Toggle the visibility of any element within your application.

## Example
<proton-example>
<ClientOnly>
<p-button v-collapse:example-1>Toggle</p-button>

<p-collapse name="example-1">
<p-card class="mt-3"><span class="text-xl font-bold">Boo!</span></p-card>
</p-collapse>
</ClientOnly>

<template slot="code">

```html
<p-button v-collapse:example-1>Toggle</p-button>

<p-collapse name="example-1">
    <p-card class="mt-3">
        <span class="text-xl font-bold">Boo!</span>
    </p-card>
</p-collapse>
```

</template>
</proton-example>