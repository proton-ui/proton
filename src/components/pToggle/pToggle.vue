<template>
    <div>
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <input
            type="checkbox"
            class="toggle"
            :id="name"
            :name="name"
            :value="value"
            :checked.prop="isChecked"
            :readonly="readonly"
            :disabled="disabled"
            :required="required"
            @keydown.prevent.space="toggle"
            @click="toggle"
        >

        <p
            class="form__help"
            v-if="help"
            v-html="help"
        ></p>
    </div>
</template>

<script>
    export default {
        name: 'p-toggle',

        data() {
            return {
                isChecked: this.checked,
            }
        },

        props: {
            name: String,
            label: String,
            help: String,

            checked: {
                required: false,
                type: Boolean,
                default: false,
            },

            value: {
                required: false,
                type: String | Boolean,
                default: true,
            },
            
            required: {
                required: false,
                type: Boolean,
                default: false,
            },
            
            readonly: {
                required: false,
                type: Boolean,
                default: false,
            },
            
            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        methods: {
            toggle() {
                this.checked = ! this.checked

                this.$emit("input", this.checked)
            }
        }
    }
</script>
