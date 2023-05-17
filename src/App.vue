<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3">
          <router-link to="/">首页</router-link>
        </el-col>
        <el-col :span="3" :offset="12">
          <router-link to="/tree">树</router-link>
        </el-col>
        <el-col :span="3">
          <router-link to="/login">登录</router-link>
        </el-col>
        <el-col :span="3">
          <router-link to="/test">test</router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="js" setup></script>

<style>
el-header {
  background-color: aqua;
}
</style>
