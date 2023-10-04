{
  // 函數類型別名
  // 通常給箭頭函數、函數表達式使用
  type FnType = (x: number, y: number) => number;

  const fn: FnType = function add(x, y) {
    return x + y;
  };

  const sub: FnType = (x, y) => x - y;

  sub(1, 2);
  sub("123", "456");
}
