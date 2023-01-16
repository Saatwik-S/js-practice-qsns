/** * 
* @param {Number} num 
  * @returns {Boolean}
*/


const sameDigitsCheckArrFn = (num) => {
    const res = num.toString().split('').reduce((prev, curr) => 
        prev === curr && prev
    );
    return res == false ? false : true; 

};
/**
* 
 * @param {Number} num 
  * @returns {Boolean}
 */

function sameDigitsCheck (num) {
    const res = num.toString().split('').reduce((prev, curr) => 
        prev === curr && prev
    );
    return res == false ? false : true; 
 
 
}
 
module.exports = {sameDigitsCheck, sameDigitsCheckArrFn};



