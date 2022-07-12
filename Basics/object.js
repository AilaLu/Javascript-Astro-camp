// //object裡面有properties跟methods.

// let hero = {
//   1: "key is not string",
//   power: 100,
//   age: 20,
//   attack: function () {
//     console.log("Haa!Attack!!!");
//   },
// };

// let mario = {
//   power: 50,
//   age: 35,
// };
// // console.log(hero["power"]);
// // hero.power = 300; //對物件更改屬性power的值
// // console.log(hero.power);
// // console.log(hero.age);
// // hero.attack(); //在hero這個物件 有attack這個方法
// // console.log(hero);
// // delete hero.age; //刪除屬性
// // console.log(hero);
// // console.log(hero[1]); //hero.1拿不到值
// //rename properties key
// const { 1: one } = hero;
// console.log(hero);

// // // 解構 Destructuring
// // const { age, power } = hero;
// // console.log(age);
// // console.log(power);

// // // //沒有解構時 傳進一整包物件 就要用key才能拿到value
// // function go(superman) {
// //   console.log(superman.power);
// //   console.log(superman.age);
// // }

// // //沒有解構時 傳進一整包物件 如果加了解構也可以
// // function go(superman) {
// //   const { power, age } = superman;
// //   console.log(power);
// //   console.log(age);
// // }

// // // //在function的參數解構物件 就可以直接用
// // function go({ power, age }) {
// //   console.log(power);
// //   console.log(age);
// // }

// // go(hero);
// // go(mario);

const obj = {
  shroom: undefined,
  grass: "rass",
  pepper: "epper",
};

const { shroom = "mushroom" } = obj; //default value
console.log(obj); //expected output  { shroom: 'mushroom', grass: 'rass', pepper: 'epper' }
const { shroom: mushroom } = obj; //rename property
console.log(obj); //expected output { mushroom: 'mushroom', grass: 'rass', pepper: 'epper' }
