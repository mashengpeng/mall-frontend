<template>
  <el-empty v-if="!data"></el-empty>
  <div v-else class="base">
    <el-image
      :src="data.info.skuDefaultImg"
      class="image"
      fit="contain"
    ></el-image>
    <div class="info">
      <h2>{{ data.info.skuTitle }}</h2>
      <br />
      <h3>{{ data.info.skuSubtitle }}</h3>
      <el-divider></el-divider>
      <h1>{{ "￥" + data.info.price }}</h1>

      <el-form :model="form" label-width="80px">
        <el-form-item
          v-for="attr in data.saleAttr"
          :key="attr.attrId"
          :label="'选择' + attr.attrName"
        >
          <el-radio-group
            v-model="form[`attrId${attr.attrId}`]"
            @change="attrSelect(attr, $event)"
          >
            <el-radio-button
              v-for="(item, index) in attr.attrValues"
              :key="index"
              :label="item.attrValue"
            ></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-input-number
            v-model="form.number"
            :max="9999"
            :min="1"
          ></el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="addCart">添加购物车</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import myAxios from "@/utils/httpRequest";
import { ref } from "vue";
import router from "@/router";
import { ElNotification } from "element-plus";

const route = useRoute();
const data = ref(null);
const form = ref({ number: 1 });
const addCart = () => {
  myAxios
    .get(`/cart/addCartItem/`, {
      params: {
        num: form.value.number,
        skuId: route.params.skuId,
      },
    })
    .then(
      () => {
        ElNotification({
          title: "添加购物车成功",
          message: `${form.value.number}个${data.value.info.skuTitle}`,
          type: "success",
          position: "top-left",
        });
      },
      () => {}
    );
};
const attrSelect = () => {
  // console.log(`attrId${a.attrId}`, b);
  // form.value[`attrId${a.attrId}`] = b;
  // console.log(form.value);
  let setList = [];
  //console.log(form);
  for (let attr of data.value.saleAttr) {
    let currentAttrValue = form.value[`attrId${attr.attrId}`];
    //console.log(currentAttrValue);
    for (let attrValuesKey of attr.attrValues) {
      //console.log(attrValuesKey);
      if (attrValuesKey.attrValue == currentAttrValue) {
        let set = new Set();
        for (let skuId of attrValuesKey.skuIds.split(",")) {
          set.add(skuId);
        }
        setList.push(set);
      }
    }
  }
  const set = setList.reduce((acc, set) => {
    return new Set([...acc].filter((x) => set.has(x)));
  });
  //console.log(`跳转页面:/productDetail/${set.values().next().value}`);
  router.push({
    path: `/productDetail/${set.values().next().value}`,
  });
};

const loadData = (skuId) => {
  // data.value = null;
  form.value.number = 1;
  // console.log(`请求/product/${route.params.skuId}`);
  myAxios.post(`/product/${skuId}`).then(
    (res) => {
      data.value = res.data;
      for (let attr of res.data.saleAttr) {
        //console.log(attr);
        for (let attrValuesKey of attr.attrValues) {
          //console.log(attrValuesKey);
          let flag = false;
          for (let skuId of attrValuesKey.skuIds.split(",")) {
            if (skuId == res.data.info.skuId) {
              flag = true;
              break;
            }
          }
          if (flag) {
            //console.log(attrValuesKey.attrValue);
            form.value[`attrId${attr.attrId}`] = attrValuesKey.attrValue;
            break;
          }
        }
      }
    },
    () => {}
  );
};
loadData(route.params.skuId);
onBeforeRouteUpdate((to, from) => {
  if (to.fullPath === from.fullPath) {
    return;
  }
  loadData(to.params.skuId);
});
</script>

<style scoped>
.base {
  display: flex;
  align-items: flex-start;
}

.image,
.info {
  width: 0;
}

.image {
  flex-grow: 1;
}

.info {
  flex-grow: 2;
}
</style>
