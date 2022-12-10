function practice(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let buff = ""
    for (let a =Number(nu.charAt(0)); a <= Number(numTwo.charAt(0)); a++) {
        for (let b = Number(numOne.charAt(1)); b <= Number(numTwo.charAt(1)); b++) {
            for (let c = Number(numOne.charAt(2)); c <= Number(numTwo.charAt(2)); c++) {
                for (let d = Number(numOne.charAt(3)); d <= Number(numTwo.charAt(3)); d++) {
                    buff = (`${a}${b}${c}${d} `)
                }
            }

            // if(posOne%2!==0 && posTwo%2!==0 && posThree%2!==0 && posFour%2!==0){
            //   buff += (`${posOne}${posTwo}${posThree}${posFour} `)
        }
    }
    console.log(buff);
}


practice(["2345",
    "6789"])
