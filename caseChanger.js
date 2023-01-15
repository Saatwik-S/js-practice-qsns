/**
 * 
 * @param {String} str 
 */
const caseChangerArrFn = (str) => {
    let newStr = str.split('');
    str.split('').forEach((char, idx) =>
        newStr[idx] = char == char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()

    )
    return newStr.join('');
}

/**
 * 
 * @param {String} str 
 */
function caseChanger(str) {
    let newStr = str.split('');
    str.split('').forEach((char, idx) =>
        newStr[idx] = char == char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()

    )
    return newStr.join('');
}


console.log(caseChangerArrFn("MeRRy hAD a LITTle lAMp"))