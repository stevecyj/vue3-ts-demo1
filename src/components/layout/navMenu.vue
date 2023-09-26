<script setup lang='ts'>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-aside width="200px">
    <el-menu default-active="/index" router>
      <el-menu-item index="/index">
        <el-icon><icon-menu /></el-icon>
        <span>1111</span>
      </el-menu-item>
      <el-menu-item index="/monitor">
        <el-icon><icon-menu /></el-icon>
        <span>2222</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <el-icon><icon-menu /></el-icon>
        <span>3333</span>
      </el-menu-item>
      <el-menu-item index="/census">
        <el-icon><icon-menu /></el-icon>
        <span>4444</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style></style>