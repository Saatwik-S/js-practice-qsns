const { sameDigitsCheckArrFn, sameDigitsCheck } = require("./sameDigitsCheck");

test('Same Digit Test test 1', () => {
    expect(sameDigitsCheck(22)).toBe(true);
})
test('Same Digit Test test 2', () => {
    expect(sameDigitsCheck(123)).toBe(false);
})
test('Same Digit Test test 3', () => {
    expect(sameDigitsCheck(4444)).toBe(true);
})
test('Same Digit Test test 4', () => {
    expect(sameDigitsCheck(989)).toBe(false);
})
test('Same Digit Test test 5', () => {
    expect(sameDigitsCheckArrFn(903)).toBe(false);
})
test('Same Digit Test test 6', () => {
    expect(sameDigitsCheckArrFn(555)).toBe(true);
})
test('Same Digit Test test 7', () => {
    expect(sameDigitsCheckArrFn(222)).toBe(true);
})
test('Same Digit Test test 8', () => {
    expect(sameDigitsCheckArrFn(435)).toBe(false);
})