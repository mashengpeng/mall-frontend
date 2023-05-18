<template>
  <a-card class="login">
    <a-form
      :label-col="{ span: 6 }"
      :model="formState"
      :wrapper-col="{ span: 15 }"
      autocomplete="off"
      name="basic"
      scrollToFirstError
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        :rules="[{ required: true, message: 'Please input your username!' }]"
        label="用户名"
        name="username"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        :rules="[{ required: true, message: 'Please input your password!' }]"
        label="密码"
        name="password"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        :rules="[{ required: true, message: 'Please input your password!' }]"
        label="再次输入密码"
        name="password"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <router-link to="/login">已有账号?去登录</router-link>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button html-type="submit" type="primary">注册</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { ref } from "vue";

const formState = ref({});

const onFinish = function (values) {
  console.log(values);
};

const onFinishFailed = function (values) {
  console.log(values);
};
</script>

<style scoped>
.login {
  width: 500px;
  margin: 100px auto;
}
</style>
