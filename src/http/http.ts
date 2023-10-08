import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'; // AxiosRequestConfig: 請求參數類型
import { type IHttp } from '../models/index';

// ip, port
// Mock 時關閉
// axios.defaults.baseURL = "http://localhost:5173";

// 請求攔截器
axios.interceptors.request.use((config: AxiosRequestConfig | any) => config);

// 響應攔截器
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  async (err) => {
    return await Promise.reject(err);
  }
);

// 如何定義請求參數類型、響應類型
// 使用interface 定義
// interface IHttp {
//   request<T>(method: string, url: string, params: unknown): Promise<T>;
// }

const http: IHttp = {
  request: async (method, url, params) =>
    await axios({
      method,
      url,
      params
    })
};

export default http;
