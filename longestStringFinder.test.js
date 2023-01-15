const { longestString, longestStringArrFn } = require("./longestStringFinder");

test('Longest String Finder test 1', () => {
    expect(longestString(['We','love','code','academy'])).toBe('academy');
})
test('Longest String Finder test 2', () => {
    expect(longestString(['This','is','a','door','step'])).toBe('step');
})
test('Longest String Finder test 3', () => {
    expect(longestString(['This','is','a','table','lamp'])).toBe('table');
})
test('Longest String Finder test 4', () => {
    expect(longestString(['Macbook','Pro','is','the','fastest','laptop'])).toBe('fastest');
})
test('Longest String Finder test 5', () => {
    expect(longestStringArrFn(['The','cupboard','is','closed'])).toBe('cupboard');
})
test('Longest String Finder test 6', () => {
    expect(longestStringArrFn(['Dinner','Buffet','Package'])).toBe('Package');
})
test('Longest String Finder test 7', () => {
    expect(longestStringArrFn(['The','Television','is','not','working'])).toBe('Television');
})
test('Longest String Finder test 8', () => {
    expect(longestStringArrFn(['The','charger','is','lost'])).toBe('charger');
})