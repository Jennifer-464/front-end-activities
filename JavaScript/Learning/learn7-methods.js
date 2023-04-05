/**
 * Visit https://lodash.com/
 * To check out their https://lodash.com/docs/4.17.15
 * A library with a lot more methods 
 */

/*** 
 * 
 * Strings
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * 
 * ***/
const str = 'The quick brown fox jumps over the lazy dog'
console.log(str.replaceAll(/[aeiou]/g, 'a')); // replace vowels with a

const str2 = 'My Dog jumped on the bed. My dog is a bad Dog.';
console.log(str2.replaceAll(/dog/g, 'cat'));
console.log(str2.replaceAll(/dog/ig, 'cat'));


// -values in substring() won't start from the end, it will become 0
// -values only count for slice()
const str3 = 'Pneumonoultramicroscopicsilicovolcanoconiosis';
console.log(str3.substring(8, 13));
console.log(str3.substring(str3.length-15, str3.length-8));
console.log(str3.slice(-15, -8));


// trim() important for when no control over user's input
const str4 = '    Hello World    ';
console.log(str4.trim());
const externalData = [
    {
        title: 'How to code     ',
        author: ' Zach'
    },
    {
        title: 'What is vim?',
        author: ' Zach'
    },
    {
        title: '   How do loops work in JavaScript?     ',
        author: ' Zach'
    },
    {
        title: '   Intro to C++ ',
        author: ' not Zach'
    }
]
externalData.forEach(object => {
    object.title = object.title.trim();
    object.author = object.author.trim();
})
console.log(externalData);




 
/*** 
 * 
 * Arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 * ***/
// forEach() / map() / filter() / reduce() <-- check learn5-callback.js & 25-beginner-challenges.md

// helpful for linked lists :) vvv
// push() / pop()       --> adds & removes last element of array
// unshift() / shift()  --> adds & removes first element of array

// slice()      --> just like str, returns extracted part   original array is NOT affected
// splice()     --> original array IS AFFECTED by removing / replacing / adding to existing elements
// splice(start, deleteCount, item1)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 2, 'Feb'); // remove March & April     ['Jan', 'Feb', 'June']
months.splice(2, 1, 'May'); // replace June for May     ['Jan', 'Feb', 'May']
months.splice(3, 0, 'June'); // add June at the end     ['Jan', 'Feb', 'May', 'June']
months.splice(2, 0, 'March', 'April'); // After Feb, add March + April
console.log(months);

// findIndex() / indexOf() --> findIndex more powerful than indexOf
//      Both return index of first element, if not found, return -1;
//      findIndex focuses more on satisfying testing FUNCTION (callback)
//      indexOf focuses more on primitive element being found
console.log(months.indexOf('Feb'));

const notZach = externalData.findIndex(object => {
    return object.author !== 'Zach';
})
console.log(notZach);

const newExternalData = externalData.map(object => {
    object.author = 'Sam';
    return object;
})
console.log(newExternalData);


// includes()   --> return t / f if value exists in array
// includes(searchElement, fromIndex >=)   -1 starts at end
console.log(months.includes('July'));
console.log(months.includes('jan'));
console.log(months.includes('Jan'));