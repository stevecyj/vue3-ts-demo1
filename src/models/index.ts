
export interface INavMenu {
  name: string;
  url: string;
  icon?: any;
}

// table
export interface ITableData {
  date: string;
  title: string;
  user: string;
  id: number;
  check: boolean;
}

// http
export interface IHttp {
  request<T>(method: string, url: string, params?: unknown): Promise<T>;
}