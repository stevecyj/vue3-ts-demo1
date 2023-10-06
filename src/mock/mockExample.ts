import Mock from "mockjs";
import { type INewsList } from "../models/index";

//  基础语法
const data = Mock.mock({
  // 'string|4': 'test'
  string: "@cword(3,8)",
  title: "@ctitle",
  sentence: "@csentence(50,200)",
  content: "@cparagraph", // 随机生成段落
  "number|80": 2, //  生辰指定数字
  "number|1-999": 1, //  随机生成范围数字
  id: "@increment()", // 随机生成增量id
  //  生成姓名+身份证号+地址
  name: "@cname",
  idCard: Mock.Random.id(),
  // idCard: '@id(18)',
  address: "@city(true)",
  guid: Mock.Random.guid(), // 随机uid
  // 生成图片:图片大小、图片背景色、图片前景色、图片格式、图片文字
  img: '@image("300*250","#ff0000","#fff","gif","@cword")',
  // 生成时间
  birth: Mock.Random.datetime("yyyy-MM-dd HH:mm:ss"), // 值是指定格式的日期字符串
  birth2: new Date(Mock.Random.datetime("yyyy-MM-dd HH:mm:ss")), // 值是 Date 类型
  "status|1": ["published", "draft"], // 随机选择1个
  // 数组  指定长度：'data|5'  指定范围'data|5-10'
  "list|1-10": [{ name: "@name()", address: "@city", id: "@increment(2)" }]
});

// console.log("mock data", data);

// mock拦截请求 参数1 url 2 请求类型 3 返回对象或函数
// 设置拦截ajax请求的相应时间
// Mock.setup({
//   timeout: "200-600",
// });

const newsDataList: INewsList = data.list;
console.log("mock newsDataList", newsDataList);
Mock.mock("/news-demo", "get", () => {
  return {
    code: 200,
    message: "success",
    data: newsDataList
  };
});
