// very basic beginner challenge
// data types

var myBoolean = true;
var myString = "hello world";

var firstNumber = 20;
var secondNumber = 40;
secondNumber = 80;

var myArray = [myBoolean, myString];

var myObject = { firstProperty: myArray, 
                 sumProperty: firstNumber + secondNumber}

console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

console.log('1' == true);