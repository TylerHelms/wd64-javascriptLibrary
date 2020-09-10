/*
* *******
! VARIABLES
* *******
*/

console.log("hello");
// It is a debugging tool

let a = 2; 
/*
| - let : is our KEYWORD
| - a :     is our NAME of our variable
| - = : is our ASSIGNMENT OPERATOR
| - 2 : is our variable VALUE
*/

let b = 1;

console.log(a + b); 

//! RESTRICTIONS
/*  
| - a variqble nqme must begin with a letter, underscore, or a dollar sign
| - numbers may follow the aboce characterm, BUT cannot come first.
| - no spaces are allowed ib variable names 
| - camelCase is the best practice for naming
- ex. 
    let myName = "Eric";
    is easier to read than
    let myname = "Eric"; 
*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
// let 4startswitchNumber = "Breaks";

console.log(startingWithLetter,_startingWithUnderscore, $startingWithDollarSign); 

let PascalCase;
let camelCase;
let snake_case;

/*
* KEYWORDS

var, let, and const
|
| - var: "old" keyword for variable. * We won't use as often but still a viable one to use. 

 - let: "new" keyboard for variabble (introduced with ES6 *newest version pf EOMAScript, which is a standardization of JS)

 - const: also new keyword that declares an  UNCHANGABLE, or constant, variable. 
*/

var variable = "var variable";
let letVariable = "let variable";

//let function = 1; Cannot use reserved words within a variable name - function is a reserved word. 

/*
* *******
! DECLARATIONS 
* *******
*/
// Declarations are the LEFT SIDE of the assignment. 
// let x;

// Intializatuins are theRIGHT SIDE of the assignment operator. 
// let x = 10

// 10 is our intialization

let y;
console.log("declaration", y)

y = 10;
console.log("intialization:", y)

y = 33;
console.log("intialization 2: ', y"); 

// We've set our variable with our let keyboard. With each interationm we have redeclared what it is. 

//? const

let today = "Great!";
const efa = "Wonderful!";
console.log("today, efa")

today = "Awesome!";
console.log(today, efa)

//efa = "Super!";
console.log(today, efa); 
// const akkiws ys ti make a variable that we don't want to change 