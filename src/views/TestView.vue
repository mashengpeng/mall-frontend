<template>
  <div class="a">
    <div class="b"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // const data = {
  //   login_account: "saf",
  //   password: "dfasdf",
  // };
  // myAxios.post("/member/member/login", data).then((res) => {
  //   console.log(res);
  // });
});
</script>
<style>
.a {
  width: 200px;
  height: 200px;
  background-color: red;
  text-align: center;
}

.b {
  width: 100px;
  height: 100px;
  background-color: blue;
  display: inline-block;
}
</style>
