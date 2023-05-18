import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/MallHeader.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("@/views/IndexView.vue"),
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

// const routes = [
//   {
//     path: "/",
//     name: "index",
//     component: () => import("@/views/IndexView.vue"),
//   },
//   {
//     path: "/tree",
//     name: "Tree",
//     component: () => import("@/views/RegisterView.vue"),
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: () => import("@/views/LoginView.vue"),
//   },
//   {
//     path: "/test",
//     name: "test",
//     component: () => import("@/views/TestView.vue"),
//   },
// ];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
