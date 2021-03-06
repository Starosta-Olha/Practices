/*Написать функцию, выводящую в консоль числа от 1 до n (где n —
это целое число), которая функция принимает в качестве параметра, с
такими условиями:
    вывод three вместо чисел, кратных 3;
вывод five вместо чисел, кратных 5;
вывод threeFive вместо чисел, кратных как 3, так и 5.
Пример
YourFuncName(5)
Результат
// 1
// 2
// three
// 4
// five*/

function getReplaceValue(n) {

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log('three');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log('five');
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('threeFive');
        } else {
            console.log(i);
        }

    }
    return 'END'
}

console.log(getReplaceValue(15));

/*Нужно выйти из цикла, изменив только две отмеченные строки.
    Результат в консоли сейчас останавливается на 19 19. Должен на 15
14.
for (let i = 0; i < 20; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 20; j++) {
        if (i === 15 && j === 15) {
//! Эту строку можно изменить
        }
        console.log(i, j);
    }
}*/

stop: for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        if (i === 15 && j === 15) {
            break stop;
        }
        console.log(i, j);
    }
}


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

    newStr1 = newStr1.split('').sort().join('');
    newStr2 = newStr2.split('').sort().join('');

    if (newStr1.includes(newStr2)) {
        return true;
    }

    return false;

}

console.log(isAnagram("I think therefore I am", "I fear to think I'm here"));
