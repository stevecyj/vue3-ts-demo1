import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

interface INavMenu {
  name: string;
  url: string;
  icon?: any;
}
export const useMenu = () => {
  const menuItems: INavMenu[] = [
    { name: "首頁", url: "/index", icon: Document },
    { name: "監控", url: "/monitor", icon: Location },
    { name: "訂單", url: "/order", icon: Setting },
    { name: "統計", url: "/census", icon: IconMenu },
  ];
  return {
    menuItems,
  };
};
