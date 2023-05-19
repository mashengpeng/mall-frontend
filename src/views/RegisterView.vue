<template>
  <div class="base">
    <el-card>
      <template #header>注册</template>

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
        <el-form-item label="确认密码:" label-width="80px">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
            type="password"
          />
        </el-form-item>
        <el-form-item label="验证码:" label-width="80px">
          <el-input v-model="form.code" placeholder="请输入验证码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">注册</el-button>
        </el-form-item>
      </el-form>
      <router-link to="/login">已有账号?去登录</router-link>
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
