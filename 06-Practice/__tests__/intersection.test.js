const { intersection } = require('../src/intersection');

describe('intersection', () => {

    test('first argument is not an object',() => {
        expect(intersection(125, { a: 1, c: 1, b: 2, })).toEqual('Input incorrect data');
    });

    test('second argument is not an object',() => {
        expect(intersection({ a: 1, c: 1, b: 2, }, 452)).toEqual('Input incorrect data');
    });

    test('one of the objects is empty',() => {
        expect(intersection({}, { a: 1, c: 1, b: 2, })).toEqual({});
    });

    test('function returns intersection object',() => {
        expect(intersection( { a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({ b: 2 });
    });

})