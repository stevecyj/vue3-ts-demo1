import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

// interface IRouterList {
//   path: string;
//   name?: string;
//   component?: any;
//   [propName: string]: any
// }

const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/layout/index.vue"),
    children:[
      {
        path: "/index",
        name: "index",
        component: () => import("../views/index/index.vue"),
      },
      {
        path: "/monitor",
        name: "monitor",
        component: () => import("../views/monitor/index.vue"),
      },
      {
        path: "/order",
        name: "order",
        component: () => import("../views/order/index.vue"),
      },
      {
        path: "/census",
        name: "census",
        component: () => import("../views/census/index.vue"),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
