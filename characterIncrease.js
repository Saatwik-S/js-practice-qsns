/**
 * 
 * @param {String} str 
 */

const increaseCharacterArrFn = (str) => {
    let newStr = str.split('');
    newStr.forEach((e, i) => {
        if (newStr[i] === 'z') newStr[i] = 'a';
        else if (newStr[i] === 'Z') newStr[i] = 'A';
        else
        newStr[i] = String.fromCharCode(newStr[i].charCodeAt(0) + 1);
    })
    return newStr.join('');
}

/**
 * 
 * @param {String} str 
 */

function increaseCharacter(str) {
    let newStr = str.split('');
    newStr.forEach((e, i) => {
        if (newStr[i] === 'z') newStr[i] = 'a';
        else if (newStr[i] === 'Z') newStr[i] = 'A';
        else
        newStr[i] = String.fromCharCode(newStr[i].charCodeAt(0) + 1);
    })
    return newStr.join('');
}

console.log(increaseCharacterArrFn("lazyinterns"))