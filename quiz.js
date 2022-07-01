//Create a function that returns the double of each num from array numnbers
function doubler(numbers) {
  doubleArray = [];
  length = numbers.length;
  double = 0;
  for (i = 0; i < length; i++) {
    double = numbers[i] * 2;
    doubleArray.push(double);
  }
  return doubleArray;
}
console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]

//Write a function makeAddLib(verb, adj, noun) that accepts three strings.
//Use string interpolation to return a new wacky string using the three string args. See the examples for more information.
function makeAddLib(verb, adj, noun) {
  return `I shall ${verb} to the ${adj} ${noun}?`;
}
console.log(makeAddLib("swim", "sparkly", "rainbow")); // => "I shall swim to the sparkly rainbow?"
console.log(makeAddLib("RUN", "FANCY", "ParK")); // => "I shall RUN to the FANCY ParK?"

//Muscle Memory: Practice typing the syntax for functions.create bunch of functinos! I intend to spread positive blessing
//There are 2 ways to do this, one is create a varieble, put values and return the string varievle. The other is to return by ``
function sayHello(name) {
  let msg = "Hello, " + name + ". How are you?";
  return msg;
}
console.log(sayHello("world"));

function friend(being) {
  let friend = being + " is your friend.";
  return friend;
}
console.log(friend("Nature"));

function present(tense) {
  return `${tense} is the ${tense.toUpperCase()}, I am right here right now.`;
}
console.log(present("past"));
console.log(present("future"));

function wishes(wish1, wish2) {
  return `I wish you ${wish1} and ${wish2}!`;
}
console.log(wishes("wisedom", "clarity"));
console.log(wishes("joy", "happiness"));

// swap its first element with the last element, notice the syntax format of the swaping
function swapElement(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}
console.log(swapElement(["first", "second", "third", "fourth", "last"]));
console.log(swapElement(["I", "write", "hello", "you", "write", "world"]));

//Fibonacci Sequence
//1. Create an array to store th answer
//2. If it is 0 or 1 or 2, I will just print out the numbers
//if it is more than 2, I will push the first 2 elements in,
//and apply the rules of how the element the sum of the former 2 elements

let fibonacciSequence = function (num) {
  let array = [];
  // if(num===0){
  //     return array
  //     }
  // else if(num===1){
  //     array = [1]
  //     return array
  // }
  // else if(num===2){
  //     array = [1,1]
  //     return array
  // }
  // else{
  array = [1, 1];
  for (let i = 2; i < num - 1; i++) {
    array[i] = array[i - 1] + array[i - 2];
    array.push(array[i]);
  }
  return array;
  //}
};
console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
//console.log(fibonacciSequence(0));  // [ ]
//console.log(fibonacciSequence(1));  // [ 1 ]
//console.log(fibonacciSequence(2));  // [ 1, 1 ]

//Function expression 函数表达式
//範例一
// 将函数 displayFavorite 分配给变量 favoriteMovie 的函数表达式
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// 函数声明有两个参数：一个显示消息函数和一个电影名称
function movies(messageFunction, name) {
  messageFunction(name);
}

// 调用 movies 函数，传入 favoriteMovie 函数和电影名称
movies(favoriteMovie, "Finding Nemo");

//範例二
//1. Declaire the function expression with the variable 'cry' and function name 'cry'
var cry = function crying() {
  return "boohoo!";
};
// Declaire a funciton call(), callBackFunc as the parameter
//for the function expression you want to call
function call(callBackFunc) {
  return callBackFunc();
}
//call the function call() with argument function expression variable 'cry'
call(cry);

//inline function
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function (num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0; i < num; i++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
});
