// Создайте функцию, которая принимает два аргумента: число,
// представленное в виде строки, и число. Если аргумент типа number
// делится на 3, 5 и 15 без остатка - умножьте его на -1. Функция должна
// возвращать числовую сумму двух аргументов.

function getSum(arg1, arg2) {
    let sum = 0;

    if (!arg1 && !arg2) {
        return 'enter argument values'
    }

    if (typeof(arg1) === 'number' && typeof(arg2) === 'number') {
        return 'two number arguments'
    }

    if (typeof(arg1) === 'string' && typeof(arg2) === 'string') {
        return 'two string arguments'
    }

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

module.exports = { getSum };