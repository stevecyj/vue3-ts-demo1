import Mock from 'mockjs';
import { type ITableData } from '../models/index';
import './mockExample';
// console.log("mock", Mock);

// mock拦截请求 参数1 url 2 请求类型 3 返回对象或函数
// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

const fakeData: ITableData[] = [
  {
    date: '2023-09-28',
    title: 'Sample Title 28',
    user: 'User A28',
    id: 128,
    check: true
  },
  {
    date: '2023-09-28',
    title: 'Sample Title 1',
    user: 'User A',
    id: 1,
    check: true
  },
  {
    date: '2023-09-27',
    title: 'Sample Title 2',
    user: 'User B',
    id: 2,
    check: false
  },
  {
    date: '2023-09-26',
    title: 'Sample Title 3',
    user: 'User C',
    id: 3,
    check: true
  },
  {
    date: '2023-09-25',
    title: 'Sample Title 4',
    user: 'User D',
    id: 4,
    check: false
  },
  {
    date: '2023-09-24',
    title: 'Sample Title 5',
    user: 'User E',
    id: 5,
    check: true
  },
  {
    date: '2023-09-23',
    title: 'Sample Title 6',
    user: 'User F',
    id: 6,
    check: false
  },
  {
    date: '2023-09-22',
    title: 'Sample Title 7',
    user: 'User G',
    id: 7,
    check: true
  },
  {
    date: '2023-09-21',
    title: 'Sample Title 8',
    user: 'User H',
    id: 8,
    check: false
  },
  {
    date: '2023-09-20',
    title: 'Sample Title 9',
    user: 'User I',
    id: 9,
    check: true
  },
  {
    date: '2023-09-19',
    title: 'Sample Title 10',
    user: 'User J',
    id: 10,
    check: false
  }
];

Mock.mock('/data/query', 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: fakeData
  };
});
