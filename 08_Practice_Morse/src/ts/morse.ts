import { MorseSymbol, mappings } from './mappings';


function decodeMorse(code: string) {
    let result = '';
    const arrCode = code.trim().split('   ');

    arrCode.forEach(item => {
        let  arrSymbol = item.split(' ');
        arrSymbol.forEach(el => {
            mappings.find(item => {
                if (item.symbol === el) {
                    result = result + item.translation;
                }
            })
        })
        result = result + ' ';
    })

    return result.trim();
}


function encodeMorse(message) {
    let result = '';
    const upMessage = message.toUpperCase();

    if (message === '@') {
        mappings.find((item) => {
            if (item.translation === '@') {
                result = result + item.symbol;
            }
        })
        return result;
    }

    if (upMessage === 'SOS') {
        mappings.find((item) => {
            if (item.translation === 'SOS') {
                result = result + item.symbol;
            }
        })
        return result;
    }

    message.trim().split(' ')
        .forEach(word => {
            word.split('').forEach((el) => {
                mappings.find((item) => {
                    if (el === item.translation) {
                        result = result + item.symbol;
                    }
                })
                result = result + ' ';
            });
            result = result + '  ';
        });

    return result.trim();
}


export { decodeMorse, encodeMorse }