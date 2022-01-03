const { getUnique } = require('../src/getUnique');

describe('getUnique', () => {

    test('array is not declared',() => {
        expect(getUnique()).toEqual(false);
    });

    test('array is null',() => {
        expect(getUnique(null)).toEqual(false);
    });

    test('array length is 1',() => {
        expect(getUnique([2])).toEqual([2]);
    });

    test('array includes duplicate elements',() => {
        expect(getUnique(['пять', 'пять', 3, 4, 5,'два', 'пять', 'два',])).toEqual(['пять', 3, 4, 5, 'два']);
    });

})