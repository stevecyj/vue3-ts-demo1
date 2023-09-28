import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/config1",
    method: "get",
    response: (obj) => {
      return obj;
    },
  },
] as MockMethod[];
