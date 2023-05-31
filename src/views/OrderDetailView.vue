<template>
  <el-skeleton v-if="!isReady" />
  <div v-else class="base">
    <el-empty v-if="!data" description="空空如也" />
    <div v-else>{{ data }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import myAxios from "@/utils/httpRequest";

let isReady = ref(false);

const data = ref(null);
const loadData = () => {
  isReady = false;
  myAxios.post("/cart/list").then(
    (res) => {
      console.log(res);
      data.value = res.data;
    },
    () => {}
  );

  isReady = true;
};

loadData();
</script>

<style scoped></style>
