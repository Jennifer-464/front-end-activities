/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
const pieNum = Math.PI
console.log(pieNum);

console.log(Math.E);

console.log(Math.abs(-60));

console.log(Math.ceil(pieNum)); // round up

console.log(Math.floor(pieNum)); // round down

console.log(Math.round(pieNum));
console.log(Math.round(5.5));
console.log();

const numArr = [3, 4, 5, 6];
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));
console.log(Math.min(333, 302, 55));
console.log(Math.max(333, 302, 55));

const starterPokemon = ['pikachu', 'charmander', 'squirtle', 'bulbasaur'];
let randomDecimal = Math.random() * starterPokemon.length; // random dec # from (0 inclusive, length exclusive)
let randomIndex = Math.floor(randomDecimal);
let randomPokemon = starterPokemon[randomIndex];
console.log(randomPokemon);