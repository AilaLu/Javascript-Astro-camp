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

// // 編號：002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元
// // 範例：

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// //a=97, b=98, c=99, d=100, e=101, f=102, g=103
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   let str = chars.toString(); //轉成字串才能用.charCodeAt()
//   str = str.replace(/[,]/g, ""); //移除字串裡的逗號！所以字串跟原本的陣列是一樣的
//   //用for loop跑字串, 如果後面的數值跟前面不相差一 代表有缺字元
//   for (let i = 0; i < str.length; i++) {
//     //有缺字元;
//     if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
//       return String.fromCharCode(str.charCodeAt(i) + 1); //用fromCharCode把UTF-16數值轉回字元
//     }
//   }
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// // 提示：
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// 編號：003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// 範例：
//想法1: for loop只要遇到0就用splice把所它刪除, 並用push加到最後面
//想法2: for loop只要遇到0就用splice把所它刪除, 用一個counter計算刪了幾次, 最後return陣列＋用Array(num).fill(ele)counter的0 (用concat加兩個陣列)
//想法3: 用filter回傳沒有0的陣列 用arr.length-filter陣列 = 0的個數 再加到最後面 用Array(num).fill(ele)

// // let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const removeZero = arr.filter((ele, index) => list[index] !== 0); //filter掉所有不是0的ele, 如果用!= false這個ele不會被回傳 要用!==也有比較到type
//   numZero = arr.length - removeZero.length; //(原本陣列長度)-(filter完的長度)=0的個數
//   return removeZero.concat(Array(numZero).fill(0)); //用Array(num).fill(ele)長出一個0個數的陣列, 再用concat把兩個陣列合併
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// 編號：003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// 範例：
//想法1: for loop只要遇到0就用splice把所它刪除, 並用push加到最後面
//想法3: 用filter回傳沒有0的陣列 用arr.length-filter陣列 = 0的個數 再加到最後面 用Array(num).fill(ele)

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //用for迴圈跑所有的值
//     if (arr[i] === 0) {
//       //如果等於0
//       const zero_arr = arr.splice(i, 1); //刪除0, 回傳的是一個陣列[0]
//       arr.push(zero_arr); //再把[0]移到陣列最後面
//     }
//   }
//   return arr.flat(); //用flat回傳一個沒有[]在陣列裡的新陣列
// }
// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// // 編號：004
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// // 要扣掉秒數得到分 要扣掉分的餘數得到小時
// // MDN: padStart(targetLength, padString)
// // 數字前面不能加0, 所以要轉成字串用.toString() 再用.padStart(2, 0)確保結果是兩位數 個位數不足補上0

// function humanReadableTimer(seconds) {
//   let sec = (seconds % 60).toString().padStart(2, 0);
//   let min = (seconds - sec) / 60;
//   let minRemainder = (min % 60).toString().padStart(2, 0);
//   let hr = ((min - minRemainder) / 60).toString().padStart(2, 0);
//   return `${hr}:${minRemainder}:${sec}`;
// }

// console.log(humanReadableTimer(0)); // 印出 00:00:00
// console.log(humanReadableTimer(59)); // 印出 00:00:59
// console.log(humanReadableTimer(60)); // 印出 00:01:00
// console.log(humanReadableTimer(90)); // 印出 00:01:30
// console.log(humanReadableTimer(3599)); // 印出 00:59:59
// console.log(humanReadableTimer(3600)); // 印出 01:00:00
// console.log(humanReadableTimer(45296)); // 印出 12:34:56
// console.log(humanReadableTimer(86399)); // 印出 23:59:59
// console.log(humanReadableTimer(86400)); // 印出 24:00:00
// console.log(humanReadableTimer(359999)); // 印出 99:59:59

// // 編號：005
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
// // 範例：
// // 想法1：先把每個位數變成陣列 用map把每個數平方＋變成字串, 再用reduce相加
// // 想法2：先轉成字串, for loop對每個元素平方
// //notes: JavaScript 字串是不變的，意思是說當字串被創造出來以後，你不可能修改它。所以需要另外開一個空字串

// function squareDigits(num) {
//   str = num.toString();
//   let square = "";
//   for (let i = 0; i < str.length; i++) {
//     square += (Number(str[i]) * Number(str[i])).toString();
//   }
//   return square;
// }

// console.log(squareDigits(3212)); // 印出 9414
// console.log(squareDigits(2112)); // 印出 4114
// console.log(squareDigits(387)); // 印出 96449
