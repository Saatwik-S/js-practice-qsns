const { test, expect } = require('@jest/globals');
const { caseSensitiveEndArrFn, caseSensitiveEnd } = require('./checkCaseSensitiveEnd');

test('Check Case Sensitive Suffix 1', () => {
    expect(caseSensitiveEndArrFn('JavaScript')).toBe(true);
});
test('Check Case Sensitive Suffix 2', () => {
    expect(caseSensitiveEndArrFn('TypeScript')).toBe(true);
});
test('Check Case Sensitive Suffix 3', () => {
    expect(caseSensitiveEndArrFn('Nothing')).toBe(false);
});
test('Check Case Sensitive Suffix 4', () => {
    expect(caseSensitiveEndArrFn('Charger')).toBe(false);
});
test('Check Case Sensitive Suffix 5', () => {
    expect(caseSensitiveEnd('CarScript')).toBe(true);
});
test('Check Case Sensitive Suffix 6', () => {
    expect(caseSensitiveEnd('NearScript')).toBe(true);
});
test('Check Case Sensitive Suffix 7', () => {
    expect(caseSensitiveEnd('Laptop')).toBe(false);
});
test('Check Case Sensitive Suffix 8', () => {
    expect(caseSensitiveEnd('bilScip ')).toBe(false);
});