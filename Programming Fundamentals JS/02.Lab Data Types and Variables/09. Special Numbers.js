function specialNumbers(num) {
    let ourNum = String(num);
    let currentNum = 0
    let sum = 0
    let message = ""

    for (let i = 1; i <= ourNum; i++) {
        currentNum = String(i)
        currentNum = String(currentNum)
        for (let j = 0; j < currentNum.length; j++) {
            sum += Number(currentNum[j])
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            message = `${currentNum} -> True`
        }
        else {
            message = `${currentNum} -> False`
        }
        console.log(message)
        sum = 0

    }
}
//specialNumbers(15)
specialNumbers(20)