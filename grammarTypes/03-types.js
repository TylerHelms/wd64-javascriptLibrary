/* 
* *******
! TYPES
* ******

? Data and STructure Types
* *******
    - Primitive Data Types:
        - boolean
        - undefined
        - number
        - string
            - bigInt
            - symbol
    - null
    - object
    - funtion
*/

//? BOOLEANS
//* **********

// a boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);



// ? NULL
// A null value is an empty value. Think of it as an empty container that has space to fill.

let empty = null;
console.log(empty);

//? UNDEFINED 
// No value has been assigned to a container.

let undef = undefined;
console.log(undef); 

let password;
console.log(password);

/*
 - Null is like a container with npthing in it, 
 - Null you can trust as zero -  undefined not so much.
 - Undefined is when a variable has never been set, or hasn't been created yet. 
 */

 //? NUMBERS

 let degrees = 90;
 console.log(degrees);

 let precise = 999999999999999; // 15 9's
 console.log(precise);

 let rounded = 9999999999999999; // 16 9's
 console.log(rounded);
 // JS gives us space for the 15 9's before rounding up. 

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed, be aware. 

let whatIf = (0.2 * 10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
// console.log("." + whatIf);


//? STRINGS 

// Strings represent text and are wrapped in either single or doube quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve'; 
console.log(inception, singleQ);

//? NUmber vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = ('1050' + '100');
console.log(addTheseAlso);

//Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// we can use an operator called 'typeof' that returns a string that tells us exactly ehat our variable 'type' is. 

let stringTollNumber = Number('1150')
console.log(stringTollNumber);
console.log(typeof stringTollNumber);

// const log = console.log; // We can reduce oour typing by setting console log to a variable that doesn't change.
// log('test');

//? OBJECTS
/*
- Onjects are used to store many values instead of a singular value.
- Consider these as a collection of various properties.
- denoted by curly brackets: []
*/

let frodo= {
    race: 'hobbit', //- string
  rings: 1, // number 
  string: true, //boolean
}

console.log(frodo);
console.log(typeof frodo);
//1: key
//2: value

//? ARRAYS
/* 
    - Containers that hold a list of items.
    - denoted by square brackets: []
    - all items are within the square brackets.
    - regardless of datatype, each item is separated by a comma.

*/

let arrayList = ['pos 1', 'pos 2', 'pos3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three'];
// let anotherExample = []
console.log[anotherExample];

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own. 





//? ADDITION vs CONCATENATION 
/*
    - JS sees the "+" in two different ways. 
        - When combined with numbers, uses built-in math functionality.
        - When combined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Tyler";
let lastName = "Helms";
let houseNumber = 12314;
let street = ("Falling Leaves Trail");
let city = ("Indianapolis");
let state = ("Indiana");
let zipcode = 46229; 

console.log(firstName, lastName + ',', houseNumber, street + ',' , city + ',' , state, zipcode);

//? STRING: PROPERTIES 
/*
    - strings have properties, or the qualities associated with that string.
    - the length of a string is a property
*/

let myName = "Tyler";
console.log(myName.length);

//? String: Methods

/*
    - methods are tools that can help us manipulate our data
*/

let myNameIs = 'Tyler';
console.log(myNameIs.toUpperCase()); // this is a method that changes a string to a uppercase
console.log(myNameIs.toLowerCase()); // changes to lowercase

let home = 'My home is Cumberland';
console.log(home.includes('Cumberland'));

