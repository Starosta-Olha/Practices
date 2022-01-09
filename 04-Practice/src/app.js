//Cоздать функцию, которая возвращает true или false, в зависимости от того,
// может ли сумма любых двух чисел из массива быть равной заданному значению.

function isSum(arr, num) {

    if (!Array.isArray(arr)) {

        return 'Invalid input data'
    }

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === num) {

                return true;
            }
        }
    }
    return false;
}

console.log(isSum([1, 4, 6, 6, 2], 3));

// Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

function getOneDimensionalArr(arr) {
    if (!Array.isArray(arr)) {

        return 'Invalid input data'
    }
    let dimArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            dimArr = dimArr.concat(getOneDimensionalArr(arr[i]))
        } else {
            dimArr.push(arr[i])
        }
    }

    return dimArr;
}

console.log(getOneDimensionalArr([1, 2, [3, 4, [5]]]));


// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function getNewArrays(arr, value) {

    if (!Array.isArray(arr) || typeof value !== 'number') {

        return 'Invalid input data'
    }
    const result = [];

    for (let i = 0; i < Math.ceil(arr.length/value); i++) {
        result.push(arr.slice((i * value), (i * value) + value));
    }

    return result;
}

console.log(getNewArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

function isEqual(obj1, obj2) {
    console.log(obj1, obj2)
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {

        return 'Invalid input data'
    }

    if (obj1.length !== obj2.length) {

        return false;
    }

    let result = true;

    for (let key in obj1) {

        if (obj2[key] !== obj1[key]) {
            result = false;
        }
    }
    return result;
}

console.log(isEqual({}, {}));


module.exports = { isEqual, getNewArrays, isSum, getOneDimensionalArr};