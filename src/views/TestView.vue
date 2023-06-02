<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
import { defineComponent, h } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

export default defineComponent({
  setup() {
    const open = () => {
      ElMessageBox({
        title: "消息",
        message: h("el-button", 123, null),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      })
        .then((action) => {
          ElMessage({
            type: "info",
            message: `action: ${action}`,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return {
      open,
    };
  },
});
</script>

<style></style>
