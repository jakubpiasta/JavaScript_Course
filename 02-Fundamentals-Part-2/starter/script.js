'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`); 

// const interface = `Audio`;
// const private = 534;
*/

/*
function logger() {
    console.log(`My name is Jakub`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration
function calcAge1(birthYear) {;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, "Jonas"));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

yearsUntilRetirement(1991, 'Jonas');
yearsUntilRetirement(1950, 'Mike');
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.indexOf("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Peter");
}
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const namKey = "Name";
console.log(jonas["first" + namKey]);
console.log(jonas["last" + namKey]);

// console.log(jonas."last" + nameKey);

const intrestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");

if (jonas[intrestedIn]) {
    console.log(jonas[intrestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
console.log(jonas.getSummary());
*/

// console.log("Lifting wieghts repetition 1");
// console.log("Lifting wieghts repetition 2");
// console.log("Lifting wieghts repetition 3");
// console.log("Lifting wieghts repetition 4");
// console.log("Lifting wieghts repetition 5");
// console.log("Lifting wieghts repetition 6");
// console.log("Lifting wieghts repetition 7");
// console.log("Lifting wieghts repetition 8");
// console.log("Lifting wieghts repetition 9");
// console.log("Lifting wieghts repetition 10");

/*
// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};
*/

/*
const jonas = [
     "Jonas",
     "Schmedtmann",
     2037 - 1991,
     "teacher",
     ["Michael", "Peter", "Steven"]
];

const types = [];

for(let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};

console.log(types);

const years = [1991, 2007, 1961, 2020];
const ages = [];

for(let year = 0; year < years.length; year++) {
    ages.push(2037 - years[year]);
};

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---")
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== "string") continue;

    console.log(jonas[i], typeof jonas[i]);
};

console.log("--- BREAK WITH NUMBER ---")
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === "number") break;

    console.log(jonas[i], typeof jonas[i]);
};
*/

/*
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
};

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for(let repetition = 1; repetition < 6; repetition++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${repetition}`);
    };
};
*/

/*
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };

let rep = 1;
while(rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++
};

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end...");
}
*/