export const toKebabCase = (str: string): string => {
  return str.replace(/(A-Z)/g, '-$1').toLowerCase();
};

// 根据url获取query参数
export const getQuery = (url: string, name: string): string | null => {
  // console.log(url); //  /api/get/news?pageindex=1&pagesize=10
  const index = url.indexOf('?');
  // console.log(index); // 13
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split('&');
    // console.log(queryStrArr); // ['pageindex=1', 'pagesize=10']
    // 0: "pageindex=1"
    // 1: "pagesize=10"
    for (let i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=');
      // console.log(itemArr); // ['pageindex', '1']    //['pagesize', '10']
      // 0: "pageindex"        //0: "pagesize"
      // 1: "1"                //1: "10"

      if (itemArr[0] === name) {
        return itemArr[1];
      }
    }
  }
  return null;
};
