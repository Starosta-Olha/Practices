"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeMorse = exports.decodeMorse = void 0;
const mappings_1 = require("./mappings");
function decodeMorse(code) {
    let result = '';
    const arrCode = code.trim().split('   ');
    arrCode.forEach(item => {
        let arrSymbol = item.split(' ');
        arrSymbol.forEach(el => {
            mappings_1.mappings.find(item => {
                if (item.symbol === el) {
                    result = result + item.translation;
                }
            });
        });
        result = result + ' ';
    });
    return result.trim();
}
exports.decodeMorse = decodeMorse;
function encodeMorse(message) {
    let result = '';
    const upMessage = message.toUpperCase();
    if (message === '@') {
        mappings_1.mappings.find((item) => {
            if (item.translation === '@') {
                result = result + item.symbol;
            }
        });
        return result;
    }
    if (upMessage === 'SOS') {
        mappings_1.mappings.find((item) => {
            if (item.translation === 'SOS') {
                result = result + item.symbol;
            }
        });
        return result;
    }
    message.trim().split(' ')
        .forEach(word => {
        word.split('').forEach((el) => {
            mappings_1.mappings.find((item) => {
                if (el === item.translation) {
                    result = result + item.symbol;
                }
            });
            result = result + ' ';
        });
        result = result + '  ';
    });
    return result.trim();
}
exports.encodeMorse = encodeMorse;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFtRDtBQUduRCxTQUFTLFdBQVcsQ0FBQyxJQUFZO0lBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbkIsSUFBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ25CLG1CQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO29CQUNwQixNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ3RDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsQ0FBQztBQTBDUSxrQ0FBVztBQXZDcEIsU0FBUyxXQUFXLENBQUMsT0FBTztJQUN4QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRXhDLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtRQUNqQixtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxHQUFHLEVBQUU7Z0JBQzFCLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxJQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUU7UUFDckIsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO2dCQUM1QixNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUMxQixtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQixJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUN6QixNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2pDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7WUFDRixNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRVAsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsQ0FBQztBQUdxQixrQ0FBVyIsImZpbGUiOiJtb3JzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vcnNlU3ltYm9sLCBtYXBwaW5ncyB9IGZyb20gJy4vbWFwcGluZ3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRlY29kZU1vcnNlKGNvZGU6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgY29uc3QgYXJyQ29kZSA9IGNvZGUudHJpbSgpLnNwbGl0KCcgICAnKTtcclxuXHJcbiAgICBhcnJDb2RlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0ICBhcnJTeW1ib2wgPSBpdGVtLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgYXJyU3ltYm9sLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBtYXBwaW5ncy5maW5kKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3ltYm9sID09PSBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIGl0ZW0udHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAnICc7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXN1bHQudHJpbSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZW5jb2RlTW9yc2UobWVzc2FnZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgY29uc3QgdXBNZXNzYWdlID0gbWVzc2FnZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChtZXNzYWdlID09PSAnQCcpIHtcclxuICAgICAgICBtYXBwaW5ncy5maW5kKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnRyYW5zbGF0aW9uID09PSAnQCcpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIGl0ZW0uc3ltYm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1cE1lc3NhZ2UgPT09ICdTT1MnKSB7XHJcbiAgICAgICAgbWFwcGluZ3MuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS50cmFuc2xhdGlvbiA9PT0gJ1NPUycpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIGl0ZW0uc3ltYm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIG1lc3NhZ2UudHJpbSgpLnNwbGl0KCcgJylcclxuICAgICAgICAuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgICAgICAgd29yZC5zcGxpdCgnJykuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIG1hcHBpbmdzLmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT09IGl0ZW0udHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgaXRlbS5zeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICcgJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICcgICc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC50cmltKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBkZWNvZGVNb3JzZSwgZW5jb2RlTW9yc2UgfSJdLCJzb3VyY2VSb290IjoiLi4ifQ==