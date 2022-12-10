function equalSumsEvenOddPosition(input) {
    let strartN = (input[0]);
    let ednN = (input[1]);
    let printline = ""
    for (let i = strartN; i <= ednN; i++) {
        let currentN = "" + i
        let oddSum = 0
        let evenSum = 0
        for (let a = 0; a < currentN.length; a++) {
            let currentDigit = Number(currentN.charAt(a))
            if (a % 2 === 0) {
                evenSum += currentDigit
            }
            else {
                oddSum += currentDigit
                
            }
        }
        if (oddSum === evenSum) {
            printline += ` ${i}`
        }
       
    }
    console.log(printline)
}
equalSumsEvenOddPosition(["299900",
"300000"])
