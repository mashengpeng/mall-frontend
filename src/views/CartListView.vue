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
              <el-link :underline="false" @click="toDetail(item.skuId)"
                >{{ item.title }}
              </el-link>
              <el-checkbox
                v-model="item.check"
                size="large"
                @click.prevent="check(item.skuId, !item.check)"
              ></el-checkbox>
            </div>
          </template>
          <div class="content">
            <el-image
              :fit="'cover'"
              :preview-src-list="[item.image]"
              :src="item.image"
            ></el-image>
            <el-descriptions :column="10" border direction="vertical">
              <el-descriptions-item align="center" label="价格"
                >{{ item.price }}
              </el-descriptions-item>
              <el-descriptions-item align="center" label="数量">
                <el-input-number
                  v-model="item.count"
                  controls-position="right"
                  label="数量"
                  min="0"
                  @change="changeNum(item.skuId, item.count)"
                ></el-input-number>
              </el-descriptions-item>
              <el-descriptions-item align="center" label="总价格"
                >{{ item.totalPrice }}
              </el-descriptions-item>
              <el-descriptions-item
                v-for="(attr, index) in item.skuAttrValues"
                :key="index"
                :label="attr.split('：')[0]"
                align="center"
                >{{ attr.split("：")[1] }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-space>
      <el-divider></el-divider>
      <el-descriptions :column="2" border title="总览">
        <template #extra>
          <el-button size="large" type="primary">结算</el-button>
        </template>
        <el-descriptions-item>
          <template #label> 商品总数</template>
          {{ data.countNum + " 件" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> 商品种数</template>
          {{ data.countType }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> 总价</template>
          {{ data.totalAmount + " 元" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> 折扣</template>
          {{ data.reduce }}
        </el-descriptions-item>
      </el-descriptions>
      <el-backtop target=".el-main"></el-backtop>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import myAxios from "@/utils/httpRequest";
import router from "@/router";
import { ElNotification } from "element-plus";

let isReady = ref(false);

const data = ref(null);

const toDetail = (skuId) => {
  router.push({
    path: `/productDetail/${skuId}`,
  });
};

const check = (skuId, checked) => {
  myAxios
    .post("/cart/check", null, { params: { skuId, checked: checked ? 1 : 0 } })
    .then(
      (res) => {
        ElNotification({
          title: "操作成功",
          type: "success",
          position: "top-left",
        });
        data.value = res.data;
      },
      () => {}
    );
};
const changeNum = (skuId, num) => {
  myAxios.post("/cart/changeNum", null, { params: { skuId, num } }).then(
    (res) => {
      if (num === 0) {
        ElNotification({
          title: "已删除商品",
          type: "info",
          position: "top-left",
        });
      } else {
        ElNotification({
          title: "操作成功",
          type: "success",
          position: "top-left",
        });
      }

      data.value = res.data;
    },
    () => {}
  );
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
