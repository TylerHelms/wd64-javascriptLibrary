/*
 * *******
 ! SCOPE 
 * ******

 What is Scope?
    
    - scope is how a computer keeps track of all the variables in a program.
    -scope can also be nested, where there's an outer scope (global) that encloses an inner scope. 
 */

let scope = 'Earth'; // This is currently in the global scope of our JS file. 

function localScope() {
   // let scope = "Indiana"; // the state (local) eithin thr JS  "World//Globe"
    //console.log(`${scope} marks the local scope`);

    let place = 'Bloomington';

    function veryLocalScope() {
        //let scope = 'Indianapolis';
        console.log(`${scope} is the capital if Indiana`)
        console.log(`Just outside, we went to ${place}.`)
    }
    veryLocalScope();
};
console.log(`${scope} marks the global scope.`);
localScope(); 
// Scope Cjain: If a variable is not found, JS attempts to locate the requested informaation outside. 

//! ORDER MATTERS  
// JS reads from the top to bottom and acts according to what is being asled. JS is known as a single-threaded language which means it can only execute a single task at a time. 

let ordered = 1;

function layerOne() {
    let ordered = 2;

    function layerTwo() {
        let ordered = 3;
        console.log(ordered);
    }
    layerTwo();
    console.log(ordered);
}

layerOne(); // we call this function prior to console logging our variable  "ordered" within our Global
console.log(ordered); 

//? Reassignments / VAR vs LET
// - var is scoped to the nearest function block.
// - let is scoped to the nearest enclosing block

let a = 10;
function reassign() {
    a = 30 // we are keeping this variable open and, with the 'let' keyword, we are capable of changing the value that is currently being help within that variable. 
    console.log(`a is being set to ${a} in this function`);
}
console.log(`Before reassigning function: ${a}`);
reassign();
console.log(`After reassigning function: ${a}`);

var x = 2;

function varScope() {
    var x = 4;
    if(true) {
        var x = 5;
        console.log(x)
    };
    console.log(`Var Block Scope: ${x}`)
}

varScope();
console.log(x);

// statements like "if" or loops don't create a new scope. If a variable is defined inside a block statement, it will remain in that scope. However, we can utilize let and const as keywords to help us control how our variables are viewed. 



