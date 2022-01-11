// 2)Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет
// метод isEmail параметром принимает строку и проверяет, является ли она корректным
// емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того,
// класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate
// для проверки даты и метод isPhone для проверки телефона:

class Validator {

    isEmail(str) {
        const reg = /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        return (typeof str === 'string') && !!str.match(reg);
    }

    isDomain(str) {

        const reg = /^(?!:\/\/)([A-Za-z0-9]+\.)?[a-zA-Z0-9][A-Za-z0-9-]+\.[A-Za-z]{2,6}?$/i;

        return (typeof str === 'string' && +str !== 0) && !!str.match(reg);

    }

    isDate(str) {
        let dateReg = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;

        return (typeof str === 'string' && +str !== 0) && !!str.match(dateReg);
    }

   isPhone(str) {

            const phoneReg = /^(\+)?(38|0) ?(\(\d{3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2}\) ?)){5,12}\d$/;

            return (typeof str === 'string' && +str !== 0) && !!str.match(phoneReg);

    }

}

let validator = new Validator();
console.log(validator.isEmail('Olka_mel@ukr.net'));
console.log(validator.isDomain('ukr.net'));
console.log(validator.isDate(15463));
console.log(validator.isPhone('+38 (095) 787-86-22'));
console.log(validator.isPhone('+380 (95) 787-86-22'));
console.log(validator.isPhone('380957878622'));
console.log(validator.isPhone('1605199'));

module.exports = {validator};