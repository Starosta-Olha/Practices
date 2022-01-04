// 5) Напишите свою реализацию метода bind

const person = {
    name: 'Olha'
}

function info() {
   console.log(`Имя: ${this.name}`) ;
}

function getMethodBind(fn, context) {
    return function () {
        return fn.apply(context)
    }
}

getMethodBind(info, person)()

module.exports = {getMethodBind};