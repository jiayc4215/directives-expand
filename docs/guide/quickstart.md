# 快速开始

本节将介绍如何在项目中使用 directives-expand。

## 前置要求

- Node.js 16.x 或更高版本
- Vue 3.x

## 完整引入

如果你想在全局使用所有指令，可以完整引入。

```javascript
// main.js
import { createApp } from "vue"
import DirectivesExpand from "directives-expand"
import App from "./App.vue"

const app = createApp(App)

app.use(DirectivesExpand)
app.mount("#app")
```

## 按需引入

directives-expand 支持按需引入，可以减小打包体积。

### 手动引入指令

```javascript
// main.js
import { createApp } from "vue"
import { vCopy } from "directives-expand"
import App from "./App.vue"

const app = createApp(App)

app.directive("copy", vCopy)
app.mount("#app")
```

### 在组件中使用 (局部指令)

```vue
<template>
  <div>
    <button v-copy="text">复制内容</button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vCopy as vCopyDirective } from "directives-expand"

const text = ref("Hello Directives Expand!")
// 局部注册指令
const vCopy = vCopyDirective
</script>
```

## 开始使用

现在你可以开始使用 directives-expand 了！查看详细的指令文档了解更多用法：

- [v-copy 复制指令](/directives/v-copy)
