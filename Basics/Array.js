// splice, push, pop, shift, unshift, concat
// forEach, find, map, filter, reduce

// 印出最後一個element "c"
// function last(arr) {
//   return arr[arr.length - 1];
// }

// const list = ["a", "b", "c", "d,", "e"];
// let lastOne = last(list);
// console.log(lastOne);

// push的回傳值是array被push後的length
// list.push("push!"); //加進最後一個值！
// list.unshift("unshift!"); //加進最前面的值！
// console.log(list);

// list.pop(); //丟掉最後一個值！
// list.shift(); //丟掉最前面的值！
// console.log(list);

// console.log(list.splice(1, 2, "splice!")); //從index1開始刪, 刪除2個, 所以b, c被刪掉, 再插入一個splice進來, 回傳被刪掉的b, c！
// console.log(list); //剩下來的a, d, e, 跟插入在原本位置的splice!
// list.splice(2, 0, "yay!"); //想在d前面加入一個值yay！
// console.log(list); //

// 寫出一個程式可以用splice執行unshift的功能
// function myUnshift(arr, elm) {
//   arr.splice(0, 0, elm);
//   return arr;
// }

// const data = ["a", "b", "c"];
// const result = myUnshift(data, "x");
// console.log(result); // ["x", "a", "b", "c"]

// 寫出一個程式可以用splice執行push的功能
// function myPush(arr, elm) {
//   arr.splice(arr.length, 0, elm);
//   return arr;
// }

// const data = ["a", "b", "c"];
// const result = myPush(data, "x");
// console.log(result); // ["a", "b", "c", "x"]

// .concat()串接 回傳新的陣列 原本的不會被改變
// arr1 = ["w", "t", "f"];
// arr2 = ["o", "m", "g"];
// console.log(arr1.concat(arr2));

// //.includes() 回傳布林值
// console.log(arr1.includes("w"));
// console.log(arr2.includes("w"));

// function exist(arr, elm) {
//   if (arr.indexOf(elm) >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const list = ["a", "b", "c", "d", "e"];
// console.log(exist(list, "c")); // true
// console.log(exist(list, "z")); // false

// //.find() 可以找出第一個符合條件的值 >>印出12
// const list = [5, 12, 8, 130, 44];
// let find = list.find((ele) => ele > 10);
// console.log(find);

// //.findIndex() 可以找出第一個符合條件的索引 >> 印出0
// const list1 = ["a", "b", "c", "d", "e", "a"];
// let findIndex = list1.findIndex((ele) => ele == "a");
// console.log(findIndex);

// function swapElement() {
//   const array = (["first", "second", "third", "fourth", "last"][
//     (array[0], array[array.length - 1])
//   ] = [array[array.length - 1], array[0]]);
//   console.log(array);
// }
// swapElement();
