/*
* *******
! CONDITIONALS
* *******


? Falsy Values
    - false 
    - zero
    -"", '', ``
    - null
    - undefined
    NaN (not a number)


    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"


*/

/*
* *******
! IF
* *******

- "if" something is true, do "this thing" 

 */

 let light = 'on';

 if(light == 'on') {
     console.log('The light is on');
 };

 let weather = 68;
 if(weather < 70) {
     console.log('Wear a Jacket.');
 };

 let rain = true;

 if(weather < 70 && rain) { // rain == true
     console.log('It is a little chilly and will possibly rain.');
     // new function 
 };
    
 /* 
* ******
! IF ELSE
* ******
if/else statements allows us the ability to write out a chain of events.
 */

 let today = 75;

 if(today < 70) {
     console.log('It is' + today + ', wear a jacket');
   }  else {
         console.log('It is ' + today + ', No Jacket needed.')
     }
 
    /*
    Bronze:
     Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
*/

let name = "Tyler";
if(name == 'Tyler') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, is your name ' + name + '?');
}

/*
* **********
! ELSE IF 
* ***********
This is a condition that would be checked if the above condition was not met 
*/

let cookTime = 40;

if(cookTime === 45) { 
    console.log('let us feast!')
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5-15 ninutes`); // we used `` for this exercise
} else if (cookTime >= 20) {
    console.log(` It has only been ${cookTime} minutes. Wait another 10-25 minutes.`);  // ${ } is called string interpolation 
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it.....`);
}

// The end of the ELSE UF  statement should have a simple "else" to finish it. 


//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 27;
if (age >= 25) {
    console.log(` ${age} is getting old there, bud`);
} else if (age <= 17){
    console.log(` ${age} is too young to do anything.`);
} else if (age >= 18){
    console.log (` ${age} is old enough vote!`);
} else if (age >= 21) {
    console.log (` ${age} Yis old enough to drink!`); 
} else if(age >= 25) {
    console.log (` ${age} You can rent a car!`);
}
    


/*
* *******
! TERNARIES 
* ******    

    - This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a sinple line. 

*/


let myName = "Tyler";
/*
if(name == 'Tyler') {
   console.log('Hello, my name is ' + name + '.');
} else {
   console.log('Hello, is your name ' + name + '?');
}

 condition ? if true  : else result
*/
//   (1)                                    (2)                                 (3)
myName === 'Tyler' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}`);

/* 
        1: condition 
        2: True (if true)
        3: False (if False)
*/


//! CHALLENGE
// Take this if/else statement and make it into a ternary.


let lampOn = false;
let daytime = true;

/*
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

let lampOn = false ? console.log(`The lamp is on during the night ${lampOn}`) : console.log(`The lamp is off during the day ${daytime}`)  // my try - major fail 
*/
//showed un class

lampOn == true && daytime != true ? console.log('The lamp is on during the night') 
    : lampOn != true && daytime != true ? console.log('The lamp is off during the night') 
    : lampOn == true && daytime == true ? console.log('The lamp is on during the day.') 
    : lampOn != true && daytime == true ? console.log('The lamp is off during the day') 
    : console.log('What lamp'); 

 /*   // Tyler M's Example :
let lampOn = false;
let daytime = true;
console.log(`The lamp is ${lampOn ? "On" : "Off"} during the ${daytime ? "day" : "night"}`); */


/* 
* ******
! SWITCH
* *******

    - executes a block of code depending on different cases
*/

let instructor = 'Ing';

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Tean`);
        break;
        // Once each case has been evaluated and we return a result, we need to note "break" out from our switch statement
    case 'Zach' :
        console.log (`${instructor} is a part of the Web Dev Tean`);
        break;
    case 'Josh' : 
        console.log (`${instructor} is a part of the Software Tean`);
        break;
    default:  
    console.log (`Sorry, I can't find what ${instructor} teaches at this time`);
// nned to use a default to help us a catch thode cases when more are true
}

instructor = 'Zach';

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Doonovan':
        console.log(`${instructor} is part of the Web Dev team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is part of the Software Dev team`);
        break;
        console.log(`Sorry, I can't find what ${instructor} teaches.`); 
}




for (let x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}