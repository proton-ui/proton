<template>
    <div class="mb-3">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="form__select" :class="{'form__select--open': isOpen}" v-click-outside="close">
            <button @click="toggle" type="button" class="form__select-button" ref="button">
                <span v-if="selected !== null" v-html="selected"></span>
                <span v-else class="form__select-placeholder" v-html="placeholder"></span>
            </button>

            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>

            <div v-show="isOpen" class="form__select-dropdown" ref="dropdown">
                <input
                    type="search"
                    class="form__select-search"
                    v-model="search"
                    ref="search"
                    @keydown.esc="close"
                    @keydown.down="highlightNext"
                    @keydown.up="highlightPrevious"
                    @keydown.enter.prevent="selectHighlighted"
                >

                <ul class="form__select-options" v-show="filteredOptions.length > 0" ref="options">
                    <li class="form__select-option"
                        :class="{'form__select-option--selected': isSelected(option), 'form__select-option--highlighted': isHighlighted(index)}"
                        v-for="(option, index) in filteredOptions"
                        :key="option"
                        @click="select(option)"
                    >{{ option }}</li>
                </ul>

                <div
                    v-show="filteredOptions.length === 0"
                    class="form__select-search-empty"
                >
                    No results found for "{{ search }}"
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'p-select',

        data() {
            return {
                isOpen: false,
                selected: this.value,
                search: '',
                highlighted: 0,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                default: null,
            },

            label: {
                required: false,
                type: String,
            },

            placeholder: {
                required: false,
                type: String,
                default: 'Please select an option...',
            },

            options: {
                required: false,
                type: Array,
                default: () => {
                    return []
                },
            },

            multiple: {
                required: false,
                type: Boolean,
                default: false,
            },

            filterFunction: {
                required: false,
                default: null
            }
        },

        computed: {
            filteredOptions() {
                if (this.filterFunction == null) {
                    return this.options.filter((option) => {
                        return option.toLowerCase().startsWith(this.search.toLowerCase())
                    })
                }

                return this.filterFunction(this.search, this.options)
            }
        },

        watch: {
            search() {
                this.resetHighlighted()
            }
        },

        methods: {
            toggle() {
                this.isOpen ? this.close() : this.open()
            },

            open() {
                this.isOpen = true

                this.$nextTick(() => {
                    this.$refs.search.focus()

                    this.setupPopper()
                })
            },

            close() {
                if (this.isOpen) {
                    this.resetSearch()
                    this.resetHighlighted()
                    
                    this.isOpen = false
                    this.$refs.button.focus()
                }                
            },

            setupPopper() {
                if (this.popper === undefined) {
                    this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
                        placement: 'bottom'
                    })
                } else {
                    this.popper.scheduleUpdate()
                }
            },

            resetSearch() {
                this.search = ''
            },

            select(option) {
                this.$emit('input', option)
                this.selected = option
                this.close()
            },

            selectHighlighted() {
                this.select(this.filteredOptions[this.highlighted])
            },

            isSelected(option) {
                return (option === this.selected)
            },

            isHighlighted(index) {
                return (index === this.highlighted)
            },

            resetHighlighted() {
                this.highlighted = 0

                this.scrollToHighlighted()
            },

            highlight(index) {
                this.highlighted = index

                if (this.highlighted > (this.filteredOptions.length - 1)) {
                    this.highlighted = 0
                }

                if (this.highlighted < 0) {
                    this.highlighted = this.filteredOptions.length - 1
                }

                this.scrollToHighlighted()
            },

            highlightNext() {
                this.highlight(this.highlighted + 1)
            },

            highlightPrevious() {
                this.highlight(this.highlighted - 1)
            },

            scrollToHighlighted() {
                this.$refs.options.children[this.highlighted].scrollIntoView({
                    block: 'nearest'
                })
            },
        },

        beforeDestroy() {
            this.popper.destroy()
        }
    }
</script>
