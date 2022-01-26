"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morse_1 = require("../morse");
describe('DECODING from morse to ASCII string', () => {
    test('VALID data: existing morse sentence', () => {
        expect((0, morse_1.decodeMorse)('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
    });
});
describe('ENCODING from ASCII string to morse', () => {
    test('VALID data: uppercase string', () => {
        expect((0, morse_1.encodeMorse)('HEY JUDE')).toEqual('.... . -.--   .--- ..- -.. .');
    });
});
//# sourceMappingURL=morse.js.map