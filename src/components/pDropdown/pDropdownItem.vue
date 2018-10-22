<template>
    <span class="dropdown__item" @click="$emit('click', $event)">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'p-dropdown-item',
    }
</script>
