// function add(a, b){
//   return a + b
// }
//
// console.log(add(3, 1))
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd))


var groupA = ["Jen", "Correy"];

var groupB = ["Ben", "James"];

var final1 = [3, groupA, groupB];
var final = [5, ...groupA, ...groupB];

console.log(final1, final)

person = ["andrew", 25]
person2 = ["Jen", 21]

function callNames(name, age){
  return "hi " + name + ". You are " + age
}

console.log(callNames(...person))
console.log(callNames(...person2))
