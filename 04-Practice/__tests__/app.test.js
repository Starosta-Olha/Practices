const { getOneDimensionalArr } = require('../src/app');
const { isSum } = require('../src/app');
const { getNewArrays } = require('../src/app');
const { isEqual} = require('../src/app');

describe('getOneDimensionalArr', () => {

    test('argument is not array',() => {
        expect(getOneDimensionalArr({})).toEqual('Invalid input data');
    });

    test('input array is one dimensional',() => {
        expect(getOneDimensionalArr([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('input array is deep',() => {
        expect(getOneDimensionalArr([1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    });

})

describe('isSum', () => {

    test('Input data is invalid',() => {
        expect(isSum({}, 5)).toEqual('Invalid input data');
    });

    test('some two elements in array has sum 5',() => {
        expect(isSum([1, 4, 6, 6, 2], 5)).toEqual(true);
    });

    test('no two elements in the array have a sum of 5',() => {
        expect(isSum([1, 4, 6, 6, 2], 2)).toBe(false);
    });

})

describe('getNewArrays', () => {

    test('Invalid input data: arr is not array',() => {
        expect(getNewArrays({}, 5)).toEqual('Invalid input data');
    });

    test('Invalid input data: type of value is not number',() => {
        expect(getNewArrays([1, 4, 6, 6, 2], 'df')).toEqual('Invalid input data');
    });

    test('function splits array into pieces of a given size',() => {
        expect(getNewArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]);
    });

})

describe('isEqual', () => {

    test('Input obg1 is not object', () => {
        expect(isEqual('{ b: 1, a: 1, c: 21}', { a: 1, b: 1 })).toEqual('Invalid input data')
    });

    test('Input obg2 is not object', () => {
        expect(isEqual({ b: 1, a: 1, c: 21}, '{ a: 1, b: 1 }')).toEqual('Invalid input data')
    });

    test('Two objects length are not equal', () => {
        expect(isEqual({ b: 1, a: 1, c: 1}, { a: 1, b: 1})).toEqual(false)
    });

    test('', () => {
        expect(isEqual({ b: 1, a: 1, c: 1}, { a: 1, b: 1, c: 1})).toEqual(true)
    });

})