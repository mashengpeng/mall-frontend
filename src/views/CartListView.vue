<template>
  <el-skeleton v-if="!isReady" />
  <div v-else class="base">
    <el-empty
      v-if="!data || data.items.length === 0"
      description="空空如也,快去加购吧"
    />
    <div v-else>
      <el-space :fill="true" :size="30">
        <el-card v-for="item in data.items" :key="item.skuId">
          <template #header>
            <div class="title">
              <el-link :underline="false" @click="toDetail(item.skuId)">{{
                item.title
              }}</el-link>

              <el-switch v-model="item.check" @click="check"></el-switch>
            </div>
          </template>
          <div class="content">
            <el-image
              :fit="'cover'"
              :preview-src-list="[item.image]"
              :src="item.image"
            ></el-image>
            <el-descriptions
              :column="4"
              border
              direction="vertical"
              title="商品信息"
            >
              <el-descriptions-item label="价格"
                >{{ item.price }}
              </el-descriptions-item>
              <el-descriptions-item label="总价格"
                >{{ item.totalPrice }}
              </el-descriptions-item>
              <el-descriptions-item
                v-for="(attr, index) in item.skuAttrValues"
                :key="index"
                :label="attr.split('：')[0]"
                >{{ attr.split("：")[1] }}
              </el-descriptions-item>
            </el-descriptions>
            <el-input-number
              v-model="item.count"
              label="数量"
              @change="handleChange"
            ></el-input-number>
          </div>
        </el-card>
      </el-space>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import myAxios from "@/utils/httpRequest";
import router from "@/router";

let isReady = ref(false);

const data = ref(null);

const toDetail = (skuId) => {
  router.push({
    path: `/productDetail/${skuId}`,
  });
};

const check = () => {
  console.log(data);
};

const loadData = () => {
  isReady = false;
  myAxios.post("/cart/list").then(
    (res) => {
      data.value = res.data;
    },
    () => {}
  );

  isReady = true;
};

loadData();
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  display: flex;
  justify-content: space-between;
}

.el-card {
  height: 250px;
}

.el-image {
  width: 150px;
  height: 150px;
}
</style>
