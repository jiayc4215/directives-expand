# Debounce 防抖

对触发频率较高的事件进行防抖处理，提升性能并减少不必要的重复操作。

## 基础用法

<preview path="../demo/debounce.vue" title="Debounce 基础示例" description="展示 v-debounce 指令的各种用法"></preview>

## API

### Value

| 参数  | 说明                 | 类型       | 默认值 |
| :---- | :------------------- | :--------- | :----- |
| value | 防抖后执行的回调函数 | `function` | -      |

### Arguments

| 参数 | 说明                                         | 类型     | 默认值      |
| :--- | :------------------------------------------- | :------- | :---------- |
| arg  | 指定事件名称和延迟时间，格式为 `event-delay` | `string` | `click-300` |

> 例如：`v-debounce:input-500` 表示在 `input` 事件触发后延迟 500ms 执行。
