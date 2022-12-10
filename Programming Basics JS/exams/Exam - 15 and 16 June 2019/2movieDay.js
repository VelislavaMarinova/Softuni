function movieDay(input){
    //-//1.	Време за снимки – цяло число в диапазона [0… 1440]
///2.	Брой сцени  – цяло число в диапазона [5… 25]
//3.	Времетраене на сцена – цяло число в диапазона [20… 90]
let time=Number(input[0]);
let numScenes = Number(input[1]);
let timeForScene = Number(input[2]);
let prepareTime = 0.15*time;
let timeForAllScenes = numScenes*timeForScene;
let timeNeeded = timeForAllScenes + prepareTime;
//•	Ако времето за заснемане на филма ви стигне: 
//"You managed to finish the movie on time! You have {останало време} minutes left!"
//	Ако времето НЕ ВИ стигне:
  //"Time is up! To complete the movie you need {нужно време} minutes."
  if (time>timeNeeded){
      console.log(`You managed to finish the movie on time! You have ${Math.round(time-timeNeeded)} minutes left!`)
  }
  else{
      console.log(`Time is up! To complete the movie you need ${Math.round(timeNeeded-time)} minutes.`)

  }

//console.log(timeNeeded)



}
movieDay(["120","10","11"])