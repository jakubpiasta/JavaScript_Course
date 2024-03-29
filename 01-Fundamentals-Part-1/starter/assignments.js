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
const language = 'polish';
const country = 'Poland';
const continent = 'Europe';
const isIsland = false;
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

/*
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
*/

/*
// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and it's ${population} milion people speak ${language}`
console.log(description)
*/

/*
//LECTURE: Taking Decisions: if / else Statements
if(population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} milion below average`);
}
*/

/*
//Coding Challenge #2
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2

if(markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`)
}
*/

/*
// LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`)
}
*/

/*
// LECTURE: Logical Operators

if (language === "English" && population < 50 && isIsland === false) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/

/*
// Coding Challenge #3

const avgScoreDolphins = (97 + 112 + 101) / 3
const avgScoreKoalas = (109 + 95 + 106) / 3

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`Dolphins wins the trophy!`);
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
    console.log(`Koalas wins the trophy!`);
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 & avgScoreKoalas >= 100) {
    console.log(`It's a draw. Both wins a trophy`);
} else {
    console.log(`Nobody wins the trophy`);
}
*/

/*
// LECTURE: The switch Statement
const language = 'arabic';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers`);
        break;
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'english':
        console.log(`3rd place`);
        break; 
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`)
}
*/

/*
// LECTURE: The Conditional (Ternary) Operator
population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
*/

/*
// Coding Challenge #4
const bill= 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); 
*/