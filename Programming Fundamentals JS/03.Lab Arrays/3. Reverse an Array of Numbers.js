function reverseAnArrayOfNumbers(n, arr) {
    let newArr =[]
    //let revNewArr =[]
    for (let i = n-1; i >=0; i--) {
        newArr.push (arr[i])
    }
    

console.log(newArr.join(' '));
}
reverseAnArrayOfNumbers(3, ['10', '20', '30', '40', '50'])
/*function reverseAnArrayOfNumbers(n, arr) {
    let newArr =[]
    let revNewArr =[]
    for (let i = 0; i < n; i++) {
        newArr.push (arr[i])
    }
    for(let i = newArr.length-1; i>=0; i--){
revNewArr.push(newArr[i])
    }

console.log(revNewArr.join(' '));
}
reverseAnArrayOfNumbers(3, ['10', '20', '30', '40', '50'])*/