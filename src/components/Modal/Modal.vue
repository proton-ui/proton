<template>
    <div class="modal--overlay" v-if="model">
        <div class="modal" :class="styles" v-click-outside="clickedOutside">
            <div class="modal__header" v-if="! noHeader">
                <slot name="header" :data="data">
                    <div class="modal__header--title">
                        <span v-if="title" v-html="title"></span>
                    </div>

                    <div>
                        <a href="#" class="modal__header--close-button" @click.prevent="close" v-if="! noCloseButton">&times;</a>
                    </div>
                </slot>
            </div>

            <div class="modal__body" :class="{ 'modal__body--flush': flush }">
                <slot :data="data"></slot>
            </div>

            <div class="modal__footer" v-if="! noFooter">
                <slot name="footer" :data="data">
                    <p-button @click="close">Close</p-button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-modal',

        data() {
            return {
                model: this.value,
                data: null,

                themes: {
                    default: '',
                    primary: 'modal--primary',
                    secondary: 'modal--secondary',
                    info: 'modal--info',
                    success: 'modal--success',
                    warning: 'modal--warning',
                    danger: 'modal--danger',
                    dark: 'modal--dark',
                },
            }
        },

        computed: {
            styles() {
                let styles = {}

                styles['modal--large'] = this.large
                styles['modal--x-large'] = this.extraLarge
                styles[this.themes[this.theme]] = true

                return styles
            },
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            title: {
                required: false,
                type: String,
            },

            value: {
                required: false,
                type: Boolean,
                default: false,
            },

            large: {
                required: false,
                type: Boolean,
                default: false,
            },

            extraLarge: {
                required: false,
                type: Boolean,
                default: false,
            },

            noCloseButton: {
                required: false,
                type: Boolean,
                default: false,
            },

            noHeader: {
                required: false,
                type: Boolean,
                default: false,
            },

            noFooter: {
                required: false,
                type: Boolean,
                default: false,
            },

            noEscClose: {
                required: false,
                type: Boolean,
                default: false,
            },

            noOutsideClose: {
                required: false,
                type: Boolean,
                default: false,
            },

            flush: {
                required: false,
                type: Boolean,
                default: false,
            },

            theme: {
                required: false,
                type: String,
                default: 'default',
            },
        },

        methods: {
            open() {
                this.model = true
            },

            close() {
                this.model = false
            },

            toggle() {
                if (! this.model) {
                    setTimeout(() => {
                        this.open()
                    }, 100)
                } else {
                    this.close()
                }
            },

            listenForEscape() {
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.model) {
                        this.close()
                    }
                }

                if (! this.noEscClose) {
                    document.addEventListener('keydown', escapeHandler)

                    this.$once('hook:destroyed', () => {
                        document.removeEventListener('keydown', escapeHandler)
                    })
                }
            },

            listenForDirective() {
                this.$proton.$on('toggle-modal-' + this.name, (data) => {
                    this.toggle()
                    this.data = data
                })
            },

            clickedOutside() {
                if (! this.noOutsideClose) {
                    this.close()
                }
            },
        },

        watch: {
            value(value) {
                this.model = !!value
            },

            model: {
                immediate: true,
                handler: function(model) {
                    this.$emit('input', model)

                    if (model) {
                        this.$proton.$emit('modal-opened', this.name)
                        document.body.style.setProperty('overflow', 'hidden')
                    } else {
                        this.$proton.$emit('modal-closed', this.name)
                        document.body.style.removeProperty('overflow')
                    }
                }
            },
        },

        created() {
            this.listenForEscape()
            this.listenForDirective()
        },
    }
</script>
