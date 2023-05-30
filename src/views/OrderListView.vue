<template>
  <el-skeleton v-if="!isReady" />
  <div v-else class="base">
    <el-empty v-if="!data" description="空空如也" />
    <div v-else></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let isReady = ref(false);

const data = ref(null);
const loadData = () => {
  isReady = false;
  // myAxios.post("/search/list", null, { params: params.value }).then(
  //   (res) => {
  //     console.log(res);
  //     data.value = res.data;
  //   },
  //   () => {}
  // );
  isReady = true;
};

loadData();
</script>

<style scoped></style>
