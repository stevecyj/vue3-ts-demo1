{
  // const 聲明的變量不可修改，意味自始至終都是 "hello"，所以 ts 將其當做一個字面量類型 "hello"
  const str1 = 'hello'; // str1: string
  const str2 = 'hello'; // str2: "hello"

  // 字面量：字面量是一種表示值的表示法，它可以表示數值、字符串、布爾值、對象、數組等
  // 100、"hello"、true、{}、[] 都是字面量
  // 字面量類型：上列都是
  type Direction = '上' | '下' | '左' | '右';
  function changeDirection(direction: Direction) {
    console.log(direction);
  }

  changeDirection('右'); // 可以
  changeDirection('Max'); // 不可以
}
