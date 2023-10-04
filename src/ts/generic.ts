{
  // 泛型
  // 使用 any 沒有類型提示
  // 類型不寫死，使用時決定
  // <T> => 聲明泛型
  // val: T => 使用泛型
  function getId<T>(val: T) {
    return val;
  }

  getId<number>(123);
  getId<string>('123');

  const result = getId<number>(123);

  // 泛型約束
  // 類型收縮
}
