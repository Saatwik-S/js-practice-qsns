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

console.log(countVowelsArrFn("codeacademy"))