/*
// LECTURE: Values and Variables
let country = 'Poland';
let continent = 'Europe';
let population = 40;
console.log(country);
console.log(continent);
console.log(population);
*/

/*
// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// LECTURE: let, const and var
language = 'polish';
const country = 'Poland';
const continent = 'Europe';
const isIsland = false;
isIsland = true;
*/

/*
// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
country +
' is in ' +
continent +
', and its ' +
population +
' million people speak ' +
language;
console.log(description1);
*/

// Coding Challenge #1

// Data 1:
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// Data 2:
markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2

console.log(markBMI, johnBMI)

const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)