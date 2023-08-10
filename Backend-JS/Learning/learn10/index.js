// import { Teacher } from "./teacher.js";
// Default -> import ... from '';
// Named -> import {...} from '';

import Teacher, { promote } from "./teacher.js";
import * as myMath from "./mathFunctions.js";
import User, { printAge as printUserAge, printName } from "./user.js";

const teacher = new Teacher("Mosh", "MSc");
teacher.walk();
teacher.teach();
console.log();

console.log(myMath.add(5, 9));
console.log();

const bob = new User("Bob", 45);
printName(bob);
printUserAge(bob);
console.log();