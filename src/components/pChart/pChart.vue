<template>
    <div :id="'proton-chart-' + this.name"></div>
</template>

<script>
    import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm'

    export default {
        name: 'p-chart',

        data() {
            return {
                chart: null,
                data: {
                    labels: this.labels,
                    datasets: this.dataSets,
                },
                heatmapData: {
                    dataPoints: this.dataPoints,
                    start: this.startDate,
                    end: this.endDate,
                    countLabel: this.countLabel,
                },
            }
        },

        props: {
            name: {
                required: true,
                type: String,
                default: null,
            },

            dataSets: {
                required: false,
                type: Array,
                default: () => [],
            },

            labels: {
                required: false,
                type: Array,
                default: () => [],
            },

            startDate: {
                required: false,
                type: Date,
                default: null,
            },

            endDate: {
                required: false,
                type: Date,
                default: null,
            },

            dataPoints: {
                required: false,
                type: Object,
                default: () => {},
            },

            countLabel: {
                required: false,
                type: String,
                deefault: 'Count',
            },

            title: {
                required: false,
                type: String,
            },

            height: {
                required: false,
                type: Number,
                default: 300,
            },

            type: {
                required: false,
                type: String,
                default: 'bar',
            },

            yMarkers: {
                required: false,
                type: Array,
                default: () => [
                    {
                        label: 'Marker',
                        value: 70,
                        options: {
                            labelPos: 'left',
                        },
                    },
                ],
            },

            yRegions: {
                required: false,
                type: Array,
                default: () => [
                    {
                        label: 'Region',
                        start: -10,
                        end: 50,
                        options: {
                            labelPos: 'right',
                        },
                    },
                ],
            },

            colors: {
                required: false,
                type: Array,
                default: () => [
                    'purple', '#ffa3ef', 'light-blue',
                ],
            },

            isNavigable: {
                required: false,
                type: Boolean,
                default: false,
            },

            valuesOverPoints: {
                required: false,
                type: Boolean,
                default: false,
            },

            lineOptions: {
                required: false,
                type: Object,
                default: () => {
                    return {
                        dotSize: 4,
                        hideLine: 0,
                        hideDots: 0,
                        heatLine: 0,
                        regionFill: 0,
                        areaFill: 0,
                    }
                },
            },

            axisOptions: {
                required: false,
                type: Object,
                default: () => {
                    return {
                        yAxisMode: '',
                        xAxisMode: '',
                        xIsSeries: 0,
                    }
                },
            },

            maxLegendPoints: {
                required: false,
                type: Number,
                default: 20,
            },

            maxSlices: {
                required: false,
                type: Number,
                default: 20,
            },

            barOptions: {
                required: false,
                type: Object,
                default: () => {
                    return {
                        height: 20,
                        depth: 2,
                        spaceRatio: 0.5,
                        stacked: 0,
                    }
                },
            },

            discreteDomains: {
                required: false,
                type: Boolean,
                default: true,
            },

            tooltipOptions: {
                required: false,
                type: Object,
                default: () => {
                    return {
                        formatTooltipX: d => (d + '').toUpperCase(),
                        formatTooltipY: d => d + ' pts',
                    }
                },
            },
        },

        mounted() {
            this.mount()
        },

        methods: {
            mount() {
                const mountedOptions = {
                    type: this.type,
                    discreteDomains: this.discreteDomains,
                    colors: this.colors,
                    height: this.height,
                    title: this.title,
                    isNavigable: this.isNavigable,
                }

                const heatMapOptions = {
                    data: this.heatmapData,
                }

                const chartOptions = {
                    data: this.data,
                    tooltipOptions: this.tooltipOptions,
                    valuesOverPoints: this.valuesOverPoints,
                    barOptions: this.barOptions,
                    lineOptions: this.lineOptions,
                    axisOptions: this.axisOptions,
                    maxLegendPoints: this.maxLegendPoints,
                    maxSlices: this.maxSlices,
                }

                const options = (this.type === 'heatmap')
                    ? {...mountedOptions, ...heatMapOptions}
                    : {...mountedOptions, ...chartOptions}

                this.chart = new Chart(`#proton-chart-${this.name}`, options)
            },

            export() {
                this.chart.export()
            },

            addDataPoint(label, valueFromEachDataset, index) {
                this.chart.addDataPoint(label, valueFromEachDataset, index)
            },

            removeDataPoint(index) {
                this.chart.removeDataPoint(index)
            },

            updateDataset(datasetValues, index) {
                this.chart.updateDataset(datasetValues, index)
            },

            unbindWindowEvents() {
                this.chart.unbindWindowEvents()
            },
        },
    }
</script>
