# Copy 复制

一键复制文本内容到剪贴板。

## 基础用法

<preview path="../demo/copy.vue" title="Copy 基础示例" description="展示 v-copy 指令的各种用法"></preview>

## API

### Value

| 参数  | 说明               | 类型     | 默认值 |
| :---- | :----------------- | :------- | :----- |
| value | 需要复制的文本内容 | `string` | -      |

### Modifiers

| 修饰符   | 说明                           |
| :------- | :----------------------------- |
| .success | 复制成功后显示提示框           |
| .fail    | 复制失败后显示提示框           |
| .toast   | 无论是成功还是失败都显示提示框 |
