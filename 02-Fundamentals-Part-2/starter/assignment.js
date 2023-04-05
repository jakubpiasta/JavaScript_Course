'use strict';

/*
// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} milion people and its capital city is ${capitalCity}`);
}

describeCountry("Finland", 6, "Helsinki");
describeCountry("Poland", 40, "Warsaw");
describeCountry("Portugal", 33, "Lisbona");
*/

/*
// LECTURE: Function Declaration vs. Expressions
function percentageOfWorld1(population) {
    console.log(population / 7900 * 100);
}

percentageOfWorld1(1441);
percentageOfWorld1(40);
percentageOfWorld1(6);

const percentageOfWorld2 = function(population) {
    console.log(population / 7900 * 100);
}

percentageOfWorld2(1441);
percentageOfWorld2(40);
percentageOfWorld2(6);
*/

/*
// LECTURE: Arrow Functions
const percentageOfWorld3 = population => population / 7900 * 100;

console.log(percentageOfWorld3(1441));
*/

/*
// LECTURE: Functions Calling Other Functions
function percentageOfWorld1(population) {
    const populationPercentage = population / 7900 * 100;
    return populationPercentage;
}

const describePopulation = function(country, population) {
    const populationPercentage = percentageOfWorld1(population);

    return `${country} has ${population} milion people, which is about ${populationPercentage} of the world.`
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Poland', 40));
console.log(describePopulation('USA', 326));
*/

/*
// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody wins this time`);
    }
}

checkWinner(avgDolphins, avgKoalas);
*/

/*
// LECTURE: Introduction to Arrays
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populations = [40, 33, 6, 1441];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];

console.log(percentages);
*/

/*
// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Germany", "Czech Republic", "Slovakia", "Ukraine", "Lithuania", "Belarus", "Russia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Slovakia")] = "Republic of Slovakia";
console.log(neighbours);
*/

/*
// Coding Challenge #2
const calcTip = function(bill) {
    if (bill >= 50 & bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

/*
// LECTURE: Introduction to Objects
const myCountry = {
    country: "Poland",
    capital: "Warsaw",
    language: "polish",
    population: 40,
    neighbours: ["Germany", "Czech Republic", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia"];
};
*/

/*
// LECTURE: DOT vs. Bracket Notation
const myCountry = {
    country: "Poland",
    capital: "Warsaw",
    language: "polish",
    population: 40,
    neighbours: ["Germany", "Czech Republic", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia"]
};

console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry["population"] -= 2;
*/

/*
// LECTURE: Object Methods
const myCountry = {
    country: "Poland",
    capital: "Warsaw",
    language: "polish",
    population: 40,
    neighbours: ["Germany", "Czech Republic", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia"],
    describe: function() {
        console.log(`${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
*/

/*
// Coding Challenge #3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.BMI = this.mass / this.height ** 2
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.BMI = this.mass / this.height ** 2
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`)
} else if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`)
};
*/

/*
// LECTURE: Iteration: The for Loop
for(let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting `);
};
*/