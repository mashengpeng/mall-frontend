import { createRouter, createWebHistory } from "vue-router";

const page = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "首页" },
  },
  {
    path: "list",
    name: "list",
    component: () => import("@/views/ProductListView.vue"),
    meta: { title: "商品列表" },
  },
  {
    path: "register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
    meta: { title: "注册" },
  },
  {
    path: "login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: { title: "登陆" },
  },
  {
    path: "cartList",
    name: "cartList",
    component: () => import("@/views/CartListView.vue"),
    meta: { title: "购物车列表" },
  },
  {
    path: "test",
    name: "test",
    component: () => import("@/views/TestView.vue"),
  },
];

const routes = [
  {
    path: "/",
    component: () => import("@/views/IndexView.vue"),
    children: page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
