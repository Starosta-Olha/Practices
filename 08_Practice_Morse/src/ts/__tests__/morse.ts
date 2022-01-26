import { decodeMorse, encodeMorse } from '../morse';

describe('DECODING from morse to ASCII string', () => {
    test('VALID data: existing morse sentence', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
    });
});

describe('ENCODING from ASCII string to morse', () => {
    test('VALID data: uppercase string', () => {
        expect(encodeMorse('HEY JUDE')).toBe('.... . -.--   .--- ..- -.. .');
    });
    test('VALID data: code "@"', () => {
        expect(encodeMorse('@')).toBe('.--.-.');
    });
    test('VALID data: special code "SOS"', () => {
        expect(encodeMorse('SOS')).toBe('...---...');
    });
});