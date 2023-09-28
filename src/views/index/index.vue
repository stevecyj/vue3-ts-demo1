<script lang='ts'>
export default {
  name: "Index"
}
</script>
<script setup lang="ts">
// 類型定義
import { ref, onMounted } from "vue";
import axios from "../../http/http";
import { ITableData } from "../../models/index";

const tableData = ref<ITableData[]>([]); // 表格數據

onMounted(async () => {
  let { data } = await axios.request<{ data: ITableData[] }>(
    "get",
    "/data/query"
  );
  console.log("mounted", data);
  tableData.value = data;
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
      prop="title"
      label="標題"
      width="180"
    />
    <el-table-column
      prop="user"
      label="用戶"
    />
    <el-table-column
      prop="id"
      label="識別碼"
    />
    <el-table-column
      prop="check"
      label="狀態"
    />
  </el-table>
</template>
