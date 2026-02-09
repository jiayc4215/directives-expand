<template>
  <el-input v-model="source" placeholder="请输入需要复制的内容" style="margin-bottom: 20px">
    <template #prepend>Content</template>
  </el-input>

  <div class="actions">
    <el-button v-copy="source">Click to Copy</el-button>
    <el-button v-copy.toast="source" type="primary">Copy with Toast</el-button>
    <el-button v-copy.success="source" type="success">Copy with Success</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vCopy } from "directives-expand"
const source = ref("这是一段需要复制的文本")
</script>

<style scoped>
.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
