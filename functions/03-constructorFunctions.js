/*
* *******
! CONSTRUCTOR FUNCTIONS
* *******

    - Functions allows us to easily create a unique solution for different circumstances by using paramters.
        - creating severa; different objects with the same keys but different values. 

*/

//Opt 1: 
let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}
let person2 = {
    name: 'Jeremy',
    age: 24,
    canVote: true
}
let person3 = {
    name: 'Tyler',
    age: 24,
    canVote: true
}

//Opt 2 
// (1)      (2)        (3)   
function Person(name, age, canVote) {
//  (4)   (5)     (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
// console.log(typeof Person); 
//            (7)    (8)
let person4 = new Person('James', 80, true);
console.log(person4);

/*
        1. The keyword is function 
        2. The function NAME. For Constructor Functions, the name should be capitalized.
        3. The parameters. These will be the values of the object once this function is in use.
        4. The 'this' leyword. 'this' gives us the ability to refer back to whatever called, or whatever activates it. In this case, 'this' refers tp 'Person'
        5. This will be a ley of the new object we will create. This is NOT referring to parameter. 
        6. This is referring to the parameter we pass through our constructor function.
        7 & 8: This 'new leyword is calling our Person function, creating a  new person with the values we passing as arguments, and storing that person in a variable. 
 */