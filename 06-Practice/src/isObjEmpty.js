// ) Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//     Ожидаемый результат: ({}) => true,
//     ({ a: undefined }) => true,
//     ({ a: 1 }) => false
//
// function isObjEmpty(obj) {
//     let objectKeys = Object.keys(obj);
//     let objectValues = Object.values(obj)
//
//     if (objectKeys.length === 0 || objectValues.includes(undefined)) {
//         return true;
//     }
//     return false;
//
// }
//
//

function isObjEmpty(obj) {
    const objKeys = Object.keys(obj);

    return !objKeys.filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length;
}

console.log(isObjEmpty( {}))

module.exports = { isObjEmpty };