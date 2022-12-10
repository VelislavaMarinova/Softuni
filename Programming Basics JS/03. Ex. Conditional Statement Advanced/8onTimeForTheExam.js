function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let startExamInMinutes = (hourExam * 60) + minuteExam;
    let arriveInMinutes = (hourArrive * 60) + minArrive;
    let earlyOnTime = (startExamInMinutes - arriveInMinutes);
    let LateTime = arriveInMinutes - startExamInMinutes;
    let hourEarlyOnTime = Math.trunc(earlyOnTime / 60);
    let minutesEarlyOnTime = earlyOnTime % 60;
    let hourLateTime = Math.trunc(LateTime / 60);
    let minutesLateTime = LateTime % 60;

    if (LateTime >= 1) {
        console.log(`Late`)
    }
    else if (earlyOnTime <= 30 || startExamInMinutes === arriveInMinutes) {
        console.log(`On time`)
    }
    else {
        console.log(`Early`)
    }
    if (earlyOnTime >= 1 && earlyOnTime < 60) {
        console.log(`${earlyOnTime} minutes before the start`)
    }
    else if (earlyOnTime >= 60) {
        if (minutesEarlyOnTime < 10) {
            console.log(`${hourEarlyOnTime}:0${minutesEarlyOnTime} hours before the start`)
        }
        else {
            console.log(`${hourEarlyOnTime}:${minutesEarlyOnTime} hours before the start`)
        }
    }
    else if (LateTime < 60 && LateTime != 0 && LateTime > 0) {//&& LateTime != 0  без това дава грешка:0 minutes after the start
        console.log(`${LateTime} minutes after the start`)
    }
    else if (LateTime >= 60){
        if (minutesLateTime < 10) {
            console.log(`${hourLateTime}:0${minutesLateTime} hours after the start`)
        }
        else {
            console.log(`${hourLateTime}:${minutesLateTime} hours after the start`)
        }
    }

}
onTimeForTheExam(["11",
"30",
"11",
"29"])





