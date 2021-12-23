/*Написать функцию, выводящую в консоль числа от 1 до n (где n —
это целое число), которая функция принимает в качестве параметра, с
такими условиями: вывод three вместо чисел, кратных 3;
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
    let result = '';

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 !== 0) {
            result = result.concat('three ');
            console.log('three');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            result = result.concat('five ')
            console.log('five');
        } else if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
            console.log('threeFive');
        } else {
            result = result.concat(`${i} `);
            console.log(i);
        }
    }

    return result;
}

module.exports = { getReplaceValue };