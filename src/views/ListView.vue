<template>
  <el-row>
    <el-col
      v-for="(product, index) in data.product"
      :key="index"
      :offset="2"
      :span="4"
    >
      <el-card :body-style="{ padding: '0px' }" class="card">
        <el-image
          :preview-src-list="[product.skuImg]"
          :src="product.skuImg"
          class="image"
        />

        <el-link :underline="false" class="title" @click="productOnClick"
          >{{ product.skuTitle }}
        </el-link>
        <div class="price">{{ "¥ " + product.skuPrice }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import myAxios from "@/utils/httpRequest";

const data = ref({
  product: [],
});

myAxios.post("/search/list").then((res) => {
  data.value = res.data;
  console.log(res.data);
});

const productOnClick = (e) => {
  console.log(e);
};
</script>

<style scoped>
.card {
  margin-bottom: 30px;
  height: 400px;
}

.title {
  padding: 14px;
}

.price {
  padding: 14px;

  vertical-align: bottom;
}
</style>
