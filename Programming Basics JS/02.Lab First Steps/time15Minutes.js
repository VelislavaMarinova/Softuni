function time15Minutes(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;
    let minutesAboveSixty = minutes%60
    if(minutes>59){hour = hour +1
    }
    if (minutesAboveSixty<10){
        minutesAboveSixty = (`0${minutesAboveSixty}`)
    }
    if(hour > 23){hour = 0
    }
   

    
console.log(`${hour}:${minutesAboveSixty}`);
//console.log(hour + ":" + minutesAboveSixty);

}
time15Minutes(["23", "50"]);