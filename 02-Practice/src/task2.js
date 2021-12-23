/*Нужно выйти из цикла, изменив только две отмеченные строки.
    Результат в консоли сейчас останавливается на 19 19. Должен на 15
14.
for (let i = 0; i < 20; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 20; j++) {
        if (i === 15 && j === 15) {
//! Эту строку можно изменить
        }
        console.log(i, j);
    }
}*/
function stopCycle() {
    let result = '';

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                break;
            }
            result = result.concat(`${i} ${j} `);
            //console.log(i, j);
        }
    }

    return result;
}

module.exports = { stopCycle }
