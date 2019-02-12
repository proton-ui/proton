---
title: Chart
---

# Chart
Proton's charts are powered by the [Frappe Charts](https://frappe.io/charts) library. Frappe Charts is described as being a GitHub-inspired, simple, and modern SVG chart library with zero dependencies.

::: tip HEADS UP
There are **a lot** of options with this library. So while we will be going over _how_ you may go about configuring these options in the context of the Proton component, you will still want to reference the official [documentation](https://frappe.io/charts/docs) for available options.
:::

---

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | **Required**. Unique name value that is used to generate the wrapping elements div ID. | | |
| `title` | `String` | Add a title to the Chart. | | |
| `type` | `String` | Let the chart know what type to render. | line, bar, axis-mixed, pie, percentage, heatmap | bar |
| `height` | `Number` | Set the height of the chart in pixels. | | 300 |
| `colors` | `Array` | Set the colors to be used for each individual unit type, depending on the chart type. | | purple, `#ffa3ef`, light-blue |
| `dataSets` | `Array` | An object of your dataset values you wish to display within your chart. | | |
| `labels` | `Array` | Set the labels used for your dataset. | | |
| `dataPoints` | `Object` | An object of your datapoint values you wish to display within heatmap-type charts. | | |
| `startDate` | `Date` | JavaScript date object for when heatmap chart types should start. | | |
| `endDate` | `Date` | JavaScript date object for when heatmap chart types should end. | | |
| `countLabel` | `String` | Count label used in heatmap chart types. | | Count |
| `discreteDomains` | `Boolean` | Allow for a continous distribution of heat squares (as on GitHub), rather than showing the month-wise separation. | true, false | false |
| `yMarkers` | `Array` | Highlight certain values on the Y axis, shown as dashed lines on the graph. | | |
| `yRegions` | `Array` | 2D counterparts to markers with start and end values, shown as a greyed-out area between the extremes.  |
| `axisOptions` | `Object` | Customize axis options. | | |
| `barOptions` | `Object` | Can be used to set various properties on bar plots. | | |
| `lineOptions` | `Object` | Can be used to set various properties on line plots, turn them into Area Charts and so on. | | |
| `tooltipOptions` | `Object` | Customize the format of the label and value displayed in tooltips. | | |
| `valuesOverPoints` | `Boolean` | Display data values over bars or dots in an axis graph. | true, false | false |
| `maxLegendPoints` | `Number` | Set the maximum number of legend points. | | 20 |
| `maxSlices` | `Number` | Set the maximum number of slices shown in pie charts. | | 20 |
| `isNavigable` | `Boolean` | Makes the chart interactive with arrow keys and highlights the current active data point. | true, false | false |