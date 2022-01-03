// 2) Напишите функцию, которая делает глубокое сравнение объектов.
//     Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c:
//             1 } }) => true

function isEqualDeep(obj1, obj2) {

    if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
        console.log(typeof obj1)

        return false;
    }

    const obj1Keys = Object.getOwnPropertyNames(obj1);
    const obj2Keys = Object.getOwnPropertyNames(obj2);

    if (obj1Keys.length !== obj2Keys.length) {

        return false;
    }

    if (obj1Keys.length === 0 && obj2Keys.length === 0) {

        return true;
    }

    for (let i = 0; i < obj1Keys.length; i ++) {
        const prop = obj1Keys[i];
        const twoObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';

        if ((!twoObjects && (obj1[prop] !== obj2[prop])) || twoObjects && !isEqualDeep(obj1[prop], obj2[prop])) {

            //Если значения ключей являются объектами, то мы рекурсивно вызываем нашу функцию isEqualDeep

            return false;

        }
        console.log(obj1[prop])
    }

    return true;

}

console.log(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }))

 module.exports = { isEqualDeep };