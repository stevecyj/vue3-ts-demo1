<script setup lang="ts">
import { defineProps } from "vue";

// 泛型
const { icon } = defineProps<{
  icon: any;
}>();
</script>

<template>
  <el-icon>
    <component :is="icon" />
  </el-icon>
</template>

<style scoped></style>
