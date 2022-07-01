splice, push, pop, shift, unshift, concat
forEach, find, map, filter, reduce

印出最後一個element "c"
function last(arr) {
  return arr[arr.length - 1];
}

const list = ["a", "b", "c", "d,", "e"];
let lastOne = last(list);
console.log(lastOne);

push的回傳值是array被push後的length
list.push("push!"); //加進最後一個值！
list.unshift("unshift!"); //加進最前面的值！
console.log(list);

list.pop(); //丟掉最後一個值！
list.shift(); //丟掉最前面的值！
console.log(list);

console.log(list.splice(1, 2, "splice!")); //從index1開始刪, 刪除2個, 所以b, c被刪掉, 再插入一個splice進來, 回傳被刪掉的b, c！
console.log(list); //剩下來的a, d, e, 跟插入在原本位置的splice!
list.splice(2, 0, "yay!"); //想在d前面加入一個值yay！
console.log(list); //

寫出一個程式可以用splice執行unshift的功能
function myUnshift(arr, elm) {
  arr.splice(0, 0, elm);
  return arr;
}

const data = ["a", "b", "c"];
const result = myUnshift(data, "x");
console.log(result); // ["x", "a", "b", "c"]

寫出一個程式可以用splice執行push的功能
function myPush(arr, elm) {
  arr.splice(arr.length, 0, elm);
  return arr;
}

const data = ["a", "b", "c"];
const result = myPush(data, "x");
console.log(result); // ["a", "b", "c", "x"]

.concat()串接 回傳新的陣列 原本的不會被改變
arr1 = ["w", "t", "f"];
arr2 = ["o", "m", "g"];
console.log(arr1.concat(arr2));

//.includes() 回傳布林值
console.log(arr1.includes("w"));
console.log(arr2.includes("w"));

function exist(arr, elm) {
  if (arr.indexOf(elm) >= 0) {
    return true;
  } else {
    return false;
  }
}

const list = ["a", "b", "c", "d", "e"];
console.log(exist(list, "c")); // true
console.log(exist(list, "z")); // false

const list = ["a", "b", "c", "d", "e", "a"];

.forEach() 可以印出一個陣列裡的值
list.forEach(function (i) {
  console.log(i);
});

.find() 可以找出第一個出現的a
let result = list.find(function (i) {
  return list.indexOf(i);
});

console.log(result);
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

印出2, 4, 6, 8, 10
const arr = [1, 2, 3, 4, 5];
let ansPush = [];
for (let i = 0; i < arr.length; i++) {
  ansPush.push(arr[i] * 2);
}
console.log(ansPush);

.forEach()

let ansEach = [];
arr.forEach(function (i) {
  ansEach.push(i * 2);
});
console.log(ansEach);

.map()
const ansMap = arr.map(function (x) {
  return x * 2;
});
console.log(ansMap);

印出2, 4, 6, 8, 10
function double(arr) {
  return arr.map(function (i) {
    return i * 2;
  });
}

印出2, 4, 6, 8, 10
const list = [1, 2, 3, 4, 5];
const result = double(list);
console.log(result); // [2, 4, 6, 8, 10]

想要印出奇數[1, 3, 5] 但是用.map一定會回傳5個值, 會印出[ 1, undefined, 3, undefined, 5 ], 所以加上兩個splice
const oddMap = list.map(function (x) {
  if (x % 2 == 1) {
    return x;
  }
});
[ 1, undefined, 3, undefined, 5 ]
oddMap.splice(1, 1); //[1, 3, undefined, 5]
oddMap.splice(2, 1); //[1, 3, 5]
console.log(oddMap);

想要印出奇數[1, 3, 5] 所以可以另外
const oddMap = list.map(function (x) {
  if (x % 2 == 1) {
    return x;
  }
});
console.log(oddMap);

.filter()
印出所有陣列的值
const all = list.filter(function (x) {
  return true; //只要滿足條件就會回傳
});
console.log(all);
印出基數 ==> [1, 3, 5]
const odd = list.filter(function (x) {
  return x % 2 == 1;
});
console.log(odd);

.reduce(function會有兩個參數：累加值, 目前傳進來的值)
const total = list.reduce(function (累加值, 目前值) {
  //console.log(累加值, 目前值)
  return 累加值 + 目前值;
}, 0); //0是初始值
console.log(total);

const max = list.reduce(function (累加值, 目前值) {
  //console.log(累加值acc, 目前值cv)
  if (目前值 > 累加值) {
    return 目前值;
  } else {
    return 累加值;
  }
}, 0); //0是初始值
console.log(max);

用reduce找出最大值
const sort = [1, 4, 3, 9, 2, 6, 7, 8];

const total = list.reduce(function (acc, cv) {
  if (cv > acc) {
    return cv;
  } else {
    return acc;
  }
});
console.log(total);
