function sumSecond(input){
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);
    let totalTime = time1 + time2 + time3
    let min = Math.floor(totalTime/60)
    let sec = totalTime % 60;
    if (sec < 10){
        console.log(`${min}:0${sec}`);
    }
    else{
        console.log(`${min}:${sec}`);
    }
    
}
sumSecond(["50",
"50",
"49"])

;
