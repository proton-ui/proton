---
title: Chart
---

# Chart
Proton's charts are powered by the [Frappe Charts](https://frappe.io/charts) library. Frappe Charts is described as being a GitHub-inspired, simple, and modern SVG chart library with zero dependencies.

::: warning
There are **a lot** of options with this library. So while we will be going over _how_ you may go about configuring these options in the context of the Proton component, you will still want to reference the official [documentation](https://frappe.io/charts/docs) for available options.
:::

---

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | Unique name value that is used to generate the wrapping elements div ID. | | |
| `title` | `String` | Add a title to the Chart. | | |
| `type` | `String` | Let the chart know what type to render. | line, bar, axis-mixed, pie, percentage, heatmap | bar |
| `height` | `Number` | Set the height of the chart in pixels. | | `300` |
| `colors` | `Array` | Set the colors to be used for each individual unit type, depending on the chart type. | | `purple`, `#ffa3ef`, `light-blue` |
| `dataSets` | `Array` | An object of your dataset values you wish to display within your chart. | | |
| `labels` | `Array` | Set the labels used for your dataset. | | |
| `dataPoints` | `Object` | An object of your datapoint values you wish to display within heatmap-type charts. | | |
| `startDate` | `Date` | JavaScript date object for when heatmap chart types should start. | | |
| `endDate` | `Date` | JavaScript date object for when heatmap chart types should end. | | |
| `countLabel` | `String` |  | | |
| `discreteDomains` | `Boolean` | asdf | true, false | false |
| `yMarkers` | `Array` |
| `yRegions` | `Array` |
| `valuesOverPoints` | `Boolean` | asdf | true, false | false |
| `axisOptions` | `Object` |
| `barOptions` | `Object` |
| `lineOptions` | `Object` |
| `tooltipOptions` | `Object` |
| `maxLegendPoints` | `Number` |
| `maxSlices` | `Number` |
| `isNavigable` | `Boolean` | Makes the chart interactive with arrow keys and highlights the current active data point. | true, false | false |