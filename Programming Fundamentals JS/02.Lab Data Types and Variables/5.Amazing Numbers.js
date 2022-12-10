function amazingNumbers(num) {
    let ourNum = String(num)
    let sum = 0
    let message = ""
    //console.log(num);
    for (let i = 0; i < ourNum.length; i++) {
        sum += Number(ourNum[i])
    }
    sum = String(sum);
for(let i = 0; i<sum.length; i++){
    if(sum[i] === '9'){
        message = `${ourNum} Amazing? True`;break;
    }
    else{message = `${ourNum} Amazing? False`}
}
console.log(message);
}
amazingNumbers(999)
amazingNumbers(1233)