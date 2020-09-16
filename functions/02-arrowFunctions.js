/*
* *******
!  ARROW FUNCTIONS
* *******

Arrow functions re expressional functions that can be simplified into one of two forms, CONCISE and BLOCK BODY. 
Goal is to generate shpryer syntax for writing a function.

* Arrow Functions also DO NOT get hoisted. 

*/

function regFunc() {
    console.log('Regular');
}
regFunc();

//     (1)      (2)(3)          (4)
let arrowFunc = () => console.log('Arrow Func');
arrowFunc(); // still need to invoke our function 

/*
    1. Arrow functions are ALWAYS anonymous
    2. Parameters are still capable of being injected
        -if we only have pne parameter,we technically don't need the parans ()
        - BUT if we are not passing any parameters, it is REQUIRED to denote ()
    3. This syntax tells JS that we are about to process a function 
    4. Within this format, JS assumes the return statwment. 
    */

    //? CONCISE VS BLOCK BODY 

    //* Concise:

    let cBody = (x, y) => console.log(x + y);
    cBody(1, 2);

    let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log (`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`);

    slightlyComplex(3,1);
    slightlyComplex(1,5);

    //* Block 
    let blockArrow = (x,y) => {
        return `${x} are within a ${y}`;  
    }

    console.log(blockArrow(`We`, "Block Body")); 


    let sammpleBlock = x => {
        console.log(x);

    }
    sammpleBlock(99);