
const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) throw 'Unsupported Type';
    if (numbers.length == 0) throw 'Length of array is 0';


    return numbers.map(e => e * 2);

};

const tripleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) throw 'Unsupported Type';
    if (numbers.length == 0) throw 'Length of array is 0';
    return numbers.map(e => e * 3);

}

const filterArrayForEvenNumbers = (numbers) => {
    if (!Array.isArray(numbers)) throw 'Unsupported Type';
    if (numbers.length == 0) throw 'Length of array is 0';
    const res = numbers.filter(e => e % 2 == 0);
    return res.length == 0 ? -1 : res;
}

const tripleElementsAndfilterForEvenNumbers = (numbers) => {
    if (!Array.isArray(numbers)) throw 'Unsupported Type';
    if (numbers.length == 0) throw 'Length of array is 0';
    const res = numbers.map(e => e * 3).filter(ele => ele % 2 == 0);
    return res.length == 0 ? -1 : res;
}

const tripleElementsAndFilterNumbersUsingReduce = (numbers) => {

    if (!Array.isArray(numbers)) throw 'Unsupported Type';
    if (numbers.length == 0) throw 'Length of array is 0';
    const res = [];
    numbers.reducex ((previous, current) => {
        if (current % 2 == 0) {
            res.push(current * 3);
        }

    });
    return res;
}

module.exports = { doubleNumbers, tripleElementsAndFilterNumbersUsingReduce, tripleElementsAndfilterForEvenNumbers, tripleNumbers };

