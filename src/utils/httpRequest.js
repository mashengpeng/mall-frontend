import axios from "axios";
import { ElMessage } from "element-plus";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:88/api/",
  timeout: 10000,
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log("axios response: ", response.data);
    return response.data;
  },
  function (error) {
    console.log("axios response: ", error);
    ElMessage.error({
      message: error,
    });
    return Promise.reject(error);
  }
);

export default instance;
