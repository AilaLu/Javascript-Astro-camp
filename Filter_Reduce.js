
 filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
 reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。  If the initial value is 0, how to compare the 


//.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//印出所有陣列的值
const all = list.filter(function (x) {
  return true; //只要滿足條件就會回傳
});
console.log(all);

//用filter取出基數
const arr = [1, 2, 3, 4, 5];
const odd = arr.filter(function (ele) {
  if (ele % 2 == 1) {
    return ele;
  }
});
console.log(odd);

//用filter取出基數
const arr = [1, 2, 3, 4, 5];
const odd = arr.filter((ele) => ele % 2 == 1);
console.log(odd);

//印出基數 ==> [1, 3, 5]
const odd = list.filter(function (x) {
  return x % 2 == 1;
});
console.log(odd);

--------------------------------------------------------------------------------

.reduce(function會有兩個參數：累加值, 目前傳進來的值) 計算總和 找出最大值 最小值
const arr = [1, 2, 3, 4, 5];

0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);
// expected output: 10

// 用reduce計算總和
const total = arr.reduce(function (累加值, 目前值) {
  console.log(累加值, 目前值);
  return 累加值 + 目前值;
}, 0); //0是初始值
console.log(total);

// 用reduce計算總和
const total = arr.reduce(function (accumulated, current) {
  return accumulated + current;
}, 0);
console.log(total);

const max = arr.reduce(function (累加值, 目前值) {
  console.log(累加值, 目前值);
  if (目前值 > 累加值) {
    return 目前值;
  } else {
    return 累加值;
  }
});
console.log(max);

用reduce找出最小值
const list = [1, 4, -3, 9, -2, 6, 7, 8];

const max = list.reduce(function (acc, cv) {
  console.log(acc, cv);
  if (cv < acc) {
    return cv;
  } else {
    return acc;
  }
});
console.log(max);
