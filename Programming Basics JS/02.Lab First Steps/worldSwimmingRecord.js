function worldSwimmingRecord(input){
    //Функцията получава: рекордът в секунди,  който Иван трябва да подобри, 
     //разстоянието в метри, което трябва да преплува
     // и времето в секунди, за което плува разстояние от 1 м. 
     //съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
     //Когато се изчислява колко пъти Иванчо ще се забави, в резултат на
     // съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
     //•	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
//o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
//•	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
//o	"No, he failed! He was {недостигащите секунди} seconds slower."
     let recordSeconds = Number(input[0]);
     let distanceMetres = Number(input[1]);
     let timeSecondforOneMetre = Number(input[2]);
     let timeForDistance = distanceMetres*timeSecondforOneMetre
     let timeDelay = Math.floor (distanceMetres/15)*12.5;
     let timeAfterDelay = timeForDistance + timeDelay //!!!
    //console.log(timeDelay);

  if(timeAfterDelay<recordSeconds){
  console.log(`Yes, he succeeded! The new world record is ${timeAfterDelay.toFixed(2)} seconds.`)
 }
 else if(timeAfterDelay>=recordSeconds){
       console.log(`No, he failed! He was ${(timeAfterDelay-recordSeconds).toFixed(2)} seconds slower.`)
    }
    }
worldSwimmingRecord(["55555.67","3017","5.03"]);
