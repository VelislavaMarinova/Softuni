function loadingBar(num) {
    let firstLinePrintLoading = ""
    let secondLinePrintLoading = ""

    let numLoading = (number) => {
        let numPercentMessage = `${number}%`
        return numPercentMessage;
    }

    let numPercentSigns = (number) => {
        let newPercentMessage = "";
        if (number < 100) {
            let numberToString = String(number);
            let numPercents = Number(numberToString[0])

            for (i = 0; i <= 11; i++) {
                if (i === 0) {
                    newPercentMessage = '['
                }
                else if (i === 11) {
                    newPercentMessage += ']'
                }
                else if (i <= numPercents) {
                    newPercentMessage += '%'
                }
                else {
                    newPercentMessage += '.'
                }
            }
        }
        else if (number === 100) {
            for (i = 0; i <= 11; i++) {
                if (i === 0) {
                    newPercentMessage = '['
                }
                else if (i === 11) {
                    newPercentMessage += ']'
                }
                else if (i <= 10) {
                    newPercentMessage += '%'
                }
                else {
                    newPercentMessage += '.'
                }
            }
        }
        return newPercentMessage
    }

    let printText = (number) => {
        let textMessage = ''
        if (number === 100) {
            textMessage = 'Complete!'
        }
        else if (number < 100) {
            textMessage = 'Still loading...'
        }
        return textMessage
    }
    if (num === 100) {
        firstLinePrintLoading = `${numLoading(num)} ${printText(num)}`
        secondLinePrintLoading = `${numPercentSigns(num)}`
    }
    else {
        firstLinePrintLoading = `${numLoading(num)} ${numPercentSigns(num)}`
        secondLinePrintLoading = `${printText(num)}`
    }
    console.log(firstLinePrintLoading);
    console.log(secondLinePrintLoading);
}

loadingBar(30)
//loadingBar(50)
loadingBar(100)
//loadingBar(0)