const { isPalindrome } = require('../src/isPalindrome');

describe('isPalindrome', () => {

    test('value not entered',() => {
        expect(isPalindrome('')).toBe('value not entered');
    });

    test('enter the line palindrome',() => {
        expect(isPalindrome('vav')).toBe('This line is palindrome');
    });

    test( 'enter a string not a palindrome',() => {
        expect(isPalindrome('aasssdddffgg')).toBe('This line is not palindrome')
    });
})