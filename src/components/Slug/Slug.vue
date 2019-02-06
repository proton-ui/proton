<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <input
            class="form__control"
            :class="{'font-mono': monospaced, 'form__error': hasError}"
            :id="name"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            v-model.lazy="slug"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
        >

        <div class="form__control--meta" v-if="help || errorMessage">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-slug',

        data() {
            return {
                modified: null,
            }
        },

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
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            },
            delimiter: {
                required: false,
                type: String,
                default: '-',
            },
            ampersand: {
                required: false,
                type: String,
                default: 'and',
            },
        },

        computed: {
            isModified() {
                return this.modified !== null
            },

            slug: {
                set(value) {
                    if (value === '') {
                        value = null
                    }

                    this.modified = value
                },

                get() {
                    let slug = this.modified

                    if (! this.isModified) {
                        slug = this.slugify(this.value)
                    } else {
                        slug = this.slugify(slug)
                    }

                    this.$emit('change', slug)

                    return slug
                }
            }
        },

        methods: {
            slugify(text) {
                if (text) {
                    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
                    const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
                    const p = new RegExp(a.split('').join('|'), 'g')
    
                    return text.toString().toLowerCase().trim()
                    .replace(p, c =>                                                    // Replace special characters
                        b.charAt(a.indexOf(c)))
                    .replace(/&+/gi, 'and')                                              // Replace 1 or more & characters with the word 'and'
                    .replace(/\s+/g, this.delimiter)                                     // Convert spaces with delimiter
                    .replace(/[^\w\-]+/g, '')                                            // Remove all non-word chars
                    .replace(new RegExp(this.delimiter + '{2,}', 'g'), this.delimiter);  // Replace multiple delimiters with a single one
                }

                return null
            }
        }
    }
</script>
