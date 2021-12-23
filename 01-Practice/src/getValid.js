//Написать функцию, которая принимает аргумент и валидирует его
//по правилам

function getValid(str) {
    const specialSymbols = [' ', '!', ':', '-', '?', '.', ','];
    const length = str.length;
    let result = '';

    if (typeof str !== 'string') {
        return 'Incorrect input data';
    }

    if (str && length >= 2 && length <= 20 && str[0] === str[0].toUpperCase() && !specialSymbols.includes(str[0])) {

        for (let i of str) {

            if (specialSymbols.includes(i)) {
               return  'VALID';
            }
        }
    }

    return  'INVALID'
}

module.exports = {getValid};