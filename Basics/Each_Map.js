// //  forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
// //  find() 方法會回傳第一個滿足所提供之測試函式的元素值。否則回傳 undefined。
// //  map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。

// const list = ["a", "b", "c", "d", "e"];

// //.forEach() 可以印出一個陣列裡的值
// list.forEach(function (element) {
//   console.log(element);
// });

// //另一種=> arrow function寫法
// list.forEach((element) => console.log(element));

// // 用for loop印出2, 4, 6, 8, 10
// const arr = [1, 2, 3, 4, 5];
// let ansPush = [];
// for (let i = 0; i < arr.length; i++) {
//   ansPush.push(arr[i] * 2);
// }
// console.log(ansPush);

// //用.forEach()印出2, 4, 6, 8, 10
// const arr = [1, 2, 3, 4, 5];
// let ansEach = [];
// arr.forEach(function (ele) {
//   ansEach.push(ele * 2);
// });
// console.log(ansEach);

// //用.forEach()arrow function 印出2, 4, 6, 8, 10
// const arr = [1, 2, 3, 4, 5];
// let result = [];
// arr.forEach((ele) => result.push(ele * 2));
// console.log(result);

// // .map()印出2, 4, 6, 8, 10
// const ansMap = arr.map(function (x) {
//   return x * 2;
// });
// console.log(ansMap);

// // 用一個function跟map 印出2, 4, 6, 8, 10
// function double(arr) {
//   return arr.map(function (i) {
//     return i * 2;
//   });
// }
// const list = [1, 2, 3, 4, 5];
// const result = double(list);
// console.log(result); // [2, 4, 6, 8, 10]

// //想要印出奇數[1, 3, 5] 但是用.map一定會回傳5個值, 會印出[ 1, undefined, 3, undefined, 5 ], 所以加上兩個splice
// const list = [1, 2, 3, 4, 5];
// const oddMap = list.map(function (x) {
//   if (x % 2 == 1) {
//     return x;
//   }
// });
// [1, undefined, 3, undefined, 5];
// oddMap.splice(1, 1); //[1, 3, undefined, 5]
// oddMap.splice(2, 1); //[1, 3, 5]
// console.log(oddMap);

// //想要印出奇數[1, 3, 5] 但又不用splice可以另外在新增一個array, 把結果push進去
// const list = [1, 2, 3, 4, 5];
// const newArr = [];
// const oddMap = list.map(function (ele) {
//   if (ele % 2 == 1) {
//     newArr.push(ele);
//   }
//   return newArr;
// });
// console.log(newArr);

// const list = [1, 2, 3, 4, 5];
// let map = list.map((ele) => ele > 2); //印出[ false, false, true, true, true ]
// let filter = list.filter((ele) => ele > 2); //印出[ 3, 4, 5 ]
// console.log(map);
// console.log(filter);

let i = 1;
while (i < 10 && i % 2 === 1) {
  console.log(i);
}
