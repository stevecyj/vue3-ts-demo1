<script setup lang="ts">
// import { rec, reactive } from 'vue'
import { useMenu } from "./useMenu";
const { menuItems } = useMenu();
</script>

<template>
  <el-aside width="200px">
    <el-menu
      default-active="/index"
      router
    >
      <el-menu-item
        v-for="v in menuItems"
        :index="v.url"
        :key="v.url"
      >
        <el-icon>
          <component :is="v.icon" />
        </el-icon>
        <span>{{ v.name }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style></style>
