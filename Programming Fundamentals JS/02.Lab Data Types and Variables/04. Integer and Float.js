/*function ntegerAndFloat(numOne, numTwo, numThree) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    let num3 = Number(numThree)
    let sum = num1 + num2 + num3;
    sum = String(sum);
    let message =""
    for (let i = 0; i < sum.length; i++) {
    // console.log(sum[i]);
   
      if (sum[i] === ".") {
          message = `${sum} - Float`;break;
        }
       else { message = `${sum} - Integer` }
   }
   console.log(message);
}*/
function ntegerAndFloat(numOne, numTwo, numThree) {
    let num1 = Number(numOne);
    let num2 = Number(numTwo);
    let num3 = Number(numThree)
    let sum = num1 + num2 + num3;
    let message = "";
    if(sum%1 === 0){
        message = `${sum} - Integer`;
    }
    else{message = `${sum} - Float`
}
console.log(message);
}
ntegerAndFloat(9, 100, 1.1);
ntegerAndFloat(100, 200, 303);