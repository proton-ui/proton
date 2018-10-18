<template>
    <div>
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <textarea
            class="form__control"
            :class="{'font-mono': monospaced}"
            :id="name"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :rows="rows"
            @input="$emit('input', $event.target.value)"
        ></textarea>

        <p
            class="form__help"
            v-if="help"
            v-html="help"
        ></p>
    </div>
</template>

<script>
    export default {
        name: 'p-textarea',

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
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
            rows: {
                required: false,
                type: Number,
                default: 3,
            },
        }
    }
</script>
