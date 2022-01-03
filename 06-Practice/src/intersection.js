// 1) Напишите функцию, которая поверхностно находит пересечения объектов и
// возвращает объект пересечений.
//     Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

function intersection(obj1, obj2){

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {

        return 'Input incorrect data';
    }

    const obj1Keys = Object.keys(obj1);

    return obj1Keys.reduce((newObj = {}, key) => {
        if (obj1[key] === obj2[key]) {
            newObj = {
                ...newObj,
                [key]: obj1[key],
            };
        }

        return newObj;

    }, {});
}

console.log(intersection({a: 1, c: 1}, { a: 1, c: 1, b: 2, }))

module.exports = { intersection };