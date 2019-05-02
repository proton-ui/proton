<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div
            @dragover.prevent="enter"
            @dragenter.prevent="enter"
            @dragleave.prevent="leave"
            @dragend.prevent="leave"
            @drop.prevent="onFileChange"
            class="upload__container"
            :class="{'upload__container--dragged': isDraggedOver}"
        >
            <input
                class="upload__control"
                type="file"
                ref="input"
                :name="name"
                :id="name"
                :multiple="multiple"
                @change="onFileChange"
            >
            
            <label :for="name" class="upload__label">
                <template v-if="multiple">
                    <strong>Drag files here</strong> or click to select
                </template>

                <template v-else>
                    <strong>Drag the file here</strong> or click to select

                </template>
            </label>
        </div>
        
        <table v-if="files.length">
            <tbody>
                <tr v-for="file in files" :key="file.name">
                    <td>{{ file.name }}</td>
                    <td>{{ file.size }}</td>
                    <td><p-button>Remove</p-button></td>
                </tr>
            </tbody>
        </table>            

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
        name: 'p-upload',

        data() {
            return {
                files: [],
                isDraggedOver: false,
            }
        },

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            multiple: Boolean,
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
        },

        methods: {
            enter() {
                this.isDraggedOver = true
            },

            leave() {
                this.isDraggedOver = false
            },

            drop(event) {
                this.leave()

                this.onFileChange(event)
            },

            onFileChange(event) {
                this.files = event.target.files || event.dataTransfer.files

                this.$emit('input', this.files[0])
            },
        },
    }
</script>
