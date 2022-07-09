//object-literal notation
var sister = {
  name: "Sarah",
  age: 23,
  parents: ["alice", "andy"],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
};

// two equivalent ways to use the key to return its value
sister["parents"]; // returns [ "alice", "andy" ]
sister.parents; // also returns ["alice", "andy"]

class Actor {
  constructor(name, networth, movies) {
    this.name = name;
    this.networth = networth;
    this.movies = movies;
  }
}
let Jhonny = new Actor("Depp", "1B", "Pirates");
//Expected output === Actor { name: 'Depp', networth: '1B', movies: 'Pirates' }

let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
// get property values of the object:
alert(user.name); // John
alert(user.age); // 30
//To remove a property, we can use the delete operator:
delete user.age;

function swapElement() {
  const array = (["first", "second", "third", "fourth", "last"][
    (array[0], array[array.length - 1])
  ] = [array[array.length - 1], array[0]]);
  console.log(array);
}
swapElement();
