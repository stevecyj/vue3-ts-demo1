import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';
import router from './router';

import './mock';

createApp(App).use(router).mount('#app');
