// Arrow Function
// https://blog.sessionstack.com/how-javascript-works-the-different-ways-of-declaring-a-function-5-best-practices-8a0324c06fe2

const myName = () => "Jenn";
console.log(myName());


const result = () => {return 20};
console.log(result());


const sayInput = x => console.log(x);
sayInput("Hello, World!");


const sum = (a, b) => a + b;
console.log(sum(10, 20));


const compare = (a, b) => {
    if(a > b) {
        console.log(a + " is greater");
    }
    else if (a < b) {
        console.log(b + " is greater");
    }
    else {
        console.log("Both values are tied");
    }
}
compare(21, 21);
compare(21, 22);

console.log();



// Arrow Function with forEach
//                                v  &  v  are optional
// array.forEach((currentValue, index, arr) => {
    // do coding in here
// });

let arr = [1, 2, 3, 4];

arr.forEach(num => console.log(num));

arr.forEach((num, i) => {arr[i] = num * 2});
console.log(arr);



// forEach - mutates current array values, use if not changing data of arr
// map - creates a whole new Array, use if altering data



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