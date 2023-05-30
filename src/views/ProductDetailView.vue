<template>
  <el-empty v-if="!data"></el-empty>
  <div v-else class="base">
    <el-image :fit="fit" :src="data.info.skuDefaultImg"></el-image>
    {{ data }}
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import myAxios from "@/utils/httpRequest";
import { ref } from "vue";

const route = useRoute();
const data = ref(null);
myAxios.post(`/product/${route.params.skuId}`).then(
  (res) => {
    data.value = res.data;
  },
  () => {}
);
</script>

<style scoped></style>
