const leapYears = function(year) {
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year % 100 != 0) || 
        (year % 400 == 0 && year % 100 == 0)){
        console.log(year % 4, year % 400, year % 100);
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
