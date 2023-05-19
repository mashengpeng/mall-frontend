<template>
  <div class="base">
    <el-card>
      <template #header>登录</template>

      <el-form :model="form" label-width="120px">
        <el-form-item label="用户名:" label-width="80px">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码:" label-width="80px">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <router-link to="/register">没有账号?去注册</router-link>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({ username: "", password: "" });
console.log(form);
</script>

<style scoped>
.el-card {
  width: 400px;
  height: 400px;
  margin: 100px auto;
  text-align: center;
}
</style>
