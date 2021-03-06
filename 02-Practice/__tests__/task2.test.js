const { stopCycle } = require('../src/task2');

describe('stopCycle', () => {

    test('stop in i = 15, j = 14', () => {
        expect(stopCycle()).toBe('0 0 0 1 0 2 0 3 0 4 0 5 0 6 0 7 0 08_Practice_Morse 0 9 0 10 0 11 0 12 0 13 0 14 0 15 0 16 0 17 0 18 0 19 1 0 1 1 1 2 1 3 1 4 1 5 1 6 1 7 1 08_Practice_Morse 1 9 1 10 1 11 1 12 1 13 1 14 ' +
            '1 15 1 16 1 17 1 18 1 19 2 0 2 1 2 2 2 3 2 4 2 5 2 6 2 7 2 08_Practice_Morse 2 9 2 10 2 11 2 12 2 13 2 14 2 15 2 16 2 17 2 18 2 19 3 0 3 1 3 2 3 3 3 4 3 5 3 6 3 7 3 08_Practice_Morse 3 9 ' +
            '3 10 3 11 3 12 3 13 3 14 3 15 3 16 3 17 3 18 3 19 4 0 4 1 4 2 4 3 4 4 4 5 4 6 4 7 4 08_Practice_Morse 4 9 4 10 4 11 4 12 4 13 4 14 4 15 4 16 4 17 4 18 4 19 5 0 5 1 5 2 5 3' +
            ' 5 4 5 5 5 6 5 7 5 08_Practice_Morse 5 9 5 10 5 11 5 12 5 13 5 14 5 15 5 16 5 17 5 18 5 19 6 0 6 1 6 2 6 3 6 4 6 5 6 6 6 7 6 08_Practice_Morse 6 9 6 10 6 11 6 12 6 13 6 14 6 15 6 16 6 17 ' +
            '6 18 6 19 7 0 7 1 7 2 7 3 7 4 7 5 7 6 7 7 7 08_Practice_Morse 7 9 7 10 7 11 7 12 7 13 7 14 7 15 7 16 7 17 7 18 7 19 08_Practice_Morse 0 08_Practice_Morse 1 08_Practice_Morse 2 08_Practice_Morse 3 08_Practice_Morse 4 08_Practice_Morse 5 08_Practice_Morse 6 08_Practice_Morse 7 08_Practice_Morse 08_Practice_Morse 08_Practice_Morse 9 08_Practice_Morse 10 08_Practice_Morse 11 08_Practice_Morse 12 ' +
            '08_Practice_Morse 13 08_Practice_Morse 14 08_Practice_Morse 15 08_Practice_Morse 16 08_Practice_Morse 17 08_Practice_Morse 18 08_Practice_Morse 19 9 0 9 1 9 2 9 3 9 4 9 5 9 6 9 7 9 08_Practice_Morse 9 9 9 10 9 11 9 12 9 13 9 14 9 15 9 16 9 17 9 18 9 19 10 0 10 1 10 2 10 3 10 4 10 5 ' +
            '10 6 10 7 10 08_Practice_Morse 10 9 10 10 10 11 10 12 10 13 10 14 10 15 10 16 10 17 10 18 10 19 11 0 11 1 11 2 11 3 11 4 11 5 11 6 11 7 11 08_Practice_Morse 11 9 11 10 11 11 11 12 11 13 1' +
            '1 14 11 15 11 16 11 17 11 18 11 19 12 0 12 1 12 2 12 3 12 4 12 5 12 6 12 7 12 08_Practice_Morse 12 9 12 10 12 11 12 12 12 13 12 14 12 15 12 16 12 17 12 18 12 19 13 0 13 1 ' +
            '13 2 13 3 13 4 13 5 13 6 13 7 13 08_Practice_Morse 13 9 13 10 13 11 13 12 13 13 13 14 13 15 13 16 13 17 13 18 13 19 14 0 14 1 14 2 14 3 14 4 14 5 14 6 14 7 14 08_Practice_Morse 14 9 14 10' +
            ' 14 11 14 12 14 13 14 14 14 15 14 16 14 17 14 18 14 19 15 0 15 1 15 2 15 3 15 4 15 5 15 6 15 7 15 08_Practice_Morse 15 9 15 10 15 11 15 12 15 13 15 14 ');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});