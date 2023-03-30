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