---
title: Tabs
---

# Tabs

## Default
```html
<p-tabs>
    <p-tab name="Pictures">
        "Pictures" tab content.
    </p-tab>

    <p-tab name="Music">
        "Music" tab content.
    </p-tab>
    
    <p-tab name="Videos">
        "Videos" tab content.
    </p-tab>
    
    <p-tab name="Documents">
        "Documents" tab content
    </p-tab>
</p-tabs>
```

## Tabs
Tabs require only a unique `name` attribute. Name values will automatically be converted to a URL hash for easy sharing of URLs with the currently active tab.

```html
<p-tab name="Hello World">
    Foobar
</p-tab>
```

### Default Active Tab
Assign the `active` prop on the tab you wish to be the tab opened by default. This is only taken into consideration if there is not an active hash in the URL. If the active prop is not passed and an active hash is not present in the URL, the first tab will default as the active tab on page load.

```html
<p-tabs>
    <p-tab name="Pictures">
        "Pictures" tab content.
    </p-tab>

    <p-tab name="Music" active>
        The "Music" tab will be active by default.
    </p-tab>
</p-tabs>
```

## Tab Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | The name of the tab. | | |
| `active` | `Boolean` | Determine the default active tab to be open on page load. | | |

## Tab Slots
| Name | Description |
|------|-------------|
| `default` | Main body of the tab. |