function lastKNumbersSequence(num1, num2) {
    let startArr = [1];
    if (num2 === 0) {

        console.log(startArr.join(" "));
    }
    else {
        let startSum = 1;
        for (let i = 1; i < num2; i++) {
            if (num1 === 0) {
                startArr = []
                break;
            }
            else if (num1 === 1) {
                startArr = [1]
                break;
            }
            startArr.push(i)
            startSum += i
        }
        let addElement = 0
        let sum = 0
        let startArrL = startArr.length
        let endOfI = num1 - startArrL

        for (let i = 0; i < endOfI; i++) {
            startArr.push(startSum)
            addElement++;
            startArrL = startArr.length;
            let newArr = startArr.slice(addElement)
            sum = newArr.reduce((sum, el) => {
                return sum + el
            }, 0)
            startSum = sum
            sum = 0
        }

        console.log(startArr.join(" "));
    }
}
lastKNumbersSequence(1, 2)