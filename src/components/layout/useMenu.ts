import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from "@element-plus/icons-vue";
import { type INavMenu } from "../../models";

type UseMenuType = () => {
  menuItems: INavMenu[];
};
export const useMenu: UseMenuType = () => {
  const menuItems: INavMenu[] = [
    { name: "首頁", url: "/index", icon: Document },
    { name: "監控", url: "/monitor", icon: Location },
    { name: "訂單", url: "/order", icon: Setting },
    {
      name: "導航選單",
      url: "",
      icon: IconMenu,
      children: [
        { name: "雙層選單", url: "/twolayer", icon: IconMenu },
        { name: "無限選單", url: "/limitless", icon: IconMenu }
      ]
    }
  ];
  return {
    menuItems
  };
};
