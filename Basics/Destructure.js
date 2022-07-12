//Destructuring Array or Object

// // //Array----------------------------------------------------------------------------------------------------
// //解構陣列 用...展開
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];
// const concat = a.concat(b).concat(c);
// const expandArray = [...a, ...b, ...c];
// console.log(concat);
// console.log(expandArray);

// //用...蒐集
// let marval = ["superman", "spiderman", "ironman", "aquaman"];
// function getall(hero, ...rest) {
//   console.log(hero, ...rest);
// }
// getall(marval);

// const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
// const num = [1, 2, 3, 4, 5];

// // const [first, ...rest] = alphabet; //destructure array
// // const concat = [...alphabet, ...num];
// // //set default
// const [newkey = "one", ...rest] = num;

// console.log(num);
// // console.log(first);
// // console.log(rest);
// // console.log(concat); //use ... to create a new array that does concat
// // console.log(alphabet.concat(num)); //same with the method concat

//Object----------------------------------------------------------------------------------------------------
let spiderman = {
  1: "key is not string",
  power: 100,
  age: 15,
  attack: function () {
    console.log("Haa!Attack!!!");
  },
};

let mario = {
  power: 50,
  age: 35,
};

// //if you use... in object, the object on the back will overwirte the first one
// let combine = { ...spiderman, ...mario };
// console.log(combine); //印出兩個物件相加 如果有一樣的key, 後面會蓋掉前面

//expected output:
// {
//     '1': 'key is not string',
//     power: 50,
//     age: 35,
//     attack: [Function: attack]
//   }

// const { newkey = "default value if you don't have this key in the object" } =
//   spiderman;
console.log(spiderman);
//use = in taking in values setting default values
// function takeObj({ power, attack, }) {
//   console.log(`boom ${power}, ${attack} ${newkey}`);

// takeObj(spiderman);

// Destructure Nested objects
// obj = {
//     parent: {
//         child: '🌱'
//     }
// }
// const { parent: {child} }
// console.log(child);

// //For loop for objs in array
// const array = [{ key: hero }, { key2: mario }, { key3: superman }];
// for (i = 0; i < array.length; i++) {
//   console.log(array);
// }
