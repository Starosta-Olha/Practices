const { isAnagram } = require('../src/task3');

describe('isAnagram', () => {

    test('two strings are equal', () => {
        expect(isAnagram('one', 'one')).toBe(false);
    });

    test('is anagram',() => {
        expect(isAnagram("I think therefore I am", "I fear to think I'm here")).toBe(true);
    })

    test('strings of different length', () => {
        expect(isAnagram('one', 'opne')).toBe(false);
    });

    test('not anagram',() => {
        expect(isAnagram("I think therofore I am", "I fear to think I'm here")).toBe(false);
    })
});