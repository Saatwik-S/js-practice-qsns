const { expect, test } = require('@jest/globals');
const { concatStrings, concatStringsArrFn } = require('./concatStrings');

test('Concat String Test 1', () => {
    expect(concatStrings(['code', 'academy'])).toBe('odeacademy');
});
test('Concat String Test 2', () => {
    expect(concatStrings(['Apple', 'Macbook', 'Pro'])).toBe('ppleMacbookPro');
});
test('Concat String Test 3', () => {
    expect(concatStrings(['Study', 'Lamp'])).toBe('tudyLamp');
});
test('Concat String Test 4', () => {
    expect(concatStrings(['Mineral', 'Water'])).toBe('ineralWater');
});
test('Concat String Test 5', () => {
    expect(concatStringsArrFn(['Aloft'])).toBe('loft');
});

test('Concat String Test 6', () => {
    expect(concatStringsArrFn(['Air', 'Conditioner'])).toBe('irConditioner');
});
test('Concat String Test 7', () => {
    expect(concatStringsArrFn(['dot', 'yum'])).toBe('otyum');
});
test('Concat String Test 8', () => {
    expect(concatStringsArrFn(['Visual', 'Studio'])).toBe('isualStudio');
});

