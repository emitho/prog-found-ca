// Question 1

var lastName = "Thorsplass";


// Question 2

var person = {
    age: 19,
    driversLicense: true
};


// Question 3

var outOfStock = false;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}


// Question 4

someNumbers = [49, 29, 12, 2, 0];

for(var i = 0; i < someNumbers.length; i++) {
    console.log(someNumbers[i]);
}


// Question 5

for(var counter = 15; counter <= 25; counter++) {
    console.log(counter);
}


// Question 6

for(var counter = 15; counter <= 25; counter++) {
    if(counter === 20) {
        console.log(counter);
    }
}


// Question 7

teslaModels = [
    {
        name: "Model S",
        rangeInKM: 610,
        airSuspension: true
    },
    {
        name: "Model 3",
        rangeInKM: 560,
        airSuspension: false
    }
];

for(var i = 0; i < teslaModels.length; i++) {
    console.log(teslaModels[i].rangeInKM);
    console.log(teslaModels[i].airSuspension);
}


// Question 8

function whatIDontLike(someBullshit) {
    console.log("I don't like " + someBullshit);
}

whatIDontLike("complaining");


// Question 9

function profitInDollars(income, expenses) {
    console.log(income - expenses);
}

profitInDollars(60000, 32000);


// Question 10

someArray = [];

function someFunction(argument) {
    someArray.push(argument);
}

someFunction("I just learned something new!");