<script setup lang="ts">
// 類型定義
import { ref, onMounted } from "vue";
import axios from "../../http/http";
import { ITableData } from "../../models/index";

// const tableData = ref<ITableData[]>([]);
// onMounted(async() => {
//   let {data}= await axios.request<{data:ITableData[]}>('get', '/data/query')
// }),

// 表格数据類型添加, ITableData[] | Array<ITableData>
const tableData: Array<ITableData> = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

onMounted(async() => {
  console.log("mounted");
  let res=await axios.request<{data:ITableData[]}>('get', '/config1?name=ithome&id=1')
  console.log(res)
});
</script>

<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180"
    />
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    />
    <el-table-column
      prop="address"
      label="地址"
    />
  </el-table>
</template>
