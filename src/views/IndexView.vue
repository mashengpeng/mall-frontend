<template>
  <div class="container">
    <el-tree
      :data="category"
      :props="defaultProps"
      class="tree"
      @node-click="handleNodeClick"
    />
    <el-input v-model="input" class="input" placeholder="搜索你想要的商品吧" />
    <el-button class="button" type="primary" @click="onSearch">搜索</el-button>
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
  margin-top: 50px;
  width: 300px;
}

.input {
  height: 50px;
  width: 500px;
  margin-left: 200px;
  margin-top: 50px;
  margin-right: 50px;
}

.button {
  height: 50px;
  width: 100px;
  margin-top: 50px;
}

.container {
  display: flex;
  justify-content: left;
}
</style>
