"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappings = exports.MorseSymbol = void 0;
class MorseSymbol {
    constructor(symbol, translation) {
        this.symbol = symbol;
        this.translation = translation;
    }
}
exports.MorseSymbol = MorseSymbol;
exports.mappings = [
    new MorseSymbol('.-', 'A'),
    new MorseSymbol('-...', 'B'),
    new MorseSymbol('-.-.', 'C'),
    new MorseSymbol('-..', 'D'),
    new MorseSymbol('.', 'E'),
    new MorseSymbol('..-.', 'F'),
    new MorseSymbol('--.', 'G'),
    new MorseSymbol('....', 'H'),
    new MorseSymbol('..', 'I'),
    new MorseSymbol('.---', 'J'),
    new MorseSymbol('-.-', 'K'),
    new MorseSymbol('.-..', 'L'),
    new MorseSymbol('--', 'M'),
    new MorseSymbol('-.', 'N'),
    new MorseSymbol('---', 'O'),
    new MorseSymbol('.--.', 'P'),
    new MorseSymbol('--.-', 'Q'),
    new MorseSymbol('.-.', 'R'),
    new MorseSymbol('...', 'S'),
    new MorseSymbol('-', 'T'),
    new MorseSymbol('..-', 'U'),
    new MorseSymbol('...-', 'V'),
    new MorseSymbol('.--', 'W'),
    new MorseSymbol('-..-', 'X'),
    new MorseSymbol('-.--', 'Y'),
    new MorseSymbol('--..', 'Z'),
    new MorseSymbol('-----', '0'),
    new MorseSymbol('.----', '1'),
    new MorseSymbol('..---', '2'),
    new MorseSymbol('...--', '3'),
    new MorseSymbol('....-', '4'),
    new MorseSymbol('.....', '5'),
    new MorseSymbol('-....', '6'),
    new MorseSymbol('--...', '7'),
    new MorseSymbol('---..', '8'),
    new MorseSymbol('----.', '9'),
    new MorseSymbol('.--.-.', '@'),
    new MorseSymbol('...---...', 'SOS')
];
// export { MorseSymbol, mappings };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHBpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsV0FBVztJQUdwQixZQUFZLE1BQWMsRUFBRSxXQUFtQjtRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUFQRCxrQ0FPQztBQUVZLFFBQUEsUUFBUSxHQUF1QjtJQUN4QyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQzFCLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDNUIsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM1QixJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQzNCLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekIsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM1QixJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQzNCLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDNUIsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUMxQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzVCLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7SUFDM0IsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM1QixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQzFCLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDMUIsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUMzQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzVCLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDNUIsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUMzQixJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQzNCLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekIsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUMzQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzVCLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7SUFDM0IsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM1QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzVCLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDNUIsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUM3QixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzdCLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7SUFDN0IsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUM3QixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzdCLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7SUFDN0IsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUM3QixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQzdCLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7SUFDN0IsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUM3QixJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO0lBQzlCLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7Q0FDdEMsQ0FBQztBQUdGLG9DQUFvQyIsImZpbGUiOiJtYXBwaW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb3JzZVN5bWJvbCB7XHJcbiAgICBzeW1ib2w6IHN0cmluZztcclxuICAgIHRyYW5zbGF0aW9uOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihzeW1ib2w6IHN0cmluZywgdHJhbnNsYXRpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hcHBpbmdzOiBBcnJheTxNb3JzZVN5bWJvbD4gPSBbXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4tJywgJ0EnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLS4uLicsICdCJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy0uLS4nLCAnQycpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLi4nLCAnRCcpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCcuJywgJ0UnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLi4tLicsICdGJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy0tLicsICdHJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4uLi4nLCAnSCcpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCcuLicsICdJJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4tLS0nLCAnSicpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLi0nLCAnSycpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCcuLS4uJywgJ0wnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLS0nLCAnTScpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLicsICdOJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy0tLScsICdPJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4tLS4nLCAnUCcpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLS4tJywgJ1EnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLi0uJywgJ1InKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLi4uJywgJ1MnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLScsICdUJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4uLScsICdVJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4uLi0nLCAnVicpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCcuLS0nLCAnVycpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLi4tJywgJ1gnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLS4tLScsICdZJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy0tLi4nLCAnWicpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLS0tLScsICcwJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4tLS0tJywgJzEnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLi4tLS0nLCAnMicpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCcuLi4tLScsICczJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4uLi4tJywgJzQnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLi4uLi4nLCAnNScpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLi4uLicsICc2JyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy0tLi4uJywgJzcnKSxcclxuICAgIG5ldyBNb3JzZVN5bWJvbCgnLS0tLi4nLCAnOCcpLFxyXG4gICAgbmV3IE1vcnNlU3ltYm9sKCctLS0tLicsICc5JyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4tLS4tLicsICdAJyksXHJcbiAgICBuZXcgTW9yc2VTeW1ib2woJy4uLi0tLS4uLicsICdTT1MnKVxyXG5dO1xyXG5cclxuXHJcbi8vIGV4cG9ydCB7IE1vcnNlU3ltYm9sLCBtYXBwaW5ncyB9O1xyXG4iXSwic291cmNlUm9vdCI6Ii4uIn0=
