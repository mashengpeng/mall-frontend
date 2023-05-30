<template>
  <div class="base">
    <el-aside>
      <el-scrollbar>
        <el-tree
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
          >搜索
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
import data from "@/assets/category.js";
import { useRouter } from "vue-router";

const router = useRouter();

const handleNodeClick = (data) => {
  if (data.catLevel === 3 || data.children === null) {
    input.value.catalog3Id = data.catId;
    console.log(input.value, data);
    router.push({ name: "productList", query: input.value });
  }
};
const category = ref(data);

const input = ref({
  keyword: "",
  catalog3Id: null,
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
  width: auto;
}

.el-main {
  flex-grow: 10;
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
