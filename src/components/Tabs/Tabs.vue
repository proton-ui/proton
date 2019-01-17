<template>
    <div class="tabs">
        <ul class="tab__list">
            <li v-for="tab in tabs" :key="tab.name" class="tab" :class="{ 'tab--active': tab.isActive }">
                <a :href="tab.hash" class="tab__link" @click.prevent="selectTab(tab.hash, true)" @focus="selectTab(tab.hash, true)">{{ tab.name }}</a>
            </li>
        </ul>

        <div class="tab__panel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-tabs',

        data() {
            return {
                tabs: null,
                foundActiveTab: false,
            }
        },

        computed: {
            count() {
                return this.tabs.length
            }
        },

        methods: {
            findTab(hash) {
                return this.tabs.find((tab) => {
                    return tab.hash == hash
                })
            },

            selectTab(hash, replaceHash = false) {
                const selected = this.findTab(hash)

                if (typeof selected === 'undefined') {
                    return
                }

                _.each(this.tabs, (tab, index) => {
                    if (tab.hash == selected.hash) {
                        tab.activate()

                        this.active = index
                    } else {
                        tab.deactivate()
                    }
                })

                if (replaceHash) {
                    this.$router.replace({
                        hash: selected.hash
                    })
                }
            },
        },

        created() {
            this.tabs = this.$children
        },

        mounted() {
            _.each(this.tabs, (tab) => {
                if (tab.isActive) {
                    this.selectTab(tab.hash)

                    this.foundActiveTab = true

                    return false
                }
            })

            if (! this.foundActiveTab) {
                this.selectTab(this.tabs[0].hash)
            }

            if (this.$route.hash) {
                this.selectTab(this.$route.hash)
            }
        }
    }
</script>
