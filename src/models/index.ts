export interface INavMenu {
  name: string;
  url: string;
  icon?: any;
  children?: INavMenu[];
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
  request: <T>(method: string, url: string, params?: unknown) => Promise<T>;
}

// news demo
export interface INewsList {
  name: string;
  address: string;
  id: number;
}
// export interface INewsList {
//   code: number;
//   message: string;
//   data: Array<IList>;
// }
