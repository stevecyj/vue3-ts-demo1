import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as Icons from '@element-plus/icons-vue';

import './mock';
import { toKebabCase } from '../utils';

const app = createApp(App);

// 全局注册 icon 组件
for (const i in Icons) {
  app.component(`el-icon-${toKebabCase(i)}`, (Icons as any)[i]);
}

app.use(router).mount('#app');
