function onTimeForTheExam(input) {
    let startHour = Number(input[0]);
    let startMinutte = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinnutes = Number(input[3]);

    let startHourinMin = startHour * 60;
    let startTime = startHourinMin + startMinutte;
    let arrivalHourinMin = arrivalHour * 60;
    let arrivalTime = arrivalHourinMin + arrivalMinnutes;
    let startTime30 = startTime - 30;
    let earlyMin = startTime - arrivalTime;
    let minAbove60 = earlyMin % 60;
    let earlyHour = Math.trunc(earlyMin / 60);
    let lateMin = arrivalTime - startTime;
    let lateMin60 = lateMin % 60;
    let lateHour = Math.trunc (lateMin/60);

    
    //console.log(earlyMin)

    if (arrivalTime > startTime) {
        console.log(`Late`)
    }
    else if (arrivalTime === startTime || arrivalTime >= startTime30 && arrivalTime <= startTime) {
        console.log(`On time`)
    }
    else if (arrivalTime < startTime30) {
        console.log(`Early`)
    }
    if (earlyMin < 60 && earlyMin > 0) {
       
        console.log(`${(earlyMin)} minutes before the start`)
        
    }
    else if (earlyMin > 59) {
        if (minAbove60 < 10) {
            console.log(`${earlyHour}:0${minAbove60} hours before the start`)
        }
        else {
            console.log(`${earlyHour}:${minAbove60} hours before the start`)
        }
    }
    else if(lateMin < 60 && lateMin > 0){
        
            console.log(`${lateMin} minutes after the start`)
        

    }
    else if((lateMin) >= 60 && lateMin !== 00){
        if(lateMin60 < 10){
            console.log(`${lateHour}:0${lateMin60} hours after the start`)
        }
        else{
            console.log(`${lateHour}:${lateMin60} hours after the start`)  
        }

    }
}
onTimeForTheExam(["16",
"00",
"15",
"00"]






