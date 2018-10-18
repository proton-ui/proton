<template>
    <div class="modal--overlay" v-if="shouldShow">
        <div class="modal" :class="{'modal--large': large, 'modal--x-large': extraLarge}" v-click-outside="clickedOutside">
            <div class="modal__header" v-if="! noHeader">
                <slot name="header">
                    <div class="modal__header--title" >
                        <span v-if="title">{{ title }}</span>
                    </div>

                    <div>
                        <a href="#" class="modal__header--close-button" @click.prevent="dismiss" v-if="! noCloseButton">&times;</a>
                    </div>
                </slot>
            </div>

            <div class="modal__body">
                <slot></slot>
            </div>

            <div class="modal__footer" v-if="! noFooter">
                <slot name="footer">
                    <div>
                        <p-button @click="dismiss">Close</p-button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import EventBus from '../../support/eventbus'

    export default {
        name: 'p-modal',

        data() {
            return {
                shouldShow: this.show,
                loaded: this.show,
            }
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

            show: {
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
        },

        methods: {
            dismiss() {
                if (this.loaded) {
                    this.shouldShow = false
                    this.loaded = false
                }
            },

            toggle() {
                this.shouldShow = ! this.shouldShow

                if (this.shouldShow) {
                    let vm = this

                    setTimeout(() => {
                        this.loaded = true
                    }, 100)
                } else {
                    this.loaded = false
                }
            },

            listenForEscape() {
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.shouldShow) {
                        this.dismiss()
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
                EventBus.$on('toggle-modal-' + this.name, () => {
                    this.toggle()
                })
            },

            clickedOutside() {
                if (! this.noOutsideClose) {
                    this.dismiss()
                }
            },
        },

        watch: {
            shouldShow: {
                immediate: true,
                handler: (shouldShow) => {
                    if (shouldShow) {
                        document.body.style.setProperty('overflow', 'hidden')
                    } else {
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
