<template>
  <a-card class="login">
    <a-tabs
      v-model:activeKey="activeKey"
      centered
      type="line"
      tabPosition="top"
      tabBarGutter="166px"
    >
      <a-tab-pane key="login" tab="登录">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 15 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          scrollToFirstError
        >
          <a-form-item
            label="用户名"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember"
              >Remember me
            </a-checkbox>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="register" tab="注册">注册</a-tab-pane>
    </a-tabs>
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
