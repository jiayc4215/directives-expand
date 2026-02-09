<template>
  <div class="demo-item">
    <p class="demo-label">1. 按钮点击（默认 300ms）：</p>
    <el-button v-debounce="handleBtnClick" type="primary">连续点击我</el-button>
    <p class="demo-result">触法次数: {{ btnCount }}</p>
  </div>

  <div class="demo-item">
    <p class="demo-label">2. 输入框（支持 input 事件，1000ms）：</p>
    <el-input v-model="inputValue" v-debounce:input-1000="handleInput" placeholder="请输入内容观察控制台或下方提示" />
    <p class="demo-result">搜索关键字: {{ searchKey }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vDebounce } from "directives-expand"
const btnCount = ref(0)
const inputValue = ref("")
const searchKey = ref("")

const handleBtnClick = () => {
  btnCount.value += 1
  console.log("默认抖动按钮被点击")
}

const handleInput = () => {
  // val 是原生事件对象，可以通过 val.target.value 获取
  searchKey.value = inputValue.value
  console.log("输入框防抖触发:", inputValue.value)
}
</script>

<style scoped>
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-label {
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}
.demo-result {
  font-size: 14px;
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>
