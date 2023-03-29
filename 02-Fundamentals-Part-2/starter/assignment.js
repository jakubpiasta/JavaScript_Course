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