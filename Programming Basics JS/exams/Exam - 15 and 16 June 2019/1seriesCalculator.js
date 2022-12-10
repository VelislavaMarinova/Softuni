function seriesCalculator(input){
    //•	Име на сериал - текст
///•	Брой сезони – цяло число в диапазона [1… 10]
////•	Брой епизоди  – цяло число в диапазона [10… 80]
//•	Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]
let name = input[0];
let numSeasons = Number(input[1])
let numEpisodes = Number(input[2])
let numTotal=numSeasons*numEpisodes
let timeWithoutAdvertisingForOne = Number(input[3]);
let timeAdvertisingForOne = 0.2*timeWithoutAdvertisingForOne;
let timeEpisode = timeWithoutAdvertisingForOne + timeAdvertisingForOne;
let timeForAll = timeEpisode*numTotal;
let timeFinalEpisodes = numSeasons*10;
let timeTotal = timeForAll + timeFinalEpisodes;

console.log(`Total time needed to watch the ${name} series is ${timeTotal} minutes.`)

}
seriesCalculator(["Lucifer", "3", "18", "55"]);