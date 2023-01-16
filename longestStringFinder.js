/**
 * 
 * @param {Array<String>} str 
 */
const longestStringArrFn = (arr) =>
    arr.length == 0 ? -1 : arr.reduce((prev, curr) =>  prev.length > curr.length ? prev : curr );


function longestString(arr) {
    return  arr.length == 0 ? -1 : arr.reduce((prev, curr) => prev.length > curr.length ? prev : curr );
}


module.exports = {longestString, longestStringArrFn};





