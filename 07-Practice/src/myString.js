// 1)Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//     который параметром принимает строку, а возвращает ее в перевернутом виде, метод
// ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее
// первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
// первую букву каждого слова этой строки.

class MyString {

    reverse(str) {

        return (typeof str === 'string' && +str !== 0) ? str.split('').reverse().join('') : 'Invalid input data';
    }

    ucFirst(str) {

        return (typeof str === 'string' && +str !== 0) ? str[0].toUpperCase() + str.slice(1) : 'Invalid input data';

    }

    ucWords(str) {

        if (typeof str === 'string' && +str !== 0) {
            const strArr = str.split(' ');
            let newArr = [];

            for (let i = 0; i < strArr.length; i++) {
                const temp = strArr[i];
                const newStr = temp[0].toUpperCase() + temp.slice(1);
                newArr.push(newStr);
            }

            return newArr.join(' ')
        }

        return 'Invalid input data';
    }

}

let str = new MyString();
console.log(str.reverse(''))
module.exports = {str};