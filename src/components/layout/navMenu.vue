<script setup lang='ts'>
import { rec, reactive } from 'vue'
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

const menuItems = reactive([
  { name: '首頁', url: '/index', icon: Document },
  { name: '監控', url: '/monitor', icon: Location },
  { name: '訂單', url: '/order', icon: Setting },
  { name: '統計', url: '/census', icon: IconMenu },
])
</script>

<template>
  <el-aside width="200px">
    <el-menu default-active="/index"
             router>
      <el-menu-item :index='v.url'
                    v-for='v in menuItems'
                    :key='v.url'>
        <el-icon>
          <component :is='v.icon' />
        </el-icon>
        <span>{{ v.name }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style></style>