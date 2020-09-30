//! Async/Await 

/*
    -Allows us to program in acynchronous manner while still allowing code to run in the background.
    - Makes our site as responsice as possible.
*/

//? Async Function (syntax)
/*
    - allows us to make a normal function asynchronous. Can't use "await"
    - must use the async keyword at the beginning of the function declaration
*/

async function myFN() {
    //await
}

const myAsyncFn = async () => {
    //await
}

const newFN = () => {
    // await (provides a syntax error because async is not declared)
}

async function fn() {
    return 'Hello';
}

fn().then(console.log);

fn().then(dataFromAsyncFun => {
    console.log(dataFromAsyncFun);
})

//? Await 
// pauses at each await expression 

fetch('https://random.dog/woof.json')
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err)); 

    // - Chaining .then() together returns a promise (resolve/reject) and is known as a method chaining. 

    // const response = await fetch('https://random.dog/woof.json');
    // const json = await response.json();
    // console.log(json);
    
    const request = async () => {
    const response = await fetch('await fetch(https://random.dog/woof.json');
    const json = await response.json();
    return json;
}


request().then(json => {
    console.log(json); 
})
    //practice by connecting to an HTML and messing with it 