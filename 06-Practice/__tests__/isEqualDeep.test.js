const { isEqualDeep } = require('../src/isEqualDeep');

describe('{ isEqualDeep }', () => {

    test('obj1 is undefined',() => {
        expect(isEqualDeep(undefined, { a: 1, b: { c: 1 } })).toEqual(false);
    });

    test('obj2 is undefined',() => {
        expect(isEqualDeep({ a: 1, b: { c: 1 } }, undefined)).toEqual(false);
    });

    test('different length of property names',() => {
        expect(isEqualDeep({ a: 1, b: { c: 1 } }, { b: { c: 1 } })).toEqual(false);
    });

    test('objects do not have property names',() => {
        expect(isEqualDeep({}, {})).toEqual(true);
    });

    test('both arguments are objects and objects values are equal',() => {
        expect(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toEqual(true);
    });

    // test('',() => {
    //     expect(isEqualDeep({}, {})).toEqual(true);
    // });
    //
    // test('',() => {
    //     expect(isEqualDeep({}, {})).toEqual(true);
    // });

})