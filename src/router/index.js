import { createRouter, createWebHistory } from "vue-router";

const page = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "首页" },
  },
  {
    path: "productList",
    name: "productList",
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
    meta: { title: "购物车" },
  },
  {
    path: "orderConfirm",
    name: "orderConfirm",
    component: () => import("@/views/OrderConfirmView.vue"),
    meta: { title: "订单确认" },
  },
  {
    path: "orderDetail",
    name: "orderDetail",
    component: () => import("@/views/OrderDetailView.vue"),
    meta: { title: "订单详情" },
  },
  {
    path: "orderList",
    name: "orderList",
    component: () => import("@/views/OrderListView.vue"),
    meta: { title: "我的订单" },
  },
  {
    path: "pay",
    name: "pay",
    component: () => import("@/views/PayView.vue"),
    meta: { title: "支付" },
  },
  {
    path: "productDetail/:skuId",
    name: "productDetail",
    component: () => import("@/views/ProductDetailView.vue"),
    meta: { title: "商品详情" },
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
