<script setup lang='ts'>
import NavMenu from './navMenu.vue'
</script>

<template>
  <div class="common-layout" id='module'>
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