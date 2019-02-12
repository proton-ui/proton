---
title: Pagination
---

# Pagination

## Examples
To create a basic pagination component, you must specify the `total` and `value` properties. The `value` property sets the currently selected page and may be bound to a `v-model` instance.

<proton-example>
<p-pagination :total="15" :value="1"></p-pagination>

<template slot="code">

```html
<p-pagination :total="15" v-model="currentPage"></p-pagination>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `value` | `Number` | The current page. | | `1` |
| `total` | `Number` | The total number of pages. | | |

## Events
| Name | Description | Value |
|------|------|-------------|---------|---------|
| `input` | Triggers when the current page changes. | `Number` |
| `next` | Triggers when the next button is clicked and there is a next page to jump to. | |
| `previous` | Triggers when the previous button is clicked and there is a previous page to jump to. | |
| `first` | Triggers when the first button is clicked and currently not on the first page. | |
| `last` | Triggers when the last button is clicked and currently not on the last page. | |