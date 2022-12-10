function lunchBreak(input){
    let movieName=input[0];
    let movieLenght = Number(input[1]);
    let brakeTime = Number(input[2]);
    let lunchTime = brakeTime/8;
    let restTime = brakeTime/4;
    let timeForMovie = brakeTime -(lunchTime + restTime);
    //console.log(timeForMovie)
    //•	Ако времето е достатъчно да изгледате епизода: 
//"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
//•	Ако времето не Ви е достатъчно:
//"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
if(timeForMovie>=movieLenght){
    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeForMovie-movieLenght)} minutes free time.`)
}
else{
    console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieLenght-timeForMovie)} more minutes.`)
}


}
lunchBreak(["Teen Wolf","48","60"]);
