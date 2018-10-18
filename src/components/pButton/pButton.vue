<template>
    <button
        class="button"
        :class="[ themes[theme], sizes[size] ]"
        :type="type"
        :disabled="disabled"
        @click="$emit('click', $event)"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'p-button',

        data() {
            return {
                themes: {
                    default: '',
                    primary: 'button--primary',
                    secondary: 'button--secondary',
                    info: 'button--info',
                    success: 'button--success',
                    warning: 'button--warning',
                    danger: 'button--danger',
                    dark: 'button--dark',
                },

                sizes: {
                    normal: '',
                    small: 'button--small',
                    large: 'button--large',
                },
            }
        },

        props: {
            type: {
                required: false,
                type: String,
                default: 'button',
            },

            to: {
                required: false,
                type: String | Object,
            },

            href: {
                required: false,
                type: String,
            },

            theme: {
                required: false,
                type: String,
                default: 'default',
            },

            size: {
                required: false,
                type: String,
                default: 'normal',
            },
            
            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },
        },
    }
</script>
