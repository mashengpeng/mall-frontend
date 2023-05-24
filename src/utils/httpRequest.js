import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:88/api/",
  timeout: 10000,
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log("httpRequest ", response.data);
    return response.data;
  },
  function (error) {
    console.log("httpRequest ", error);
    return Promise.reject(error);
  }
);

export default instance;
