/**
  * 
  * @param {Number} num 
  * @returns {Boolean}
  */ 

const sameDigitsCheckArrFn = (num) => {
   const res = num.toString().split('').reduce((prev, curr) => 
         prev === curr && prev
    )
    return res == false ? false : true; 

}
/**
  * 
  * @param {Number} num 
  * @returns {Boolean}
  */ 

function sameDigitsCheck (num) {
    const res = num.toString().split('').reduce((prev, curr) => 
          prev === curr && prev
     )
     return res == false ? false : true; 
 
 
    }
 
    module.exports = {sameDigitsCheck, sameDigitsCheckArrFn}

//     const testCases = [22, 123, 4444, 989, 0903, 555, 222, 435];

//  testCases.forEach((e, i) => {
//     console.log(`test('Same Digit Test test ${i+1}', () => {
//         expect(sameDigitsCheck(${e})).toBe(${sameDigitsCheck(e)});
//     })`)
// })
