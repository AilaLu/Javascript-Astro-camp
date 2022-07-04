// // 編號：CANDY-001
// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如：
// //   [15, 28, 4, 2, 43] 印出 6
// //   [23, 71, 33, 82, 1] 印出 24
// // 根據MDN .sort()
// // 若 compareFunction(a, b) 的回傳值小於 0，則會把 a 排在小於 b 之索引的位置，即 a 排在 b 前面。
// // 若 compareFunction(a, b) 回傳 0，則 a 與 b 皆不會改變彼此的順序，但會與其他全部的元素比較來排序。備註：ECMAscript 標準並不保證這個行為，因此不是所有瀏覽器（如 Mozilla 版本在 2003 以前）都遵守此行為。
// // 若 compareFunction(a, b) 的回傳值大於 0，則會把 b 排在小於 a 之索引的位置，即 b 排在 a 前面。
// // 所以想要將數字用increase的方式排序Numeric Sort 回傳負值a-b

// function sumOfSmallestValues(arr) {
//   let = sortedArr = arr.sort(function (a, b) {
//     return a - b; //回傳負值 a 排在 b 前面
//   });
//   return sortedArr[0] + sortedArr[1]; //回傳陣列前兩個最小值
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// // 編號：002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元
// // 範例：
// //1. 先用charCodeAt知道傳進來的值的UTF-16開頭跟結束的數值
// //2. 開一個陣列是97到103
// //3. 用.includes()看哪裡不一樣

// const chars1 = ["a", "b", "c", "d", "f", "g"]; //a~z小寫97~122
// const chars2 = ["O", "Q", "R", "S"]; //大寫65~90

// function missingChar(chars) {
//   //1. 把陣列換成字串, 用charCodeAt找到第一個跟最後一個element的UTF-16數值
//   str = chars.toString();
//   //2.開一個完整陣列 chars1的例子而言, 就是一個97~103也就是a~g的陣列, 用fromCharCode轉換UTF-16數值到
//   complete = [];
//   for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
//     complete.push(String.fromCharCode(i));
//   }
//   //3.用.include()來找出兩個陣列之間的差異
//   let difference = complete.filter((ele) => !chars.includes(ele)); //complete.filter會回傳符合回呼函式條件的值(!char不包含另一個陣列裡的值)
//   return difference.toString();
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// 提示：
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// 編號：002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元
// 範例：

const chars1 = ["a", "b", "c", "d", "f", "g"];
//a=97, b=98, c=99, d=100, e=101, f=102, g=103
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  let str = chars.toString(); //轉成字串才能用.charCodeAt()
  str = str.replace(/[,]/g, ""); //移除字串裡的逗號！所以字串跟原本的陣列是一樣的
  //用for loop跑字串, 如果後面的數值跟前面不相差一 代表有缺字元
  for (let i = 0; i < str.length; i++) {
    //有缺字元;
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1); //用fromCharCode把UTF-16數值轉回字元
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
