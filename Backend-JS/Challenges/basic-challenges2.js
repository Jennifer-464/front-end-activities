// operations

// CHALLENGE 1
const expression1 = 100 % 50; //0
const expression2 = 100 / 50; // 2
const expression3 = expression1 < expression2; // true
const expression4 = expression3 && 300 + 5 === 305; 
// 300 + 5
// 305 === 305
// true && true
const expression5 = !expression4; // !true --> false

console.log(expression5);

// how to combine?
// (100 % 50 < 100 / 50) && 300 + 5 === 305 



// ANOTHER CHALLENGE 2
const myObj = {
    prop1: 'first value',
    prop2: 20
  };

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);
console.log(result);
// 20 === (40 / 2) --> true




// ANOTHER CHALLENGE 3
// const myObj = {
//     nestedObje
// };
const myObjects = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2
    }
};

const myArr = [myObjects.nestedObject1, myObjects.nestedObject2];
// [{price: 100, quantity: 5}, {price: 150, quantity: 2}]

const output = (myArr[0].price * myArr[0].quantity) > (myArr[1].price * myArr[1].quantity); 
// (100 * 5) > (150 * 2)
// 500 > 300
// true
console.log(output);
  