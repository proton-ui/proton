<template>
    <p-treeview :items="files">
        <template slot="prepend" slot-scope="{ item, open }">
            <fa-icon :icon="['fas', open ? 'folder-open' : 'folder']" class="fa-fw mr-2" v-if="! item.file"></fa-icon>
            <fa-icon :icon="['far', 'file-alt']" class="fa-fw mr-2" v-else></fa-icon>
        </template>
    </p-treeview>
</template>

<script>
    export default {
        name: 'advanced-treeview',

        data() {
            return {
                files: {
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
            }
        }
    }
</script>
