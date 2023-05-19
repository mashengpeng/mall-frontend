<template>
  <el-container>
    <el-header>
      <MallHeader></MallHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>
import MallHeader from "@/components/MallHeader.vue";
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>

<style scoped>
html,
.el-container {
  height: 100vh;
  width: 100%;
}

.el-header {
  padding: 0 200px;
}

.el-main {
  padding: 50px 200px;
}
</style>
