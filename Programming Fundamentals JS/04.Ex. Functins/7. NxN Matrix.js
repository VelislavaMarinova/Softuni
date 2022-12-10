function NxNMatrix(num) {
    let printLine = (number) => {
        let print = []
        for (i = 0; i < number; i++) {
            print.push(number)
        }

        return print.join(' ')
    }
    for (let i = 0; i < num; i++) {
        console.log(printLine(num));
    }
}
NxNMatrix(3)