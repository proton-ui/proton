<template>
    <div class="form__checkbox-container">
        <label
            ref="label"
            :disabled="disabled"
            :tabindex="disabled ? false : 0"
            @keydown.prevent.enter.space="$refs.label.click()">
            <input
                class="form__checkbox"
                type="checkbox"
                :name="name"
                :value="nativeValue"
                :disabled="disabled"
                :required="required"
                :true-value="trueValue"
                :false-value="falseValue"
                :indeterminate.prop="indeterminate"
                v-model="computedValue"
            >
            <span class="form__checkbox-label"><slot></slot></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'p-checkbox',

        data() {
            return {
                model: this.value,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },

            nativeValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol]
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            required: {
                type: Boolean,
                default: false,
            },

            indeterminate: {
                type: Boolean,
                default: false,
            },

            trueValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: true
            },

            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: false
            },
        },

        computed: {
            computedValue: {
                get() {
                    return this.model
                },

                set(value) {
                    this.model = value
                    this.$emit('input', value)
                }
            }
        },

        watch: {
            value(value) {
                this.model = value
            },
        },
    }
</script>
