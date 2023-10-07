import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router';

// interface IRouterList {
//   path: string;
//   name?: string;
//   component?: any;
//   [propName: string]: any
// }

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/index',
    name: 'home',
    component: async () => await import('../components/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: async () => await import('../views/index/HomeIndex.vue')
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: async () => await import('../views/monitor/index.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: async () => await import('../views/order/index.vue')
      },
      {
        path: '/twolayer',
        name: 'TwoLayer',
        component: async () =>
          await import('../views/twolayer/TwolayerIndex.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
