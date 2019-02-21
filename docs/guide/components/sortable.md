---
title: Sortable
---

# Sortable
### A renderless set of components to enable the ability to sort any group or list of content.

---

## Examples
Sort elements in a single collection, maintaining order for all but the element being dragged.

Your original set of data will be kept in sync with sort changes. This allows you to watch your original set of data to perform any necessary API calls to update your database/storage.

<proton-example>

<sortable-basic-list></sortable-basic-list>

<template slot="code">

```html
<p-sortable-list v-model="contacts">
    <ul class="list" slot-scope="{ items: contacts }">
        <p-sortable-item v-for="contact in contacts" :key="contact.id">
            <li class="list--item flex justify-between items-center py-2">
                <img :src="contact.avatar" alt="avatar" class="rounded-full w-12 mr-6">
                
                <div class="flex-1">
                    <span class="block text-sm">{{ contact.name }}</span>
                    <span class="block text-xs text-grey">{{ contact.email }}</span>
                </div>

                <p-sortable-handle>
                    <svg class="handle" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/></svg>
                </p-sortable-handle>
            </li>
        </p-sortable-item>
    </ul>
</p-sortable-list>
```

</template>
</proton-example>