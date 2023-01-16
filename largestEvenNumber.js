/**
 * 
 * @param {Array<Number>} arr 
 */
const largestEvenNumberArrowFn = (arr) => {
    let largestEvenNumber = -1;
    arr.forEach(e => {
        largestEvenNumber = e % 2 == 0 && e > largestEvenNumber ? e : largestEvenNumber;
    });
    return largestEvenNumber;
};

/**
 * 
 * @param {Array<Number>} arr 
 */
function largestEvenNumber(arr) {
    let largestEvenNumber = -1;
    arr.forEach(e => {
        largestEvenNumber = e % 2 == 0 && e > largestEvenNumber ? e : largestEvenNumber;
    });
    return largestEvenNumber;

}

module.exports = {largestEvenNumber, largestEvenNumberArrowFn};

