const { isObjEmpty } = require('../src/isObjEmpty');

describe('isObjEmpty', () => {

    test('object has no elements',() => {
        expect(isObjEmpty({})).toEqual(true);
    });

    test('object  has the undefined properties',() => {
        expect(isObjEmpty({ a: undefined })).toEqual(true);
    });

    test('if array is not empty return false',() => {
        expect(isObjEmpty({ a:1 })).toBe(false);
    });

})