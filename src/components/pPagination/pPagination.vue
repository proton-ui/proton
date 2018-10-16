<template>
    <ul class="pagination">
        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickFirstPage"
                :disabled="isOnFirstPage"
            >
                First
            </button>
        </li>

        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickPreviousPage"
                :disabled="isOnFirstPage"
            >
                Previous
            </button>
        </li>

        <li v-for="page in pages" :key="page.name" class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickPage(page.name)"
                :disabled="page.isDisabled"
                :class="{ active: isPageActive(page.name) }"
            >
                {{ page.name }}
            </button>
        </li>

        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickNextPage"
                :disabled="isOnLastPage"
            >
                Next
            </button>
        </li>

        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickLastPage"
                :disabled="isOnLastPage"
            >
                Last
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'p-pagination',

        data() {
            return {
                pagination: {
                    current: this.currentPage,
                    perPage: this.perPage,
                },
            }
        },

        props: {
            maxVisiblePages: {
                required: false,
                type: Number,
                default: 3,
            },

            totalPages: {
                required: true,
                type: Number,
            },

            total: {
                required: true,
                type: Number,
            },

            perPage: {
                required: true,
                type: Number,
            },

            currentPage: {
                required: true,
                type: Number,
            },
        },

        computed: {
            startPage() {
                let startPage = 1

                if (this.currentPage === 1) {
                    return startPage
                }

                if (this.currentPage === this.totalPages) {
                    startPage = this.totalPages - this.maxVisiblePages + 1
                } else {
                    startPage = this.currentPage - 1
                }

                if (startPage === 0) {
                    startPage = 1
                }

                return startPage
            },

            endPage() {
                return Math.min(this.startPage + this.maxVisiblePages - 1, this.totalPages)
            },

            pages() {
                const range = []

                for (let i = this.startPage; i <= this.endPage; i += 1) {
                    range.push({
                        name: i,
                        isDisabled: i === this.currentPage
                    })
                }

                console.log(range, this.startPage, this.endPage)

                return range
            },

            isOnFirstPage() {
                return this.currentPage === 1
            },

            isOnLastPage() {
                return this.currentPage === this.totalPages
            },
        },

        methods: {
            onClickFirstPage() {
                this.$emit('pagechanged', 1)
            },

            onClickPreviousPage() {
                this.$emit('pagechanged', this.currentPage - 1)
            },

            onClickPage(page) {
                this.$emit('pagechanged', page)
            },

            onClickNextPage() {
                this.$emit('pagechanged', this.currentPage + 1)
            },

            onClickLastPage() {
                this.$emit('pagechanged', this.totalPages)
            },

            isPageActive(page) {
                return this.currentPage === page
            },
        }
    }
</script>
