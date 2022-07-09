//一般function
function sayHello() {
  console.log("Henlo");
}

//Anonymous function匿名函數
const sayHello = function () {
  console.log("Henlo");
};

//Arrow function 箭頭函數 通常跟this有關
const sayHello = () => {
  console.log("Henlo");
};

//計算bmi
const bmi = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi.toFixed(2);
};
console.log(bmi(70, 1.8));
