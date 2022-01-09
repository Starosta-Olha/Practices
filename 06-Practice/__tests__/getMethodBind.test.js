const { getMethodBind  } = require('../src/getMethodBind');
const person = {
    name: 'Olha'
}

function info() {

    return `Имя: ${this.name}`;
}
describe('getMethodBind ', () => {

    test('',() => {
        expect(getMethodBind(info, person)()).toEqual('Имя: Olha');
    });


})