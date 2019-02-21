<template>
    <p-treeview :items="files"></p-treeview>
</template>

<script>
    export default {
        name: 'basic-treeview',

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
