/*
* ******
! OBJECTS
* ******
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3, 
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
}; 


//? DOT NOTATION
// While we use bracket notation with arrays, we use something called DOT NOTATION for objects. 

// console.log('All Data', netflix);
// console.log('Just Season Info:', netflix.season1.seasonInfo);
// We are capable of utilizing bracket notations as well
console.log('Episode:', netflix.season1.seasonInfo.episodeInfo[3].episodeName);


//? JSON Objects
/*

    - JSON: JavaScript Object Notation
    - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only.
    -JSON exists as a string - useful when you want to fetch data from a server.
    - needs to be converted to a native JS object if you want to acess it. 

*/

let spaceJam = {
    toonSquad: {
        human: 'Micheal Jordan',
        rabbit1: 'Bugs',
        tsbbit2: 'Lola', 
        duck: 'Daffy',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky'
    }
}

//Object.keys() will return an array of strings that represent the properties of that object.
console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad.tDevil)); 

console.log(Object.values(spaceJam.toonSquad)); 

//? Object Bracket Notation
/*
 - object bracket notationcan also allow us to find a value in an object.
 - using object bracket notation can be handy if we want to store a  key in a variable and then use that vaariable to parse through an object.
 - this works because ALL keys in an object are STRINGS.
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

//keys are always strings

// Dot Notation
console.log(garden.vegetable);

//Square Bracket
let flowerType = garden['flower'];
console.log(flowerType);
//We are accessing the keys within our object by a specific namme within our square bracket. The keyname that is passed needs to be wrapped in quotes as all  keys in an object are strings.

let baking = {};
baking['zucchini'] = 'better make some bread';
//console.log(baking); 
// We have the ability to set NEW key/value pairs using square brackets. 


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};
console.log(baking[garden['vegetable']]); // here we are saying the same thing as we did abovem except we are passing info from object. garden['vegetable'] is the same as 'zucchini' up above. 

let testObj = {
    'Spaces Here': true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);

