function oscarsCeremony(input){
    //•	Статуетки  – цената им е 30% по-малка от наема на залата
//•	Кетъринг – цената му е 15% по-малка от тази на статуетките
//•	Озвучаване – цената му е 1 / 2 от цената за кетъринг
let rentHall = Number(input[0]);
let statuettePrice = rentHall*0.7;
let cateringPrice = statuettePrice*0.85;
let soundPrice = cateringPrice/2;
let ceremonyPrice = (rentHall + statuettePrice + cateringPrice + soundPrice).toFixed(2);
console.log(ceremonyPrice);
}
oscarsCeremony(["3500"]);