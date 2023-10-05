{
  // 泛型
  // 使用 any 沒有類型提示
  // 類型不寫死，使用時決定
  // <T> => 聲明泛型
  // val: T => 使用泛型
  function getId<T>(val: T[]) {
    console.log(val.length)
    return val;
  }

  getId<number>(123);
  getId<string>('123');

  const result = getId<number>(123); // 類型推斷 => number
  const result2 = getId<string>('123'); // 類型推斷 => string
  const result3 = getId<boolean>(true); // 類型推斷 => boolean

  const result4 = getId(123); // 類型推斷 => 123
  const result5 = getId('123'); // 類型推斷 => '123'
  const result6 = getId(true); // 類型推斷 => true

  // 泛型約束
  // 類型收縮
}
