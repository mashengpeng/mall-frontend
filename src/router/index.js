import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/IndexView.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "list",
        name: "list",
        component: () => import("@/views/ListView.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/RegisterView.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/LoginView.vue"),
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/TestView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
