# Debounce

Debounce events with high trigger frequency to improve performance and reduce unnecessary repeated operations.

## Basic Usage

<preview path="../../demo/debounce.vue" title="Debounce Basic Example" description="Show various usages of v-debounce directive"></preview>

## API

### Value

| Parameter | Description              | Type       | Default |
| :-------- | :----------------------- | :--------- | :------ |
| value     | Callback function to run | `function` | -       |

### Arguments

| Parameter | Description                                               | Type     | Default     |
| :-------- | :-------------------------------------------------------- | :------- | :---------- |
| arg       | Specifies the event name and delay, format: `event-delay` | `string` | `click-300` |

> Example: `v-debounce:input-500` means a 500ms delay after the `input` event is triggered.
