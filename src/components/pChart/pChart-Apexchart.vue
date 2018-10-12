<template>
    
</template>


<script>
    import ApexCharts from 'apexcharts'

    export default {
        name: 'p-chart',

        data() {
            return {
                chart: null,
            }
        },

        props: {
            options: {
                type: Object,
                default: function () {
                    return {}
                }
            },

            type: {
                required: false,
                type: String,
                default: 'line',
            },

            series: {
                required: true,
                type: Array,
                default: [],
            },

            width: {
                required: false,
                type: String,
                default: '100%',
            },

            height: {
                required: false,
                type: String,
                default: 'auto',
            },
        },

        methods: {
            mount() {
                const mountedOptions = {
                    chart: {
                        type: this.type,
                        height: this.height,
                        width: this.width,
                    },

                    series: this.series,
                }


                const config = Object.assign(this.options, mountedOptions)
                this.chart = new ApexCharts(this.$el, config)

                console.table(config)
                this.chart.render()
            },

            refresh() {
                this.destroy()
                this.mount()
            },

            destroy() {
                this.chart.destroy()
            },

            updateSeries() {
                this.$emit('updateSeries')
            },

            updateOptions() {
                this.$emit('updateOptions')
            },
        },

        mounted() {
            this.mount()
        },

        created() {
            this.$watch('options', options => {
                if (! this.chart && options) {
                    this.mount()
                } else {
                    this.cart.updateOptions(this.options, true)
                }
            })

            this.$watch('series', series => {
                if (! this.chart && options) {
                    this.mount()
                } else {
                    this.cart.updateSeries(this.series, true)
                }
            }, {
                deep: true,
            })

            let watching = ['type', 'width', 'height']

            watching.forEach(prop => {
                this.$watch(prop, () => {
                    this.refresh()
                })
            })
        },

        beforeDestroy() {
            if (! this.chart) {
                return
            }

            this.destroy()
        },

        render(createElement) {
            return createElement('div')
        },
    }
</script>
