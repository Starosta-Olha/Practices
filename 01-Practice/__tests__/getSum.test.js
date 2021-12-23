const { getSum } = require('../src/getSum');

describe('getSum', () => {

    test('not arguments value',() => {
        expect(getSum('', '')).toBe('enter argument values');
    });

    test('entered two number arguments',() => {
        expect(getSum(15, 125)).toBe('two number arguments');
    });

    test('entered two string arguments',() => {
        expect(getSum('15', '125')).toBe('two string arguments');
    });

    test('first arguments is number multiple of 3, 5, 15',() => {
        expect(getSum(15, '125')).toBe(110);
    });

    test('first arguments is number not multiple of 3, 5, 15',() => {
        expect(getSum(14, '125')).toBe(139);
    });

    test( 'second arguments is number multiple of 3, 5, 15',() => {
        expect(getSum('125', 14)).toBe(139)
    });

    test( 'second arguments is number not multiple of 3, 5, 15',() => {
        expect(getSum('125', 15)).toBe(110)
    });
})