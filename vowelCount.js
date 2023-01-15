const { moduleExpression } = require("@babel/types");

const vowels = ['a', 'e', 'i', 'o', 'u'];
const countVowelsArrFn = (str) => {
    let counter = 0;
    str.split('').forEach(e => {
        counter += (vowels.includes(e) ? 1 : 0);
    })
    return counter;
}
function countVowels(str) {
    let counter = 0;
    str.split('').forEach(e => {
        counter += (vowels.includes(e) ? 1 : 0);
    })
    return counter;
}


module.exports = {countVowels, countVowelsArrFn}

const testCases = ['MerRy WeAtHer','dInNer BufFet', 'BISleri', 'mAcBOOk aIR', 'tAbLe Lamp', 'lApTop', 'comPliMenTaRY', 'waTer BOtTle']


testCases.forEach((e, i ) => {
    console.log(`test('Vowel Count test ${i+1}', () => {
        expect(countVowels('${e}')).toBe(${countVowels(e)});
    })`)
}
    )