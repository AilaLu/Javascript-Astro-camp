//Switch

let state = "";
//>> 印出睡覺
switch (state) {
  case "下雨天":
    console.log("待在家");
    break;
  case "出太陽":
    console.log("出去玩");
    break;
  default:
    console.log("睡覺");
    break;
}

//>> 印出"I flow with boat"
let transportation = "boat";
switch (transportation) {
  case "car":
    console.log(`I cruise with ${transportation}`);
    break;
  case "boat":
    console.log(`I flow with ${transportation}`);
    break;
  case "bike":
    console.log(`I ride with ${transportation}`);
    berak;
}

//計算閏年平年 到瀏覽器使用prompt會跑出視窗//Go to inspect, and put it in console, prompt will pop an entry window for you to put the year in!
//運算次序 (Order of operations, operator precedence) =-*/ And, or, not
//年份可以被 4 整除而不可被 100 整除，但又可以被 400 整除
let year = prompt("Enter year");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("閏年");
} else {
  console.log("平年");
}

//Loop迴圈
//印 >> 1 2 3 4 5
for (var i = 1; i < 5; i++) {
  console.log(i);
}

//印 >> 2 4 6 8
for (var i = 0; i < 10; i++) {
  if (i % 2 == 1 || i == 0) {
    //基數跟零
    continue;
    //就跳過
  }
  console.log(i); // 所以印 >> 2 4 6 8
}

//會印出 >> 2 4 6 8 10
let i = 0;
while (i < 10) {
  debugger;
  if (i % 2 == 1 || i == 0) {
    continue;
  }
  console.log(i);
  i++;
}

//While
//>> 印1~10
var a = 1;
while (true) {
  if (a <= 10) {
    console.log(a);
    a++;
  } else {
    break;
  }
}

//>> 印1~10
var a = 1;
while (true) {
  if (a > 10) {
    break;
  }
  console.log(a);
  a++;
}

//九九乘法表
for (x = 1; x <= 9; x++) {
  for (y = 1; y <= 9; y++) {
    console.log(`${x} x ${y} = ${x * y}`);
  }
}

const star = "*";
let i = 1;
while (i <= 5) {
  console.log(star.repeat(i));
  i++;
}

const startree = function () {
  for (i = 0; i <= 5; i++) {
    console.log(" ".repeat(4 - i) + "*".repeat(2 * i + 1));
  }
};

startree();
//>> expected result
//     *
//    ***
//   *****
//  *******
// *********

// " " 4 3 2 1 0
// "*" 1 3 5 7 9
