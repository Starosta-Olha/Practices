const {getValid} = require('../src/getValid');

describe('getValid', () => {

    test('str is not a string', () => {
        expect(getValid(['GU!hi'])).toBe('Incorrect input data');
    });

    test('value not set', () => {
        expect(getValid('')).toBe('INVALID');
    });

    test('String length less than 2', () => {
        expect(getValid('j')).toBe('INVALID');
    });

    test('String length is greater than 20', () => {
        expect(getValid('Aasss!dddffggmvjdofjvk')).toBe('INVALID');
    });

    test('string dose not includes special characters', () => {
        expect(getValid('Hmdm')).toBe('INVALID');
    });

    test('the string does not starts with a capital letter', () => {
        expect(getValid('h.do')).toBe('INVALID');
    });
})