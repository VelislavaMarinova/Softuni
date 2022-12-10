function sumDigits(params) {
    let num = String(params)
    let sum = 0
    for(let i =0; i<num.length; i++){
        sum+=Number(num[i]);
    }
    console.log(sum);
}
sumDigits(1000000)
//sumDigits(97561)