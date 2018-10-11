<template>
    <div class="mb-3">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <input
            class="form__control"
            :class="{'font-mono': monospaced}"
            :id="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            @input="$emit('input', $event.target.value)"
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
        name: 'p-input',

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
            },
            type: {
                type: String,
                default: 'text',
            },
            required: {
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
            monospaced: {
                type: Boolean,
                default: false,
            },
        }
    }
</script>
