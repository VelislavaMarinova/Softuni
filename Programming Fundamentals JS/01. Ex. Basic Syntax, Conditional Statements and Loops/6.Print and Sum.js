function printAndSum(numOne, numTwo) {
    let numStart = Number(numOne);
    let numEnd = Number(numTwo);
    let print = ""
    let sunNum = 0
    for (let i = numStart; i <= numEnd; i++) {
        sunNum +=i;
        print += `${i} `
        
    }
    console.log(print);

    console.log(`Sum: ${sunNum}`);
}
printAndSum(5, 10)