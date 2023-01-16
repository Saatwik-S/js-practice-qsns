
const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length == 0){
        throw ('Unsupported Type'); }


    return numbers.map(e => e * 2);

};

module.exports = { doubleNumbers };

