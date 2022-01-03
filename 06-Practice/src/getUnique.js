// 3) Напишите функцию, которая убирает повторяющиеся значения в массиве.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function getUnique(arr) {

    if (!arr || arr === null) {
        return false;
    }

    if (arr.length === 1) {
        return arr;
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = { getUnique };