{
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
  };

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
}
