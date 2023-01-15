/**
 * 
 * @param {String} str 
 * @returns {Boolean}
 */
const caseSensitiveEndArrFn = (str) => str.endsWith("Script"); 


function caseSensitiveEnd (str) {return str.endsWith("Script");}

console.log(caseSensitiveEnd('javaScript'))
console.log(caseSensitiveEndArrFn('javascript'))