<template>
  <el-header class="head">
    <el-row>
      <el-col :offset="1" :span="2">
        <router-link class="link" to="/">在线商城</router-link>
      </el-col>
      <el-col :offset="12" :span="2">
        <router-link class="link" to="/login">登录</router-link>
      </el-col>
      <el-col :span="2">
        <router-link class="link" to="/register">注册</router-link>
      </el-col>
      <el-col :span="2">
        <router-link class="link" to="/test">test</router-link>
      </el-col>
    </el-row>
  </el-header>
  <router-view class="view"></router-view>
</template>

<script setup></script>

<style>
.head {
  font-size: 20px;
  border-bottom: 1px solid gray;
}

.link {
  display: block;
  text-align: center;
  border-radius: 50px;
  height: 59px;
  line-height: 59px;
}

.link:hover {
  background-color: ghostwhite;
}

.view {
  margin: 0 200px;
}
</style>
