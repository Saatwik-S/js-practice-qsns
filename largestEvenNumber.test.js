const { expect, test } = require('@jest/globals');
const {largestEvenNumber, largestEvenNumberArrowFn} = require('./largestEvenNumber');

test('Largest Even Number Test 1', () => {
    expect(largestEvenNumber([79,39,21,86,99])).toBe(86);
});
test('Largest Even Number Test 2', () => {
    expect(largestEvenNumber([14,20,40,88,37])).toBe(88);
});
test('Largest Even Number Test 3', () => {
    expect(largestEvenNumber([68,38,66,33,5])).toBe(68);
});
test('Largest Even Number Test 4', () => {
    expect(largestEvenNumber([80,64,66,20,65])).toBe(80);
});
test('Largest Even Number Test 5', () => {
    expect(largestEvenNumberArrowFn([92,19,74,94,19])).toBe(94);
});
test('Largest Even Number Test 6', () => {
    expect(largestEvenNumberArrowFn([16,33,26,47,51])).toBe(26);
});
test('Largest Even Number Test 7', () => {
    expect(largestEvenNumberArrowFn([68,0,14,63,35])).toBe(68);
});
test('Largest Even Number Test 8', () => {
    expect(largestEvenNumberArrowFn([98,70,98,94,53])).toBe(98);
});