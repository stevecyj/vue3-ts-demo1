{
  // 定義一個「列印文字」的函數，無需回傳值
  // ts 會自動推論 sayHi 的型別為 (name: string) => void
  // ts 中寫 : undefined 必需回傳 undefined，寫 : void 可以不回傳
  const sayHi = (name: string): void => {
    console.log(`Hi, ${name}`);
  };
}
