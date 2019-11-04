<template>
    <button
        class="button"
        :class="[ themes[theme], sizes[size] ]"
        :type="type"
        :disabled="disabled"
        @click="onClick($event)"
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

        methods: {
            onClick(event) {
                if (typeof this.to === 'undefined' && typeof this.href !== 'undefined') { // is href
console.log('1')
                    event.preventDefault()
                    window.location = this.href

                } else if (typeof this.to !== 'undefined' && typeof this.$router !== 'undefined') { // is router-link
console.log('2')
console.log(this.$router)

                    if (typeof this.to !== 'object' && this.to !== null) { // is string
console.log('3')

                        this.$router.push({ path: this.to })

                    } else { // is object
console.log('4')

                        this.$router.push(this.to)
                    }             
                }

                this.$emit('click', event)
            }
        }
    }
</script>
