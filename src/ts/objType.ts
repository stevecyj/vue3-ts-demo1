{
  // 物件型別
  // 為了不那麼糾結，物件型別行結尾建議用分
  // ts 就像寫註解
  // 抽出類型別名
  // axios 的參數會用到可選屬性
  interface Person {
    name: string;
    age: number;
    gender: string;
    hobby: string;
    soulmate?: string; // 可選屬性
    // sayHi: (content: string) => void;
    sayHi: (content: string) => void; // 也可以這樣寫
  }

  const obj: Person = {
    name: 'Max',
    age: 30,
    gender: 'male',
    hobby: 'sports',
    sayHi: (content: string) => {
      console.log(content);
    }
  };

  // 調用可選屬性, 先判斷是否存在
  // 傳統
  if (obj.soulmate) {
    console.log(obj.soulmate);
  }

  // 優雅
  obj.soulmate && console.log(obj.soulmate);

  // 可選鋉
  obj.soulmate?.split('');
}
