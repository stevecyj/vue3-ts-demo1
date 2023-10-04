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

## interface

```js
// interface
// 作用：約束物件的屬性和方法
// 行尾可以不加符號

// interface 接口名稱 {
//   // 屬性
//   屬性名稱: 屬性類型
//   // 方法
//   方法名稱(): 返回值類型
// }

interface IPerson {
    name: string;
    age: number;
    gender: string;
    sayHi: () => void;
}

const p1: IPerson = {
        name: "Max",
        age: 30,
        gender: "male",
        sayHi: () => {
            console.log("Hi");
        },
```

### 和 type 的差異

* 相同點：都可以用來描述物件或函數
* 相異點：
  + interface 只能約束物件
* 目前專案 interface 很常見
  + c、java 常用 interface，後來才接觸 TypeScript
  + 早期沒有 interface，後來才加入
  + 能用 type 就用 type，type 更靈活、更簡單、組合起來更方便
  + 泛型會用到

### 繼承

```js
// 繼承
// 長輩有的我都要
// IStudent 具備 IPerson 所有的約束規範
interface IStudent extends IPerson {
    score: number;
    sleep: () => void;
}

const s1: IStudent = {
    name: "biubiu",
    age: 18,
    gender: "male",
    score: 100,
    sleep: () => {
        console.log("sleep");
    },
};
```

### type 實現類似 interface 繼承的效果

```js
// 面試題
// type 如何和 interface 一樣實現繼承
type Person = {
    username: string;
    age: number;
    gender: string;
    sayHi: () => void;
};

type Student = {
    score: number;
    sleep: () => void;
} & Person;
}

const s2: Student = {
    username: "biubiu",
    age: 18,
    gender: 'male',
    sayHi() {
        console.log("Hi");
    },
    score: 100,
    sleep: () => {
        console.log("sleep");
    },
}
```

## 元組

```js
// 元組：限定陣列的長度和型別
// 應用較少
// 地圖：經緯度

// 只能限制類型，無法限制長度
let position: number[] = [24.123, 121.123];

// 元組
let position2: [number, number] = [24.123, 121.123];
```

## 類型推論

發生場景
* 宣告變數並初始化時
* 函數回傳值

建議：開發時能省略就省略(充分利用 ts 的類型推論)
