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