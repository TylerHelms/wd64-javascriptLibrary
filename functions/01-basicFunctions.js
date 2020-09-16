/*
* ******
! FUNCTIONS 
* ******

Functions are a process that we call upom to run action.
    - Takw in input so that it can process, modify it or just respond to it.
    -Can be invoked (called upon) as often as we need.
*/

// (1)     (2)
function hi(){
    console.log('Hi!');
}

//1: Keyword
//2: Name of the function and the parenthesis for the parameter. 

//   (1)        (2)    (3)
function functionName() {
 //   (4)   
    return value
};
// (5)
functionName()

/*
    - 1: KEYWORD "function"
    - 2: NAME of "functionName"
    - 3: PARAMETER "currently empty"
    - 4 STATEMENT "to process"
    - 5 INVOKE "on switch"
*/

//? Function Declaration 
// A chunk of code that performs a set action when it is invoked
function funcOne() {
    console.log('Statement Here');
}
funcOne(); 

//? FUnction Expression
// assigning a function to a variable is what is called an EXPRESSION.
let first = function funcTwo() {
    console.log('Second Statement');
};
    first();
//console.log(first);

//? Anonymous Function 
//Anonymous Functions are stored in memory but the runtime doesn't automatically create a refrence to it.

let anon = function() {
    console.log('anon function')
}

anon();

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59

*/

// let grade = 100;
// switch(true) {
//     case (grade == 100):
//         console.log('You got a perfect score!')
//         break;
//     case (grade >= 89):
//         console.log("You received an A!");
//         break;
//     case (grade >= 79):
//         console.log("You received a B");
//         break;
//     case (grade >= 66):
//         console.log("You got a C");
//         break;
//     case (grade >= 59):
//         console.log ("Uh Oh! You received a D");
//         break;
//     case (grade <= 59):
//         console.log ("Get out");
// }



//? Parameters 

// Allow us to accept informaation already declared. 

function parameterFunc(num) {
    console.log(num)
}
parameterFunc(2); 
parameterFunc(9); 

let returnedVal = 5;
parameterFunc(returnedVal);

let firstName = 'Jane';
let lastName = 'Doe';


    // first and last are just place holders, they coukd be a, and b and still get the same result
function greeting(first, last) {
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter ${first}`);
    console.log(`This is the last parameter ${last}`);
}

 //greeting(firstName);
 //greeting(lastName); 
// greeting(firstName, lastName); 
// greeting('', lastName); 
greeting(firstName, null); 
