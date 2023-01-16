const { test, expect } = require('@jest/globals');
const { increaseCharacter, increaseCharacterArrFn } = require('./characterIncrease');


test('Character Increase test 1', () => {
    expect(increaseCharacter('abcde')).toBe('bcdef');
});
test('Character Increase test 2', () => {
    expect(increaseCharacter('zucinni')).toBe('avdjooj');
});
test('Character Increase test 3', () => {
    expect(increaseCharacter('dinner')).toBe('ejoofs');
});
test('Character Increase test 4', () => {
    expect(increaseCharacter('Marriot')).toBe('Nbssjpu');
});
test('Character Increase test 5', () => {
    expect(increaseCharacterArrFn('Bisleri')).toBe('Cjtmfsj');
});
test('Character Increase test 6', () => {
    expect(increaseCharacterArrFn('MacbookPro')).toBe('NbdcpplQsp');
});
test('Character Increase test 7', () => {
    expect(increaseCharacterArrFn('mocktail')).toBe('npdlubjm');
});
test('Character Increase test 8', () => {
    expect(increaseCharacterArrFn('azure')).toBe('bavsf');
});