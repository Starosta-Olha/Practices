const { str } = require('../src/myString')

describe('MyString', () => {

    test('no input data',() => {
        expect(str.reverse('')).toBe('Invalid input data');
    });

    test('input data is not a string',() => {
        expect(str.reverse(125)).toBe('Invalid input data');
    });

    test('get reverse input string',() => {
        expect(str.reverse('Olha')).toBe('ahlO');
    });

    test('no input data',() => {
        expect(str.ucFirst('')).toBe('Invalid input data');
    });

    test('input data is not a string',() => {
        expect(str.ucFirst(154)).toBe('Invalid input data');
    });

    test('get string with first letter is uppercase',() => {
        expect(str.ucFirst('big family')).toBe('Big family');
    });

    test('no input data',() => {
        expect(str.ucWords('')).toBe('Invalid input data');
    });

    test('get all first letters in a string uppercase',() => {
        expect(str.ucWords('first and last name')).toBe('First And Last Name');
    });

    test('input data is not a string',() => {
        expect(str.ucWords(145)).toBe('Invalid input data');
    });
})
