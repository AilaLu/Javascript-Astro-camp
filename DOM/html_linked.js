// //先加defer到js連動！<script src="app.js" defer></script>
// //
// //取得DOM .value不能在一開始就用, 要在監聽事件之後取的value才會是正確的
// //如果在HTML有兩個同名id, 沒差  但在JS要抓資料時 就會只有回傳第一個
// //如果在HTML有兩個同名class, 沒差

// // ----------------------------------------------------------
// // 如果要用js控制HTML, 可以用getElementById抓到id = "h" 的HTML標籤 將他指定給一個變數 用.innerHTML或是.textContent就可以改變render在頁面上的結果

// const h = document.getElementById("h");
// h.innerHTML = "<h1>Yello</h1>";
// const ha = document.getElementById("ha");
// ha.textContent = "jajajaja";
// console.log(h);

// ---------------------------------------------------------
// 如果要用js控制HTML, 可以用getElementByClassName抓到class = "class"
// 會抓到HTMLCollection的物件, 不能用forEach, 只能用for loop

// const list = document.getElementsByClassName("class");
// console.log(list); //在inspect console會印出一個叫做HTMLCollection的物件
// console.log(list[1]); //在inspect console會印出<div class="class">2</div>
// console.log(list[1].textContent); //在inspect console會印出2

// for (let i = 0; i < list.length; i++) {
//   console.log(list[i].textContent);
// } //在inspect console會印出這個class group所有的值

//------------------------------------------------------------
// 可以用querySelector抓到class = "list"的ul li清單, 用像是CSS選取器的方式抓到DOM
const classQuerySelector = document.querySelector(".list li:nth-child(2)");
classQuerySelector.textContent = "Z"; //B被改成Z

const idQuerySelector = document.querySelector("#h");
idQuerySelector.textContent = "Hola";

//------------------------------------------------------------
// 也可以用querySelectorAll抓到class = "class"的ul li清單, 用像是CSS的方式(id用#, class用.) 會抓到整組的同名為“class”的資料
// 會抓到NodeList的物件, 可以用forEach

const list1 = document.querySelectorAll(".class"); //取得DOM
console.log(list1); //到inspect可以看到Nodelist還有很多properties, 就可以知道能不能用forEach
list1.forEach((ele) => {
  //因為是Nodelist所以可以用forEach
  console.log(ele.textContent); //textContent取得HTML裡面的值
});

//------------------------------------------------------------
//Event 事件  addEventListener("事件", 回呼函式)
//回呼函式 callback function 等到某事件發生 就執行這個function

const btn = document.querySelector("#button"); // 取得DOM 抓出這個id = button
btn.addEventListener("click", function () {
  //監聽click事件
  console.log("Clicked!"); //點擊後印出Clicked!
});

// //------------------------------------------------------------
// //DOMContentLoaded 有了這個監聽 不管js放在HTML哪裡都可以執行 <script src="js檔案"></script>
// //另一種解法就是在script加上defer <script src="js檔案" defer></script>

// const callback = function callbackfunc() {
//   const btn = document.querySelector("#button");
//   btn.addEventListener("click", function () {
//     console.log("Clicked!");
//   });
// };

// document.addEventListener("DOMContentLoaded", callback);

// // ------------------------------------------------------------
// // 用preventDefault將預設的事件攔截下來 例如a標籤就是超連結 連到別的頁面 但是preventDefault之後就會停留在現在的頁面

// const stay = document.querySelector("a");
// stay.addEventListener("click", (x) => {
//   x.preventDefault(); //少了這行就回連到超連結
//   console.log("Stay in this page!");
// });

// //------------------------------------------------------------
// // 用.createElement() JS手刻一個div 印出 "I am enough"
// const getHenlo = document.querySelector("#h");
// console.log(getHenlo);
// const create = document.createElement("div"); //用createElement憑空捏造一個div
// create.textContent = "I am enough"; //用textContent把值加進去
// getHenlo.appendChild(create); //把創造出的東西加到HTML

// ------------------------------------------------------------
// 用.createElement() JS手刻一個ul,li清單 印出Hi1, Hi2, Hi3
const getHenlo = document.querySelector("#h");
const ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Hi${i}`;
  ul.appendChild(li);
}
getHenlo.appendChild(ul);

// // // ------------------------------------------------------------
// // //按下按鈕把Henlo刪掉
// const getHenlo = document.querySelector("#h"); //取得Henlo
// const btn = document.querySelector("#button"); //取得button Click Me
// btn.addEventListener("click", () => {
//   console.log("Clicked!");
//   getHenlo.remove();
// });

// // ------------------------------------------------------------
// //按下按鈕把最後一個li刪掉 會刪掉C, B, A
const btn = document.querySelector("#button"); //取得button Click Me

deleteLast = () => {
  const li = document.querySelector(".list li:last-child"); //取得list
  if (li) {
    // 驗證如果清單還有值
    li.remove();
  }
};
btn.addEventListener("click", deleteLast);

//--------------------------------------------------
//按下按鈕就會在ABC的ul外面前後 li前後加入新的li beforebegin
//beforebegin = bb
//afterbegin = ab
//beforeend = be
//afterend = ae

const list = document.querySelector(".list"); //取得ABC lsit
const btn = document.querySelector("#button"); //取得button Click Me
btn.addEventListener("click", () => {
  const bb = document.createElement("li");
  bb.textContent = "BeforeBegin";
  list.insertAdjacentElement("beforebegin", bb);
  //用insertAdjacentElement放到beforebegin的位置
  const ab = document.createElement("li");
  ab.textContent = "AfterBegin";
  list.insertAdjacentElement("afterbegin", ab);
  //用insertAdjacentElement放到afterbegin的位置
  const be = document.createElement("li");
  be.textContent = "BeforeEnd";
  list.insertAdjacentElement("beforeend", be);
  //用insertAdjacentElement放到beforeend的位置
  const ae = document.createElement("li");
  ae.textContent = "AfterEnd";
  list.insertAdjacentElement("afterend", ae);
  //用insertAdjacentElement放到afterend的位置
});
