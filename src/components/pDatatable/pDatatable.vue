<template>
    <div class="card">
        <table>
            <thead>
                <tr>
                    <th>Column</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Value</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'p-datatable',

        data() {
            return {

            }
        },

        mounted() {
            this.getRecords()
        },

        methods: {
            getRecords() {
                //
            }
        }
    }
</script>
