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
