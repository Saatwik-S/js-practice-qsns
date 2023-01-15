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
 

console.log(sameDigitsCheckArrFn(22))
console.log(sameDigitsCheck(23))
