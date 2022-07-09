const list = ["a", "b", "c", "d", "e"];

//.forEach() 印出一個陣列裡的值
list.forEach(function (ele) {
  console.log(ele);
});

//另一種=> arrow function寫法
list.forEach((ele) => console.log(ele));

const arr = [1, 2, 3, 4, 5];

//用.forEach()印出2, 4, 6, 8, 10
arr.forEach(function (ele) {
  console.log(ele * 2);
});

//用.forEach()印出[2, 4, 6, 8, 10], 改變原本arr的值
arr.forEach(function (element, index) {
  arr[index] = element * 2;
});
console.log(arr);

//如果刪掉function, 在(element, index)右邊加上箭頭 再刪掉{}, 就是arrow function
arr.forEach((element, index) => (arr[index] = element * 2));
console.log(arr);

//用.forEach()印出[2, 4, 6, 8, 10]可以另外開一個array
const push = [];
arr.forEach(function (ele, index) {
  push.push(ele * 2);
});
console.log(push);

// 用.map()印出[2, 4, 6, 8, 10]
const map = arr.map(function (ele) {
  return ele * 2;
});
console.log(map);

// 用一個function跟map.() 印出[2, 4, 6, 8, 10]
function double(arr) {
  const map = arr.map(function (ele) {
    return ele * 2;
  });
  return map;
}
console.log(double(arr));

// 用forEach.() 印出奇數[1, 3, 5]
const odd = [];
arr.forEach(function (ele) {
  if (ele % 2 == 1) {
    odd.push(ele);
  }
});
console.log(odd);
