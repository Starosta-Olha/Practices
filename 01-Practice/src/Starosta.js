//1. Написать функцию, которая проверяет является ли строка палиндромом;

function isPalindrome(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let temp = '';
    let temp1 = '';

    const strNew = str.toLowerCase();

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

console.log(
  isPalindrome('deified')
);

//Написать функцию, которая принимает аргумент и валидирует его
//по правилам

function getValid(argument) {
    const specialSymbols = [' ', '!', ':', '-','?','.' , ',' ];
    let length = argument.length;
    let arg = argument[0].toUpperCase();

    if (argument.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
        return 'invalid'.toUpperCase();
    }

    for (let i of argument) {

        if (length > 2 && length < 20){

            if (argument[0] === arg) {

                if (specialSymbols.includes(i)) {
                    return 'valid'.toUpperCase();
                }
            }
        }

    }
    return  'invalid'.toUpperCase();
}

console.log(
    getValid('H.do')
);

function getSum(arg1, arg2) {
    let sum = 0;

    if (typeof(arg1) === 'number') {
        if (arg1%3 === 0 && arg1%5 === 0 && arg1%15 === 0) {
            sum = sum + arg1 * (-1) + +arg2;
        } else {
             sum = sum + arg1 + +arg2;
        }
    }
    if (typeof(arg2) === 'number') {
        if (arg2 % 3 === 0 && arg2 % 5 === 0 && arg2 % 15 === 0) {
            sum = sum + +arg1 + arg2 * (-1);
        } else {
             sum = sum + +arg1 + arg2;
        }
    }
    return sum;
}

console.log(
    getSum(125, '14')
);

function isCheckingNumber(num) {
    let count = 0;
    let arrRes = [];

    for (let i = 2; i < num; i++) {
        if (num%i === 0){
            count += 1;
        }
    }

    if (count !== 0 && num !== 2 || num < 0) {
        arrRes[0] = false;
    } else {
        arrRes[0] = true;
    }

    if (num%2 === 0) {
        arrRes[1] = true;
    } else {
        arrRes[1] = false;
    }

    if (num%10 === 0) {
        arrRes[2] = true;
    } else {
    arrRes[2] = false;
    }

    return arrRes;
}

console.log(isCheckingNumber(10))

module.exports = isPalindrome;

