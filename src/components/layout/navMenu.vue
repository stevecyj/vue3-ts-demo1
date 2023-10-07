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
      <template
        v-for="v in menuItems"
        :key="v.url"
      >
        <el-menu-item
          v-if="!v.children || !v.children.length"
          :index="v.url"
        >
          <Icons :icon="v.icon" />
          <span>{{ v.name }}</span>
        </el-menu-item>
        <el-sub-menu v-if="v.children && v.children.length">
          <template #title>
            <Icons :icon="v.icon" />
            <span>{{ v.name }}</span>
          </template>
          <el-menu-item
            v-for="item in v.children"
            :key="item.url"
            :index="item.url"
          >
            <Icons :icon="item.icon" />
            <span>
              {{ item.name }}
            </span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>

<style></style>
