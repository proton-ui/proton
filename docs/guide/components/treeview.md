---
title: Treeview
---

# Treeview
### Present a hierarchical view of information that is easy to navigate and digest.

## Examples

### Basic Treeview
Items can be expanded to reveal subitems, if any exist, and collapsed to hide subitems.

<proton-example>

<basic-treeview></basic-treeview>

<template slot="code">

```html
<p-treeview :items="files"></p-treeview>
```

</template>
</proton-example>

#### Item Structure
When passing items to the treeview component, a simple object is expected. There are two properties that will be taken into consideration: `name` and `children`. These can be nested indefinitely.

```json
{
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'Child folder',
            children: [
                ...
            ],
        },
    ]
}
```

You may optionally pass any additional data along with your items. The additional data may be used within the provided scoped slots when customizing the look and feel of your treeview.

### Advanced Treeview
When combined with additional data, you can easily customize the presentation of your items. The following example shows the use of the `prepend` scoped slot to display a custom icon per item.

<proton-example>

<advanced-treeview></advanced-treeview>

<template slot="code">

```html
<p-treeview :items="files">
    <template slot="prepend" slot-scope="{ item, open }">
        <fa-icon :icon="['fas', open ? 'folder-open' : 'folder']" class="fa-fw mr-2" v-if="! item.file"></fa-icon>
        <fa-icon :icon="['far', 'file-alt']" class="fa-fw mr-2" v-else></fa-icon>
    </template>
</p-treeview>
```

```json
// Dataset

{
    name: 'My Tree',
    isFolder: true,
    children: [
        { name: 'hello', file: true },
        { name: 'wat', file: true },
        {
            name: 'child folder',
            isFolder: true,
            children: [
                {
                    name: 'child folder',
                    isFolder: true,
                    children: [
                        { name: 'hello', file: true },
                        { name: 'wat', file: true }
                    ]
                },
                { name: 'hello', file: true },
                { name: 'wat', file: true },
                {
                    name: 'child folder',
                    isFolder: true,
                    children: [
                        { name: 'hello', file: true },
                        { name: 'wat', file: true }
                    ]
                }
            ]
        }
    ]
}
```

</template>
</proton-example>

## Slots
| Name | Description | Scope |
|------|-------------|-------|
| `label` | Label of each item. | `item`, `open` |
| `prepend` | Content prepending each label. | `item`, `open` |
| `append` | Content appending each label. | `item`, `open` |