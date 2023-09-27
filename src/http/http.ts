import axios from "axios";

// 請求攔截器
axios.interceptors.request.use((config) => config);

// 響應攔截器
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
