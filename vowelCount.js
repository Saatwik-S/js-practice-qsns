const { moduleExpression } = require("@babel/types");

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
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
