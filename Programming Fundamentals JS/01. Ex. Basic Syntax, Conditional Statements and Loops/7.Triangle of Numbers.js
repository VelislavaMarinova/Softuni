function triangleOfNumbers(num) {
    
    for (let i = 1; i <= num; i++) {
        let print = ""
        for (let j = 1; j <= i; j++) {
            print += `${i} `
            
        }
        console.log(print)
    }
    
}
triangleOfNumbers(5)