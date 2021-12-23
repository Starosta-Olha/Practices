//1. Написать функцию, которая проверяет является ли строка палиндромом

function isPalindrome(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let temp = '';
    let temp1 = '';

    const strNew = str.toLowerCase();

    if (!str) {
        return 'value not entered'
    }

    for (let i = 0; i < strNew.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (strNew[i] === alphabet[j]) {
                temp += strNew[i];
            }
        }
    }

    for (let k = temp.length - 1; k >= 0; k--) {
        temp1 += temp[k];
    }

    if (temp1 === temp) {
        return ('This line is palindrome')
    }

    return ('This line is not palindrome');
}

module.exports = { isPalindrome };