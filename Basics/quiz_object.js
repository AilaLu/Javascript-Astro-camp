//object-literal notation

// var sister = {
//   name: "Sarah",
//   age: 23,
//   parents: ["alice", "andy"],
//   siblings: ["julia"],
//   favoriteColor: "purple",
//   pets: true,
// };

// // two equivalent ways to use the key to return its value
// sister["parents"]; // returns [ "alice", "andy" ]
// sister.parents; // also returns ["alice", "andy"]

let user = {
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
// get property values of the object:
alert(user.name); // John
alert(user.age); // 30
//To remove a property, we can use the delete operator:
delete user.age;

//use constructor to create objects, you can only use constructor once within a class
class Actor {
  constructor(name, networth, movies) {
    this.name = name;
    this.networth = networth;
    this.movies = movies;
  }
}
let Jhonny = new Actor("Depp", "1B", "Pirates");
console.log(Jhonny.movies); //Expected output: Pirates
console.log(Jhonny.networth); //Expected output: 1B
console.log(Jhonny); //Expected output = Actor { name: 'Depp', networth: '1B', movies: 'Pirates' }
