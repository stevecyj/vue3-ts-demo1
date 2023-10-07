<script setup lang="ts">
import NavMenu from './navMenu.vue';
</script>

<template>
  <div
    id="module"
    class="common-layout"
  >
    <el-container>
      <!-- 左側導航 -->
      <NavMenu />
      <el-container>
        <!-- 頭部 -->
        <el-header>Header</el-header>
        <!-- 主體 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
