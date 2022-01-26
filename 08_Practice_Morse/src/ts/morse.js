"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeMorse = exports.decodeMorse = void 0;
const mappings_1 = require("./mappings");
const REGULAR_WORD_SPACE = ' ';
const MORSE_WORD_SPACE = '   ';
const MORSE_LETTER_SPACE = ' ';
function decodeMorse(code) {
    return code
        .split('   ')
        .map(word => word
        .split(' ')
        .map(a => mappings_1.mappings[a])
        .join(''))
        .join('  ');
}
exports.decodeMorse = decodeMorse;
function encodeMorse(text) {
    return text
        .split('')
        .map(mapLetterToSymbol)
        .reduce(function (accumulator, currentValue) {
        return isMorseWordSpace(currentValue) || isAccumulatorMorseWordSpace(accumulator)
            ? `${accumulator}${currentValue}`
            : `${accumulator}${MORSE_LETTER_SPACE}${currentValue}`;
    });
}
exports.encodeMorse = encodeMorse;
function mapLetterToSymbol(letter) {
    if (letter === REGULAR_WORD_SPACE)
        return MORSE_WORD_SPACE;
    let found = mappings_1.mappings.find(value => value.translation == letter);
    if (found === undefined)
        return '';
    else
        return found.symbol;
}
function isMorseWordSpace(value) {
    return value === MORSE_WORD_SPACE;
}
function isAccumulatorMorseWordSpace(accumulator) {
    return accumulator.substring(accumulator.length - MORSE_WORD_SPACE.length) === MORSE_WORD_SPACE;
}
//# sourceMappingURL=morse.js.map