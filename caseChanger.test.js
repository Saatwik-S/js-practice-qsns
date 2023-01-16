const {  test, expect } = require('@jest/globals');
const {caseChanger, caseChangerArrFn} = require('./caseChanger');

test('Case Changer test 1', () => {
    expect(caseChanger('MerRy WeAtHer')).toBe('mERrY wEaThER');
});
test('Case Changer test 2', () => {
    expect(caseChanger('dInNer BufFet')).toBe('DiNnER bUFfET');
});
test('Case Changer test 3', () => {
    expect(caseChanger('BISleri')).toBe('bisLERI');
});
test('Case Changer test 4', () => {
    expect(caseChanger('mAcBOOk aIR')).toBe('MaCbooK Air');
});
test('Case Changer test 5', () => {
    expect(caseChangerArrFn('tAbLe Lamp')).toBe('TaBlE lAMP');
});
test('Case Changer test 6', () => {
    expect(caseChangerArrFn('lApTop')).toBe('LaPtOP');
});
test('Case Changer test 7', () => {
    expect(caseChangerArrFn('comPliMenTaRY')).toBe('COMpLImENtAry');
});
test('Case Changer test 8', () => {
    expect(caseChangerArrFn('waTer BOtTle')).toBe('WAtER boTtLE');
});