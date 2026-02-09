# Quick Start

This section will introduce how to use directives-expand in your project.

## Prerequisites

- Node.js 16.x or higher
- Vue 3.x

## Global Import

If you want to use all directives globally, you can import them completely.

```javascript
// main.js
import { createApp } from "vue"
import DirectivesExpand from "directives-expand"
import App from "./App.vue"

const app = createApp(App)

app.use(DirectivesExpand)
app.mount("#app")
```

## On-demand Import

directives-expand supports on-demand import to reduce the bundle size.

### Manually Import Directive

```javascript
// main.js
import { createApp } from "vue"
import { vCopy } from "directives-expand"
import App from "./App.vue"

const app = createApp(App)

app.directive("copy", vCopy)
app.mount("#app")
```

### Use in Component (Local Directive)

```vue
<template>
  <div>
    <button v-copy="text">Copy Content</button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vCopy as vCopyDirective } from "directives-expand"

const text = ref("Hello Directives Expand!")
// Register directive locally
const vCopy = vCopyDirective
</script>
```
