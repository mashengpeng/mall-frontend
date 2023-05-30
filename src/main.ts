import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import "normalize.css/normalize.css";
import VueCookies from "vue3-cookies";

createApp(App)
  .use(VueCookies)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
