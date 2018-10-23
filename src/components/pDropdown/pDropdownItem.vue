<template>
    <a v-if="href" :href="href" class="dropdown__item" @click="onClick($event)">
        <slot></slot>
    </a>

    <span v-else class="dropdown__item" @click="onClick($event)">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'p-dropdown-item',

        props: {
            href: {
                required: false,
                type: String,
            },
        },

        methods: {
            onClick(event) {
                $emit('click', event)
            }
        }
    }
</script>
