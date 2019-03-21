---
title: DataTable
---

# DataTable
Display tabular data while providing the means to filter, search, sort, and paginate through results.

::: tip HEADS UP
For the time being, DataTables rely on an API endpoint to display results. Docs on API requirements coming soon.
:::

## Examples
To create a basic datatable component, you must specify the `name` and `endpoint` properties.

<proton-example>
<p-datatable name="flights" endpoint="/datatable/flights"></p-datatable>

<template slot="code">

```html
<p-datatable name="flights" endpoint="/datatable/flights"></p-datatable>
```

</template>
</proton-example>

### Customizing Column Templates
Each column may be customized to render content however you need it to. To override any given template, within your `<p-datatable>` component instance, define a new scoped-slot template where the slot name is the name of the column you wish to customize:

<proton-example>
<p-datatable name="flights" endpoint="/datatable/flights">
<template slot="id" slot-scope="table">
<code>{{ table.record.id }}</code>
</template>
</p-datatable>

<template slot="code">

```html
<p-datatable name="flights" endpoint="/datatable/flights">

    <template slot="id" slot-scope="table">
        <code>{{ table.record.id }}</code>
    </template>

</p-datatable>
```

</template>
</proton-example>

### Customizing Actions
By default, every datatable instance will render an **Actions** column at the end. You may override this with a scoped-slot with the name actions:

<proton-example>
<p-datatable name="flights" endpoint="/datatable/flights">
<template slot="actions" slot-scope="table">
<p-dropdown right>
<fa-icon icon="bars"></fa-icon>
<template slot="options">
<p-dropdown-item
@click.prevent
:to="{ name: 'flights.edit', params: {flight: table.record.id} }"
>
Edit
</p-dropdown-item>
<p-dropdown-item
@click.prevent
v-modal:delete-flight="table.record"
>
Delete
</p-dropdown-item>
</template>
</p-dropdown>
</template>
</p-datatable>

<template slot="code">

```html
<p-datatable name="flights" endpoint="/datatable/flights">

    <template slot="actions" slot-scope="table">
        <p-dropdown right>
            <fa-icon icon="bars"></fa-icon>

            <template slot="options">
                <p-dropdown-item
                    @click.prevent
                    :to="{ name: 'flights.edit', params: {flight: table.record.id} }"
                >
                    Edit
                </p-dropdown-item>

                <p-dropdown-item
                    @click.prevent
                    v-modal:delete-flight="table.record"
                >
                    Delete
                </p-dropdown-item>
            </template>
        </p-dropdown>
    </template>

</p-datatable>
```

</template>
</proton-example>

## Params
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | The identifying name of the datatable. | | |
| `endpoint` | `String` | The endpoint the datatable will call to fetch content. | | |
| `sort-by` | `String` | The default column to sort by. | | id |
| `sort-in` | `String` | The default direction to sort by. | desc, asc | asc |
| `per-page` | `Integer` | The default number of items to display per page. | | 10 |
| `no-actions` | `Boolean` | Hides the actions column. | true, false | false |
| `no-search` | `Boolean` | Disables the ability to search column values. | true, false | false |
| `no-filters` | `Boolean` | Disables the ability to filter columns | true, false | false |
| `no-pagination` | `Boolean` | Disables the ability to paginate records. | true, false | false |

## Slots
| Name | Description |
|------|-------------|
| `actions` | The actions column. |