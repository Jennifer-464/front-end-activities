/**
 * Watched: https://www.youtube.com/watch?v=NCwa_xi0Uuc
 * Resource: https://www.freecodecamp.org/news/destructuring-patterns-javascript-arrays-and-objects/
 * YT Vid: https://www.youtube.com/watch?v=cRHQNNcYf6s
 */


// var --> function
// let --> block
var imVar = "I'm a variable";
let imLet = "I'm a variable with let";
if (true) {
    var insideScopeVar = "var hello";
    let insideScopeLet = "let hello";
}

console.log(imVar);
console.log(imLet);
console.log(insideScopeVar);
// console.log(insideScopeLet); // will throw error
console.log();



// Objects & this
const person = {
    name: "Gem",
    age: 22,
    talkSpanish() {
        console.log("Hola, soy Jennifer");
    },
    talkGerman() {
        console.log("Hallo, ich heissen Jennifer");
    },
    setAge(newAge) {
        this.age = newAge;
    }
}
person.talkGerman();
person.name = "Jen";
person.setAge(23);
console.log(person);
console.log();



// Array & Object Destructuring
const [left, right] = [1, 2, 3, 4, 5, 6];
console.log(left, right);
const [aa, bb, , , cc] = [1, 2, 3, 4, 5, 6];
console.log(aa, bb, cc);

const address = {
    street: "the street",
    city: "the city",
    country: "the country"
}
const { street, city: myCity, country } = address;
console.log(street);
console.log(myCity);
console.log();



// Rest Element vv
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);
console.log(arr);
console.log();



// Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, 'a', ...second, 'b'];
console.log(combined);

const name = { name: "Jen" };
const job = { job: "non-profit" };
const personCombined = { ...name, ...job, location: "USA" };
console.log(personCombined);
console.log();



// Classes
class SpaceShuttle {
    constructor(targetPlanet) {
        this.planet = targetPlanet;
    }
    defaultLaunch() {
        console.log("We are going to the Moon!");
    }
    takeOff() {
        console.log(`Take off to ${this.planet}!`);
    }
    get getPlanet() {
        return this.planet;
    }
    set setPlanet(newPlanet) {
        this.planet = newPlanet;
    }
}
const launch1 = new SpaceShuttle("Jupiter");
launch1.defaultLaunch();
launch1.takeOff();
console.log(launch1.getPlanet);
launch1.setPlanet = "Venus";
console.log(launch1.getPlanet);
launch1.takeOff();
console.log();

/* Check folder "learn10" - covers modules
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}
const teacher = new Teacher("Mosh", "MSc");
teacher.walk();
teacher.teach();
console.log();
*/



// Promise
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true; // usually not defined with boolean
    if (responseFromServer) {
        resolve("We got the data");
    }
    else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
})
makeServerRequest.catch(result => {
    console.log(error);
})
