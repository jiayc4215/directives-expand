<template>
  <div class="demo-no-emoji">
    <div class="demo-item">
      <p>禁止输入表情（Input）：</p>
      <el-input v-model="val1" v-noEmoji placeholder="尝试在这个输入框输入表情" style="width: 100%" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vNoEmoji } from "directives-expand"

const val1 = ref("")
</script>

<style scoped>
.demo-no-emoji {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
