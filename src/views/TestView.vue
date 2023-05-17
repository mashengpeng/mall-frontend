<template>SADF</template>

<script setup>
import myAxios from "@/utils/httpRequest.js";
import { onMounted } from "vue";

onMounted(() => {
  const data = {
    login_account: "saf",
    password: "dfasdf",
  };

  myAxios.post("/member/member/login", data).then((res) => {
    console.log(res);
  });
});
</script>
<style></style>
