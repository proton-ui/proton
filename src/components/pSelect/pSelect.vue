<template>
    <div class="mb-3">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="relative">
            <select :name="name" :id="name" class="form__control">
                <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
            </select>

            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-select',

        props: {
            name: {
                required: true,
                type: String,
            },

            label: {
                required: false,
                type: String,
            },

            options: {
                required: false,
                type: Array,
                default: () => {
                    return []
                },
            },
        },
    }
</script>
