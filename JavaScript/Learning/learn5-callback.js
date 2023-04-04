/* 

CALLBACK functions occur after another function finishes
They usually hold a function as part of their argument / parameter

*/

// Arrow Function with forEach
//                                v  &  v  are optional
// array.forEach((currentValue, index, arr) => {
    // do coding in here
// });

let arr = [1, 2, 3, 4];

arr.forEach(num => console.log(num));

arr.forEach((num, i) => {arr[i] = num * 2});
console.log(arr);
console.log();


// forEach - mutates current array values, doesn't return anything
// map - creates a whole new Array, leaves orignial values alone



// Map!
function sayHello(name) {
    console.log("Hey", name, "welcome to your dashboard!");
}

let nameArr = ["Jen", "Jin", "Jan"];

const newArray = nameArr.map(sayHello);
newArray;


const newArray2 = nameArr.map(name => {
    console.log("Would you like a chocolate", name + "?");
})

let animals = ["cat", "hamster", "ox", "narwhal", "kiwi", "yak"];
animals.map(animal => console.log(animal[0]));
animals;

console.log();



// Filter
let values1to6 = [1, 2, 3, 4, 5, 6];
let even = values1to6.map(val => val * 3).filter(val => val % 2 === 0);
console.log(even);



// Reduce - adds all arr values
let values1to4 = [1, 2, 3, 4];
var total = values1to4.reduce((acc, val) => acc + val);
console.log(total); // 10

total = values1to4.reduce((acc, val) => acc + val, 100);
console.log(total); // acc = 100 + 10 = 110