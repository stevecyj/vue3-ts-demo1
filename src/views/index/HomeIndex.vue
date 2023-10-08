<script setup lang="ts">
// 類型定義
import { ref, reactive, onMounted, computed } from 'vue';
import axios from '../../http/http';
import {
  type ITableData,
  type INewsList,
  type IAddForm,
  type IReportAccount
} from '../../models/index';

const tableData = ref<ITableData[]>([]); // 表格數據
const dialogFormVisible = ref<boolean>(false); // 彈框顯示
const form = ref<IAddForm>({ user: '', title: '' });
const formLabelWidth = '140px';

const getNewsDemo = async (): Promise<void> => {
  const { data } = await axios.request<{ data: INewsList[] }>(
    'get',
    '/news-demo'
  );
  console.log('getNewsDemo', data);
};

const getTableData = async (): Promise<void> => {
  const { data } = await axios.request<{ data: ITableData[] }>(
    'get',
    '/data/query'
  );
  tableData.value = data;
};

// query string
const getReportAccountParams = reactive<IReportAccount>({
  game_id: 1,
  page: 1
});
const getReportAccount = async (): Promise<void> => {
  const { data } = await axios.request<{ data: string }>(
    'post',
    '/fishadmin/web/index/index',
    getReportAccountParams
  );
  console.log('getReportAccount', data);
};

onMounted(async () => {
  await getTableData();
  await getNewsDemo();
  await getReportAccount();
});

// 處理日期動態數據
const dateList = computed(() => {
  // 去重
  return Array.from(new Set(tableData.value.map((item) => item.date))).map(
    (item) => ({
      text: item,
      value: item
    })
  );
});
// 篩選方法
const filterHandler = (value: string, row: ITableData): boolean => {
  return row.date === value;
};

// 新增、編輯
const setData = (type: string, row: IAddForm): void => {
  dialogFormVisible.value = true;
  type === 'add'
    ? (form.value = { user: '', title: '' })
    : (form.value = { user: row.user, title: row.title });
};
</script>

<template>
  <div>
    <el-button
      type="success"
      @click="setData('add', { user: '', title: '' })"
      >新增</el-button
    >
  </div>
  <el-icon :size="20">
    <el-icon-edit />
  </el-icon>
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
          {{ row.check ? '已完成' : '未完成' }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>

  <!-- 彈框 -->
  <el-dialog
    v-model="dialogFormVisible"
    title="新增"
  >
    <el-form :model="form">
      <el-form-item
        label="Promotion name"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.user"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Zones"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.title"
          placeholder="Please select a zone"
        >
          <el-option
            label="Zone No.1"
            value="shanghai"
          />
          <el-option
            label="Zone No.2"
            value="beijing"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
