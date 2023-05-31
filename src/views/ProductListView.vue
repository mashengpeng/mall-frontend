<template>
  <el-skeleton v-if="!isReady" />
  <div v-else class="base">
    <el-empty v-if="!data" description="没有数据,请检查网络" />
    <div v-else>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="catalog in data.catalogs"
          :key="catalog.catalogId"
          >{{ catalog.catalogName }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider />
      <el-row>
        <el-col :span="4"> 品牌:</el-col>
        <el-col v-for="brand in data.brands" :key="brand.brandId" :span="4">
          <el-image :src="brand.brandImg"></el-image>
        </el-col>
        <el-divider border-style="hidden" />
      </el-row>
      <el-row v-for="attr in data.attrs" :key="attr.attrId">
        <el-col :span="4"> {{ attr.attrName }}:</el-col>
        <el-col v-for="(e, index) in attr.attrValue" :key="index" :span="4"
          >{{ e }}
        </el-col>
        <el-divider border-style="hidden" />
      </el-row>

      <el-divider />
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

            <el-link :underline="false" @click="productOnClick(product)">
              <div v-html="product.skuTitle"></div>
            </el-link>
            <div class="price">{{ "¥ " + product.skuPrice }}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-divider />
      <el-pagination
        v-model:current-page="data.pageNum"
        :default-page-size="16"
        :total="data.total"
        background
        layout="prev, pager, next"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import myAxios from "@/utils/httpRequest";

let isReady = ref(false);
// const data = ref({
//   product: [],
//   pageNum: 1,
//   totalPages: 3,
// });
const data = ref(null);
const route = useRoute();
const router = useRouter();
const params = ref({});

params.value = { ...route.query };

const loadData = () => {
  isReady = false;
  myAxios.post("/search/list", null, { params: params.value }).then(
    (res) => {
      console.log(res);
      data.value = res.data;
    },
    () => {}
  );
  isReady = true;
};

loadData();

const pageChange = (num) => {
  params.value.pageNum = num;
  console.log(route.fullPath, num, params.value);

  router.push({
    name: "productList",
    //需要"深拷贝",不然认对象地址一样
    query: { ...params.value },
  });
};

const productOnClick = (item) => {
  router.push({
    path: `/productDetail/${item.skuId}`,
  });
};

onBeforeRouteUpdate((to, from) => {
  if (to.fullPath === from.fullPath) {
    return;
  }
  loadData();
});
</script>

<style scoped>
.base {
  height: 100%;
}

.el-pagination {
  justify-content: center;
}
</style>
