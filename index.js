const returnFirstTwoDrivers = function (array) {return array.slice(0,2)};

const returnLastTwoDrivers = function (array) {return array.slice(-2, array.length)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return (fare) => fare * integer;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, selection) {
    if (selection === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array);
    }
    else if (selection === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    }
}
