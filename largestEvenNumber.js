/**
 * 
 * @param {Array<Number>} arr 
 */
const largestEvenNumberArrowFn = (arr) => {
    let largestEvenNumber = -1;
    arr.forEach(e => {
        largestEvenNumber = e % 2 == 0 && e > largestEvenNumber ? e : largestEvenNumber;
    })
    return largestEvenNumber;
}

/**
 * 
 * @param {Array<Number>} arr 
 */
function largestEvenNumber(arr) {
    let largestEvenNumber = -1;
    arr.forEach(e => {
        largestEvenNumber = e % 2 == 0 && e > largestEvenNumber ? e : largestEvenNumber;
    })
    return largestEvenNumber;

}

console.log(largestEvenNumber([1,2,3,4,5]));
console.log(largestEvenNumberArrowFn([1,3,5,7]))