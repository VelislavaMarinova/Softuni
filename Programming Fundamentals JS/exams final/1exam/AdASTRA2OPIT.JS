function demo(arr) {
    let toStr = arr.join('');
    let indexofSharp = toStr.indexOf("#");
    let indexofLine = toStr.indexOf("|");
    if (indexofSharp > indexofLine) {
        toStr = toStr.slice(indexofLine+ 1 )
    } else {
        toStr = toStr.slice(indexofSharp + 1)
    }
    let lastIndexSharp = toStr.lastIndexOf("#");
    let lastIndexLine = toStr.lastIndexOf("|");
    if (lastIndexSharp > lastIndexLine) {
        toStr = toStr.slice(0, lastIndexSharp)
    } else {
        toStr = toStr.slice(0, lastIndexLine)
    }
    for (let symbol of toStr) {
        let charCodeNumberOfSymbol = toStr.charCodeAt(symbol)
        if (charCodeNumberOfSymbol < 65) {
            let indexOfSymbol = toStr.indexOf(symbol)
            toStr = toStr.slice(indexOfSymbol + 1)
        } else if (charCodeNumberOfSymbol > 90 && charCodeNumberOfSymbol < 97) {
            let indexOfSymbol = toStr.indexOf(symbol)
            toStr = toStr.slice(indexOfSymbol + 1)
        } else if (charCodeNumberOfSymbol > 122) {
            let indexOfSymbol = toStr.indexOf(symbol)
            toStr = toStr.slice(indexOfSymbol + 1)
        } else {
            break;
        }
    }
    console.log(toStr);
   let foodInfo = toStr.split("|").join(", ").split('#')



    console.log(foodInfo);
}
//[A-Z][a-z]+[#|]\d{2}\/\d{2}\/\d{2}[#|]\d+
demo([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
console.log('------------------------------------------------------------')
demo(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])