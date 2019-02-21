<template>
    <ClientOnly>
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
    </ClientOnly>
</template>

<script>
    export default {
        name: 'sortable-basic-list',

        data() {
            return {
                contacts: [
                    {
                        id: 1,
                        name: "Alfreda Ferreira",
                        email: "alfreda.ferreira@example.com",
                        avatar: "https://randomuser.me/api/portraits/med/women/6.jpg"
                    },
                    {
                        id: 2,
                        name: "Leevi Wirtanen",
                        email: "leevi.wirtanen@example.com",
                        avatar: "https://randomuser.me/api/portraits/med/men/19.jpg"
                    },
                    {
                        id: 3,
                        name: "Kaitlin Sutton",
                        email: "kaitlin.sutton@example.com",
                        avatar: "https://randomuser.me/api/portraits/med/women/2.jpg"
                    },
                    {
                        id: 4,
                        name: "Alice Wilson",
                        email: "alice.wilson@example.com",
                        avatar: "https://randomuser.me/api/portraits/med/women/62.jpg"
                    },
                    {
                        id: 5,
                        name: "Etienne Roy",
                        email: "etienne.roy@example.com",
                        avatar: "https://randomuser.me/api/portraits/med/men/4.jpg"
                    }
                ],
            }
        },
    }
</script>
