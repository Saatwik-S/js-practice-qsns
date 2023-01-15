/**
 * 
 * @param {Array<String>} str 
 */
const longestStringArrFn = (arr) =>
    arr.reduce((prev, curr) => prev.length > curr.length ? prev : curr);


function longestString(arr) {
    return arr.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
}

console.log(longestStringArrFn(["we", "love", "code", "academy"]))