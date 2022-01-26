const { getReplaceValue } = require('../src/task1');

describe('getReplaceValue', () => {

    test('number is multiple only 3 and only 5', () => {
        expect(getReplaceValue(5)).toBe('1 2 three 4 five ');
    });

    test('number is multiple only 3 and 5',() => {
        expect(getReplaceValue('15')).toBe('1 2 three 4 five three 7 08_Practice_Morse three five 11 three 13 14 threeFive ');
    });

})