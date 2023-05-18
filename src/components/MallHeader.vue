<template>
  <el-header class="head">
    <el-row>
      <el-col :span="3">
        <router-link style="color: #8e354a" to="/">在线商城</router-link>
      </el-col>
      <el-col :offset="12" :span="3">
        <router-link style="color: #8e354a" to="/login">登录</router-link>
      </el-col>
      <el-col :span="3">
        <router-link style="color: #8e354a" to="/register">注册</router-link>
      </el-col>
      <el-col :span="3">
        <router-link style="color: #8e354a" to="/test">test</router-link>
      </el-col>
    </el-row>
  </el-header>
  <router-view class="view"></router-view>
</template>

<script setup></script>

<style>
.head {
  height: 50px;
  font-size: 20px;
  background-color: #fedfe1;
}

.view {
  margin: 0 200px;
}
</style>
