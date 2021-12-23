// Создайте функцию, которая проверяет число на соответствие трем
// различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны
// быть представлены в виде массива

function isCheckingNumber(num) {
    let count = 0;
    let arrRes = [];

    for (let i = 2; i < num; i++) {
        if (num%i === 0){
            count += 1;
        }
    }

    if (count !== 0 && num !== 2 || num < 0) {
        arrRes[0] = false;
    } else {
        arrRes[0] = true;
    }

    if (num%2 === 0) {
        arrRes[1] = true;
    } else {
        arrRes[1] = false;
    }

    if (num%10 === 0) {
        arrRes[2] = true;
    } else {
        arrRes[2] = false;
    }

    return arrRes;
}

module.exports = { isCheckingNumber };