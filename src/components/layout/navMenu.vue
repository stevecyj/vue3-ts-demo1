<script setup lang="ts">
import { useMenu } from "./useMenu";
import Icons from "../common/icons.vue";
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
        <Icons :icon="v.icon" />
        <span>{{ v.name }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style></style>
