const isALeapYearArrFn = (year) =>

    year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

function isALeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

}

console.log(isALeapYear(2000))
console.log(isALeapYear(2019))