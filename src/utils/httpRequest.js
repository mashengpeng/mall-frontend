import axios from "axios";
import { ElMessage } from "element-plus";

const instance = axios.create({
  baseURL: "http://localhost:88/api/",
  timeout: 10000,
  withCredentials: true,
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log("httpRequest ", response.data);
    return response.data;
  },
  function (error) {
    console.log("httpRequest ", error);
    ElMessage.error({
      message: error,
    });
    return Promise.reject(error);
  }
);

export default instance;
