<template>
  <div class="base">
    <el-aside>
      <el-scrollbar>
        <el-skeleton v-if="category.length === 0" :rows="5" />
        <el-tree
          v-else
          :data="category"
          :props="defaultProps"
          class="tree"
          @node-click="handleNodeClick"
        />
      </el-scrollbar>
    </el-aside>
    <el-main>
      <div class="search">
        <el-input
          v-model="input.keyword"
          class="input"
          placeholder="搜索你想要的商品吧"
        />
        <el-button class="button" type="primary" @click="onSearch"
          >{{ input.keyword === "" ? "随便逛逛" : "搜索" }}
        </el-button>
      </div>
      <el-carousel :interval="4000" height="400px" type="card">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 justify="center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import data from "@/assets/category.js";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import myAxios from "@/utils/httpRequest";

const router = useRouter();

const handleNodeClick = (data) => {
  if (data.catLevel === 3 || data.children === null) {
    input.value.catalog3Id = data.catId;
    console.log(input.value, data);
    router.push({ name: "productList", query: input.value });
  }
};
const category = ref([]);

const input = ref({
  keyword: "",
  catalog3Id: null,
});
const loadData = () => {
  myAxios.get("/product/category/list/tree").then(
    (res) => {
      category.value = res.data;
    },
    () => {}
  );
};
loadData();
onBeforeRouteUpdate(() => {
  loadData();
});

const defaultProps = {
  children: "children",
  label: "name",
};

const onSearch = () => {
  router.push({ name: "productList", query: input.value });
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.base {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
}

.el-aside {
  flex-grow: 1;
  width: 0;
}

.el-main {
  flex-grow: 3;
  width: 0;
}

.search {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.el-input {
  height: 50px;
  width: 400px;
  margin-right: 20px;
}

.el-button {
  height: 50px;
  width: 80px;
}
</style>
