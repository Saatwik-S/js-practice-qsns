const isALeapYearArrFn = (year) =>

    year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

function isALeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

}

module.exports = {isALeapYear, isALeapYearArrFn};


