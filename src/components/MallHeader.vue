<template>
  <el-menu
    :ellipsis="false"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/login">登录</el-menu-item>
    <el-sub-menu>
      <template #title>
        <el-avatar :size="30" :src="circleUrl" />
        &nbsp;&nbsp;&nbsp;我的
      </template>

      <el-menu-item index="/orderList">我的订单</el-menu-item>
      <el-menu-item index="/cartList">我的购物车</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { reactive, toRefs } from "vue";

const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

const { circleUrl } = toRefs(state);
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
