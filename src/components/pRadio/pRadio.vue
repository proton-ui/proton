<template>
    <div class="form__radio-container">
        <label :for="id">
            <input
                class="form__radio"
                type="radio"
                :id="id"
                :name="name"
                :value="value"
                @change="onChange"
                :checked="state"
                :readonly="readonly"
                :disabled="disabled"
            >
            
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'p-radio',

        model: {
            prop: 'modelValue',
            event: 'input',
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            id: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                type: String,
                default: '',
            },

            modelValue: {
                default: undefined,
            },

            checked: {
                required: false,
                type: Boolean,
                default: false,
            },

            readonly: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked
                }

                return this.modelValue === this.value
            }
        },

        methods: {
            onChange() {
                this.toggle()
            },

            toggle() {
                this.$emit('input', this.value)
            },
        },

        watch: {
            checked(value) {
                if (value !== this.state) {
                    this.toggle()
                }
            },
        },

        mounted() {
            if (this.checked && ! this.state) {
                this.toggle()
            }
        }
    }
</script>
