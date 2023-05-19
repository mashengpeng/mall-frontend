<template>
  <div class="container">
    <el-tree
      :data="category"
      :props="defaultProps"
      class="tree"
      @node-click="handleNodeClick"
    />
    <div class="search">
      <el-input
        v-model="input"
        class="input"
        placeholder="搜索你想要的商品吧"
      />
      <el-button class="button" type="primary" @click="onSearch"
        >搜索
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import data from "@/assets/category.js";
import { useRouter } from "vue-router";

const router = useRouter();

interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
  console.log(data);
};
const category = ref(data);

const input = ref();

const defaultProps = {
  children: "children",
  label: "name",
};

const onSearch = () => {
  router.push("/list");
};
</script>

<style>
.tree {
  width: auto;
  font-size: 16px;
  float: left;
}

.search {
  margin-top: 250px;
  margin-left: 500px;
  overflow: hidden;
  float: left;
}

.input {
  float: left;
  width: 500px;
  margin-right: 20px;
}

.button {
  float: left;
  //height: 50px; //width: 100px; //margin-top: 50px;
}

.container {
  padding-top: 150px;
  overflow: auto;
  //display: flex; //justify-content: left;
}
</style>
