const { isCheckingNumber } = require('../src/isCheckingNumber');

describe('isCheckingNumber', () => {

    test('if the number is prime, even and not a multiple of 10',() => {
        expect(isCheckingNumber(2)).toEqual([true, true, false]);
    });

    test('number negative, even and multiple of 10',() => {
        expect(isCheckingNumber(-10)).toEqual([false, true, true]);
    });

    test( 'number negative, not a even and not a multiple of 10',() => {
        expect(isCheckingNumber(-1)).toEqual([false, false, false])
    });
})