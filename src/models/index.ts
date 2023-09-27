
export interface INavMenu {
  name: string;
  url: string;
  icon?: any;
}

// http
export interface IHttp {
  request<T>(method: string, url: string, params: unknown): Promise<T>;
}