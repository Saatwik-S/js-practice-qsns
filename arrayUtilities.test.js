const { describe, it, expect } = require('@jest/globals');
const { doubleNumbers } = require('./arrayUtilities');
describe('Array Utilities', () => {
    describe('Double Numbers', () => {
        it('Should double the elements when the input is an Array', () => {
            const result = doubleNumbers([1, 2, 3]);
            expect(result).toStrictEqual([2, 4, 6]);
        });

        it('Should return -1 when the input is not an Array', () => {

            expect(() => {
                doubleNumbers('123');
            })
                .toThrow('Unsupported Type');
        });
    });
});