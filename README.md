# Directives Expand

## 技术交流群 711368818

<img src="https://jiayc4215.github.io/directives-expand/qq.jpg"  width="200" />

## Introduction

### WHAT

`directives-expand` 是一个专为 Vue3 打造的自定义指令扩展库。它提供了一系列实用、高效的指令，旨在简化业务开发中高频使用的交互逻辑。通过简单的指令声明，开发者可以用更少的代码实现更丰富的功能增强。

### WHY

在我们的日常开发中，大量的时间被消耗在重复的交互逻辑控制上，例如：

- 每一个防抖操作都需要手动维护定时器或编写重复的代码逻辑。
- 文本复制功能需要处理复杂的剪切板 API 兼容性及降级方案。
- 限制表情输入等校验逻辑常散落在各个组件的事件处理中。

`directives-expand` 旨在解决这些痛点。它通过将这些常见交互逻辑封装为指令，让功能实现变得更加简洁、声明化，从而显著提升开发效率和代码可维护性。

## Features

- **v-copy**: 智能复制指令，自动处理剪切板 API 及其降级方案，支持一键复制。
- **v-debounce**: 事件防抖指令，内置便捷的防抖控制，防止非法连续触发。
- **v-noEmoji**: 限制输入指令，自动过滤或禁止表情符号输入，适用于严谨的表单场景。

## Quick Start

```bash
pnpm i directives-expand
```

```ts
import { createApp } from "vue"
import DirectivesExpand from "directives-expand"

const app = createApp(App)
app.use(DirectivesExpand)
```

### Basic Usage

#### v-debounce

```vue
<template>
  <button v-debounce="handleSearch">点击防抖 (默认 500ms)</button>
  <button v-debounce:[1000]="handleSearch">自定义 1000ms 防抖</button>
</template>

<script setup>
const handleSearch = () => {
  // 业务逻辑
  console.log("进行搜索...")
}
</script>
```

#### v-copy

```vue
<template>
  <div v-copy="'Hello World'">点击我即可复制文本</div>
</template>
```

## Links

- [指令文档](https://jiayc4215.github.io/directives-expand/)
- [vue3表单渲染器](https://jiayc4215.github.io/form-render/)
- [Easy ElPlus](https://jiayc4215.github.io/easy-elplus/)

## Inspiration

Thanks to [Vue.js](https://vuejs.org/)
