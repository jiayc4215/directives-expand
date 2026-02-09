<template>
  <div class="demo-debounce">
    <div class="demo-item">
      <p>点击按钮（默认延迟 300ms）：</p>
      <el-button v-debounce="handleClick" type="primary">默认抖动</el-button>
    </div>

    <p class="count">点击次数: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vDebounce } from "directives-expand"

const count = ref(0)

const handleClick = () => {
  count.value += 1
  console.log("Button clicked!")
}
</script>

<style scoped>
.demo-debounce {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.result {
  font-size: 14px;
  color: #666;
}
.count {
  font-weight: bold;
}
</style>
