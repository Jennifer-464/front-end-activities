/**
 * Error handling
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 * Ex. User posts on IG and internet goes out
 *      Prefer to return error msg rather than app crashing
 */

// ReferenceError
// Ex. console.log(numArray); when var not created

// SyntaxError

// TypeError
// - an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
// - when attempting to modify a value that cannot be changed; or
// - when attempting to use a value in an inappropriate way.
// Ex. const num = 20;
//     num.toUpperCase();

try {
    // check for errors
    var num = 20;
    num.toUpperCase();
} catch(e) {
    // if error
    console.log(e instanceof TypeError);
    console.log(e.message);
}

// if have const in try{}, can't re-run

// NaN          Ex. Number("some text")

// null         Ex. let phoneNum = null;
//              Ex2. "bob".match(/a/);
//              Basically an absence of anything, aka falsy

// undefined    Ex. let name;
//              Variables are just not defined yet