// regular expressions (identifiers & quantifiers)
// https://www.codeguage.com/courses/regexp/introduction

// Example
var emailValidatorRegex = new RegExp('^.+@.+\..+$');
// .+ = infinte =  1+ times of any character
// left of @    --> ^.+     start with [infinte]
// @ --> the at required in email
// right of @   --> .+      continue with [infinte]
//              --> \.      account for actual '.'
//              --> .+$     then finish [infinte]

// ^.+            @.+  \. .+$
// jenniferlopezh0@gmail.com

var userInput = "invalid@g";

var isValid = emailValidatorRegex.test(userInput);

console.log(isValid); // false
console.log();


const regex = new RegExp('g');
console.log(regex.test('my favorite food is flautas')); // false
console.log(regex.test('my favorite thing to do is crochet')); // true
console.log();



const regex2 = new RegExp('favorite');
console.log(regex2.test('My Favorite Movie is UP')); // false
console.log();


// Assertions
console.log(/n$/.test('jen')); // true
console.log(/^[a-z]/.test('jen')); // true
console.log(/^[a-z]/.test('1jen')); // false
console.log();


// Quantifiers
console.log(/[a-z]{5}/.exec('this is fun to learn'));
console.log(/[a-z ]{5}/.exec('this is fun to learn'));
console.log(/[a-z ]{2,6}/.exec('this is fun to learn'));
console.log();


// Advanced searching with flags
// https://www.codeguage.com/courses/regexp/flags
const regex3 = /strawberry/i; // Ignore casing
console.log(regex3.test('Strawberry can clean your teeth'));
console.log(regex3.test('Jelly strawberry is gross though'));
console.log(regex3.test('Your password: sTrawBerry123'));