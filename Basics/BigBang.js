//method mashup bigbangggg

// const list = [1, 2, 3, 4, 5];
// // 印出「大於 2」的「兩倍和」
// //連續方法！大爆炸
// const result = list
//   .filter((ele) => ele > 2) //return [3, 4, 5]
//   .map((ele) => ele * 2) //return [6, 8, 10]
//   .reduce((acc, cv) => acc + cv); //return 24
// console.log(result); //印出24

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // 印出「大於 4」的「偶數」的「平方和」
// const result = list
//   .filter((ele) => ele > 4 && ele % 2 === 0) //return [6, 8, 10]
//   .map((ele) => ele * ele) //return [36, 64, 100]
//   .reduce((acc, cv) => acc + cv); //return 200
// console.log(result); //印出200

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 印出「大於 4」的「偶數」的「平方和」
const biggerThan4Even = (ele) => ele > 4 && ele % 2 === 0;
const square = (ele) => ele * ele;
const accumulated = (acc, cv) => acc + cv;

const result = list
  .filter(biggerThan4Even) //return [6, 8, 10]
  .map(square) //return [36, 64, 100]
  .reduce(accumulated); //return 200
console.log(result); //印出200
