let x = 10;
console.log(x);

//! 1: getElementById

// console.log(document);
// console.log(document.body);

document.getElementById("testParagraph").style.color = 'blue';

let testPara = document.getElementById('testParagraph');
testPara.style.color = "red";
console.log(testPara);
//console.dir(testPara);

// Will only get the first ID 

//! 2: Query Selector All & innerText/innerHTML

console.log(document.querySelectorAll('p.sampleClass'));
// querySelectorAll returns a NodeList
// nodes are items in HTML like elements and text.

document.querySelectorAll('p.sampleClass')[0].innerText = 'My Text has changed!';
document.querySelectorAll('p.sampleClass')[2].id = 'num3'; 
console.log(document.querySelectorAll('p.sampleClass')[2]);
// bracket notation to acess the array of elements.
// innerText allows us to reference or change the text in that element.

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    pTag.innerText = 'My text has changed using a forEach() method.';
    // pTag.textContent = 'My text has changed using a forEach() method.';
    // pTag.innerHTML = 'My text has changed using a forEach() method.';
}) 

let showSpan = document.getElementById('spanTest');

console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

/*
    - InnerText simply reference or allows us to change the text of a specified element. Will return only visible text in a 'node'.

    -textContent does the same thing that innereText does, but will return the FULL text of a 'node'.

    -innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML element we're referencing. 
 */

//! 3: ADDVENTLISTENER - click 
let btn = document.getElementById("clickThis");


 console.log(btn);

 btn.addEventListener('click', event => {
     event.target.style.backgroundColor = 'blue';
     event.target.innerText = 'CLICKED'
     console.log(btn); 
 });


//! Challenge
 /* 
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/

// Ashton's example 
let red = true;
btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    red = !red;
});

//! 4: ADDVENTLISTENER - keyup

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    console.log(e.target.value); //e is short for event 
    console.log(document.getElementsByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'Something Changed';


    if (e.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'nothing has been typed...'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}...`;
    }
});


