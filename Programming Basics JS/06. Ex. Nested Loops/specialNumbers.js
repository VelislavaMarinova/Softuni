function specialNumbers(input) {
    let num = Number(input[0])
    let buff = '';
    for (let i = 1; i <= 9; i++) {
        for (let a = 1; a <= 9; a++) {
            for (let b = 1; b <= 9; b++) {
                for (let c = 1; c <= 9; c++) {

                    if (num % i === 0 && num % a === 0 && num % b === 0 && num % c === 0) {
                        buff +=`${i}${a}${b}${c} `
                        
                        
                    }
                }
            }
        }

    }
    console.log(buff);
}

specialNumbers(["3"])