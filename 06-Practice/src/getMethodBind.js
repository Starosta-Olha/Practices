// 5) Напишите свою реализацию метода bind

const person = {
    name: 'Olha'
}

function info() {

   return `Имя: ${this.name}`;
}

function getMethodBind(fn, context) {
    return function () {
        return fn.apply(context)
    }
}


console.log(getMethodBind(info, person)());


module.exports = { getMethodBind };