// Code your solution in this file!

//1 return first two drivers
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const result = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(result);

//2 return last two drivers 
const returnLastTwoDrivers = function(drivers1){
    return drivers1.slice(-2);
};

const result2 = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(result2);

//3 selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//4 create fare multiplier
const createFareMultiplier = function (multiplier){
    return function(value){
        return value * multiplier;
    };
}

//5 fare doubler
const fareDoubler = createFareMultiplier(2);

//6 fare tripler
const fareTripler = createFareMultiplier(3);

//7 select different drivers (array of drivers, function)
const returnFirstTwoDrivers1 = function (drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers2 = function (drivers) {
    return drivers.slice(-2);
};

const selectDifferentDrivers = function (drivers, func){
    return func(drivers);
}