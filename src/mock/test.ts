import { MockMethod } from "vite-plugin-mock";
import { ITableData } from "../models/index";

const fakeData: ITableData[] = [
  {
    date: "2023-09-28",
    title: "Sample Title 28",
    user: "User A28",
    id: 128,
    check: true,
  },
  {
    date: "2023-09-28",
    title: "Sample Title 1",
    user: "User A",
    id: 1,
    check: true,
  },
  {
    date: "2023-09-27",
    title: "Sample Title 2",
    user: "User B",
    id: 2,
    check: false,
  },
  {
    date: "2023-09-26",
    title: "Sample Title 3",
    user: "User C",
    id: 3,
    check: true,
  },
  {
    date: "2023-09-25",
    title: "Sample Title 4",
    user: "User D",
    id: 4,
    check: false,
  },
  {
    date: "2023-09-24",
    title: "Sample Title 5",
    user: "User E",
    id: 5,
    check: true,
  },
  {
    date: "2023-09-23",
    title: "Sample Title 6",
    user: "User F",
    id: 6,
    check: false,
  },
  {
    date: "2023-09-22",
    title: "Sample Title 7",
    user: "User G",
    id: 7,
    check: true,
  },
  {
    date: "2023-09-21",
    title: "Sample Title 8",
    user: "User H",
    id: 8,
    check: false,
  },
  {
    date: "2023-09-20",
    title: "Sample Title 9",
    user: "User I",
    id: 9,
    check: true,
  },
  {
    date: "2023-09-19",
    title: "Sample Title 10",
    user: "User J",
    id: 10,
    check: false,
  },
];

export default [
  {
    url: "/config1",
    method: "get",
    response: (obj) => {
      return { data: obj };
    },
  },
  {
    url: "/data/query",
    method: "get",
    response: () => {
      return { data: fakeData };
    },
  },
] as MockMethod[];
