const { test, expect } = require('@jest/globals');
const { isALeapYear, isALeapYearArrFn } = require('./leapYearFinder');

test('Leap Year Check test 0', () => {
    expect(isALeapYear(2001)).toBe(false);
});
test('Leap Year Check test 1', () => {
    expect(isALeapYear(2000)).toBe(true);
});
test('Leap Year Check test 2', () => {
    expect(isALeapYear(1990)).toBe(false);
});
test('Leap Year Check test 3', () => {
    expect(isALeapYear(2020)).toBe(true);
});
test('Leap Year Check test 4', () => {
    expect(isALeapYearArrFn(1560)).toBe(true);
});
test('Leap Year Check test 5', () => {
    expect(isALeapYearArrFn(2060)).toBe(true);
});
test('Leap Year Check test 6', () => {
    expect(isALeapYearArrFn(1300)).toBe(false);
});
test('Leap Year Check test 7', () => {
    expect(isALeapYearArrFn(1209)).toBe(false);
});