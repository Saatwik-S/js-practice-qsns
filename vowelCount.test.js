const { countVowels, countVowelsArrFn } = require("./vowelCount");

test('Vowel Count test 1', () => {
    expect(countVowels('MerRy WeAtHer')).toBe(3);
})
test('Vowel Count test 2', () => {
    expect(countVowels('dInNer BufFet')).toBe(3);
})
test('Vowel Count test 3', () => {
    expect(countVowels('BISleri')).toBe(2);
})
test('Vowel Count test 4', () => {
    expect(countVowels('mAcBOOk aIR')).toBe(1);
})
test('Vowel Count test 5', () => {
    expect(countVowelsArrFn('tAbLe Lamp')).toBe(2);
})
test('Vowel Count test 6', () => {
    expect(countVowelsArrFn('lApTop')).toBe(1);
})
test('Vowel Count test 7', () => {
    expect(countVowelsArrFn('comPliMenTaRY')).toBe(4);
})
test('Vowel Count test 8', () => {
    expect(countVowelsArrFn('waTer BOtTle')).toBe(3);
})