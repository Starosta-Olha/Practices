const { validator } = require('../src/validator')

describe('isEmail', () => {

    test('email is valid',() => {
        expect(validator.isEmail('Olka_mel@ukr.net')).toBe(true);
    });

    test('email is not valid',() => {
        expect(validator.isEmail('Ol+-ka_mel@ukr.net')).toBe(false);
    });

    test('invalid input data',() => {
        expect(validator.isEmail(12454)).toBe(false);
    });

    test('no input data',() => {
        expect(validator.isEmail('')).toBe(false);
    });


})

describe('isDomain', () => {

    test('domain is valid',() => {
        expect(validator.isDomain('ukr.net')).toBe(true);
    });

    test('domain is not valid',() => {
        expect(validator.isDomain('uk/r.net')).toBe(false);
    });

    test('invalid input data',() => {
        expect(validator.isDomain(12454)).toBe(false);
    });

    test('no input data',() => {
        expect(validator.isDomain('')).toBe(false);
    });

});

describe('isDate', () => {

    test('domain is valid',() => {
        expect(validator.isDate('16.05.1992')).toBe(true);
    });

    test('domain is not valid',() => {
        expect(validator.isDate('16051992')).toBe(false);
    });

    test('invalid input data',() => {
        expect(validator.isDate(12454)).toBe(false);
    });

    test('no input data',() => {
        expect(validator.isDate('')).toBe(false);
    });

});

describe('isPhone', () => {

    test('phone is valid',() => {
        expect(validator.isPhone('+38 (095) 787-86-22')).toBe(true);
    });

    test('phone is valid',() => {
        expect(validator.isPhone('+380 (95) 787-86-22')).toBe(true);
    });

    test('phone is valid',() => {
        expect(validator.isPhone('380957878622')).toBe(true);
    });

    test('domain is valid',() => {
        expect(validator.isPhone('38 (057) 712-15-21')).toBe(true);
    });

    test('domain is not valid',() => {
        expect(validator.isPhone('16051992')).toBe(false);
    });

    test('invalid input data',() => {
        expect(validator.isPhone(15454)).toBe(false);
    });

    test('no input data',() => {
        expect(validator.isPhone('')).toBe(false);
    });

});