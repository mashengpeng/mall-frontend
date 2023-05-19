import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:88/api/",
  timeout: 10000,
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status === 200) {
      response.data.data = JSON.parse(response.data.data);
      return response.data;
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error);
    //return Promise.reject(error);
  }
);

export default instance;