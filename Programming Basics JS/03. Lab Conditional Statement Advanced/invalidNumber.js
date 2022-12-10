function invalNum(input){
    //Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише функция, която 
    //приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 
    let number=Number(input[0]);
    if (number >=100 && number <=200){
        console.log("")
        
    }
    else if(number ===0){console.log("")}
    else{console.log("invalid")}
}
invalNum(["0"])