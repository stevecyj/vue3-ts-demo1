{
  // id 為 link 的元素，一定存在
  // 強行指定類型
  const a = document.getElementById("link") as HTMLAnchorElement;

  const div = document.createElement("div");

  a && a.href;
}
