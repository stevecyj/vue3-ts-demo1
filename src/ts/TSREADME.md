# TypeScript

## function

### 函數類型別名

```javascript
// 函數類型別名
// 通常給箭頭函數、函數表達式使用
type FnType = (x: number, y: number) => number;

const fn: FnType = function add(x, y) {
    return x + y;
};

const sub: FnType = (x, y) => x - y;

sub(1, 2);
sub("123", "456");
```

### void

```JS
// 定義一個「列印文字」的函數，無需回傳值
// ts 會自動推論 sayHi 的型別為 (name: string) => void
// ts 中寫 : undefined 必需回傳 undefined，寫 : void 可以不回傳
const sayHi = (name: string): void => {
    console.log(`Hi, ${name}`);
};
```

### 可選參數

```JS
// 可選參數
// 可選參數必須在必填參數之後
const print = (name: string, age ? : number): void => {
    console.log(name);
};
```

## 物件

### 物件型別

```JS
  /// 物件型別
  // 為了不那麼糾結，物件型別行結尾建議用分
  // ts 就像寫註解
  // 抽出類型別名
  type Person = {
      name: string;
      age: number;
      gender: string;
      hobby: string;
      // sayHi: (content: string) => void;
      sayHi(content: string): void; // 也可以這樣寫
  };

  let obj: Person = {
      name: "Max",
      age: 30,
      gender: "male",
      hobby: "sports",
      sayHi: (content: string) => {
          console.log(content);
      },
  };
```

### 可選屬性

```js
// 物件型別
// 為了不那麼糾結，物件型別行結尾建議用分
// ts 就像寫註解
// 抽出類型別名
// axios 的參數會用到可選屬性
type Person = {
    name: string;
    age: number;
    gender: string;
    hobby: string;
    soulmate ? : string; // 可選屬性
    // sayHi: (content: string) => void;
    sayHi(content: string): void; // 也可以這樣寫
};

let obj: Person = {
    name: "Max",
    age: 30,
    gender: "male",
    hobby: "sports",
    sayHi: (content: string) => {
        console.log(content);
    },
};

// 調用可選屬性, 先判斷是否存在
// 傳統
if (obj.soulmate) {
    console.log(obj.soulmate);
}

// 優雅
obj.soulmate && console.log(obj.soulmate)

// 可選鋉
obj.soulmate?.split('')
```
