//arrow function在物件裡的時候parent object就是window

const arr = [1, 2, 3, 4, 5];

//這三個變數都是用.map回傳一個新陣列[ 2, 4, 6, 8, 10 ],
const map = arr.map(function (ele) {
  return ele * 2;
});

console.log(map);

//箭頭函式將function省略變成=>--------------------------------------------------------------------------

const 箭頭函式 = arr.map((ele) => {
  return ele * 2;
});
console.log(箭頭函式);

//箭頭函式省略大括號return就是平常看到的arrow function!!!-------------------------------------------------

const 箭頭函式省略大括號return = arr.map((ele) => ele * 2);
console.log(箭頭函式省略大括號return);
