/*Нужно написать функцию, которая проверяет, являются ли
две строки анаграммами, причем регистр букв не имеет
значения. Учитываются лишь символы; пробелы или знаки
препинания в расчет не берутся.
    Анаграмма- слово, которое содержит все буквы другого слова
в том же количестве, но ином порядк*/

function isAnagram(str1, str2) {

    if (str1 === str2) {
        return false;
    }

    let newStr1 = str1.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', ');
    let newStr2 = str2.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', ');

    if ( newStr1.length !== newStr2.length) {
        return false;
    }
    newStr1 = newStr1.split('').sort().join('');
    newStr2 = newStr2.split('').sort().join('');

    if (newStr1.includes(newStr2)) {
        return true;
    }

    return false;
}

module.exports = { isAnagram };