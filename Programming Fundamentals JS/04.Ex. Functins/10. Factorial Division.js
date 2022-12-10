function factorialDivision(num1, num2) {
    let divisionOfTwoFacNums = 0
    let factorialNum = (number) => {
        let numToFac = number
        let res = 1
        for (let i = numToFac; i > 0; i--) {
            let currentNum = i
            res*= currentNum
        }
        return res
    }
    divisionOfTwoFacNums = factorialNum(num1)/factorialNum(num2)
    console.log(divisionOfTwoFacNums.toFixed(2));
}
factorialDivision(5, 2)