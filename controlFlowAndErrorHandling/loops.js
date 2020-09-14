/*  
* ******
! FOR LOOPS 
* ******
    - Loops help us repeat a process without writing a lot of code

    We need to:
        1) create an index
        2) run a condition 
        3) change the indexing variable (execution of condition)
*/

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

/*
    We state our loop with a "for"
    Within thid functionm, we are injecting some parameters that JS will run against
            (Index; condition; change index -> result)

            for(create index variable>; run condition>; <change index>)[
                *will cont. until run condition is met 
            ]
*/
/*
let x = 20;
let i = 10;

for (let i = 10; i<= x; i++) {
    console.log(i);
}
*/

//! Challenge

for (let i = 2; i > -10; i -= 4) {
    console.log(i);
}



let word ='supercalifragilisticexpialidocious';

for (let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
}

/*
* *******
! FORIN LOOP
* *******
*/ 

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

/*
    for (variable IN object) {
        <statement>
    }
*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
    //console.log(item)
    console.log(list[item]);
};

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

for(item in name) {
    console.log([name]);
}

  //STUDENT EXAMPLE
let name = 'piCard'

let fullName; 

for (char in name) {
     //console.log(char);
    char == 0 ? fullName = name[char]. toUpperCase() : fullName += name[char].toLowerCase(); 
   
}
console.log(fullName);

/*
    1) We are taking the values of the "n" index and declaring the position of 0
    2) We assign our empty variable to equal that positioned value.
    3) if that index is 0 , we will take that value 
*/

/*
* *******
! FOROF LOOP
* ******

    - In order to run a FOR OF loop, the "thing"  must be numbered like an array.

    let object = {
        key: value,
        key: value,
        key: value
    };

    for (o of object)n {
        <objects>
    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos); 
}
/*
? Quick recap 
    for loop: loops through a block of code until the counter reaches a sprcified number.
    for in loops: loops through properties of an object
    for of loops: loops over iterable objects as an arrays and strings *strings can be accessed much in the same way as arrays.
*/