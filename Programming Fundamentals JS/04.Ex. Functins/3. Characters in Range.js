function printChar(first, second) {
    let firstSymbol = first
    let secondSymbol = second
    let numFromFirstSymbol = firstSymbol.charCodeAt(0);
    let numFromSecondSymbol = secondSymbol.charCodeAt(0);
    let newChar = '';
    let newArrChar = []
    if (numFromFirstSymbol < numFromSecondSymbol) {
        for (let i = numFromFirstSymbol+1; i < numFromSecondSymbol; i++) {
            newChar = String.fromCharCode(i)
            newArrChar.push(newChar)
        }
    }
    else{
        for (let i = numFromSecondSymbol+1; i < numFromFirstSymbol; i++) {
            newChar = String.fromCharCode(i)
            newArrChar.push(newChar)
        }
    }
    console.log(newArrChar.join(" "));
}
printChar('a', 'd')
printChar('C',
'#'
)
