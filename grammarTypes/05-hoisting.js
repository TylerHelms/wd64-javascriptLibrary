/*
* ******
! HOISTING
* ******

    What is Hoisting?
        - JS pulls all the variables and function calls to the 'top' of their respective scope prior to being executed.
        - Only the declaration is pulled up, NOT the assignment
        - var gets hoisted let does not 
        - declare our (global) variables at the top of the code. 
*/

// console.log(hoistedVar);

// console.log('How JS see hoistedVar: ', typeof hoistedVar);
// v//ar hoistedVar = 'using var'
// let hoistedVar = 'using let';

//console.log(noVariable);


var declaration; // without assignment 
console.log(usage);

declaration = 10; // assigning our variable
console.log(usage);

var usage = declaration + 10;

console.log(usage);

//? Hoisting in a Function 
// This process is considered the same within a function. On the first pass, it reads it, pushes the declarations to the top and then executes  them in the order that they are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope";
    console.log('Prior to the declaring ', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);

}

testHoist(); 
console.log(becomesGlobal);

// It  is best practice to ALWAYS declare variable regardless of whether they are in a function or global scope. This mekes it clear how it shoild be handled. 

//? Using LET
// The keyword 'let' is block scoped and not function scoped

console.log(letVariable);
let letVariable = 'Using Let'; 
// Throws throws  a ReferenceError due to ES6 not accepting undeclared variables. This is to ensure we ALWAYS declare our variables FIRST. 


//? Hoisting Function 
// Function Declarations:

hoistedFunc();  // this invokes it

function hoistedFunc() {
    console.log('This is a hoisted function');
}

// Function Expression. 
// These are NOT hoisted. 

expressionFunc();
let expressionFunc = function () {
    console.log('Works?');
}

//for the sake of organization: DECLARATIONS, FUNCTIONS, AND THEN MAIN

