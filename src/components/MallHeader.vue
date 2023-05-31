<template>
  <el-menu
    :ellipsis="false"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item v-if="!userInfo" index="/login">登录</el-menu-item>
    <el-sub-menu v-else>
      <template #title>
        <el-avatar :size="30" :src="circleUrl" />
        &nbsp;&nbsp;&nbsp;{{ userInfo.username }}
      </template>

      <el-menu-item index="/orderList">我的订单</el-menu-item>
      <el-menu-item index="/cartList">我的购物车</el-menu-item>
      <el-menu-item index="/" @click="loginOut">退出登陆</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { useCookies } from "vue3-cookies";
import myAxios from "@/utils/httpRequest";

const { cookies } = useCookies();

const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

const { circleUrl } = toRefs(state);
const userInfo = ref(null);
// console.log(cookies.keys());
const loginOut = () => {
  //sessionStorage.removeItem("userInfo");
  cookies.set("MALLSESSION", "");
  myAxios.post("/auth/logOut").then(
    () => {},
    () => {}
  );
};
onBeforeRouteUpdate(() => {
  userInfo.value = JSON.parse(sessionStorage.getItem("userInfo"));
  // console.log(userInfo);
});
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
