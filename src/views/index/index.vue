<script lang="ts">
export default {
  name: "Index",
};
</script>
<script setup lang="ts">
// 類型定義
import { ref, onMounted, computed } from "vue";
// import type { TableColumnCtx } from "element-plus";
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

// 處理日期動態數據
const dateList = computed(() => {
  // 去重
  return Array.from(new Set(tableData.value.map((item) => item.date))).map(
    (item) => ({
      text: item,
      value: item,
    })
  );
});
// 篩選方法
const filterHandler = (
  value: string,
  row: ITableData
  // column: TableColumnCtx<ITableData>
) => {
  return row.date === value;
};
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
      column-key="date"
      :filters="dateList"
      :filter-method="filterHandler"
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
    >
      <template #default="{ row }">
        <el-tag
          class="ml-2"
          :type="row.check ? 'success' : 'warning'"
        >
          {{ row.check ? "已完成" : "未完成" }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>
