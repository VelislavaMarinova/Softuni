function movieProfit(input){
    //1.	Име на филм - текст
/////2.	Брой дни - цяло число в диапазона [1… 90]
////3.	Брой билети  - цяло число в диапазона [100… 100000]
//4.	Цена на билет - реално число в диапазона [5.0… 25.0]
//5.	Процент за киното - цяло число в диапазона [5... 35]
let name = input[0];
let numDays = Number(input[1]);
let numTicketsPerDay = Number(input[2]);
let priceTicket = Number(input[3]);
let percentForCinema = Number(input[4])
let priceTicketPerDay = numTicketsPerDay*priceTicket;
let priceForPeriod = numDays*priceTicketPerDay;
let total = priceForPeriod-priceForPeriod*percentForCinema/100;
console.log(`The profit from the movie ${name} is ${total.toFixed(2)} lv.`)


}
movieProfit(["The Programmer","20", "500", "7.50", "7"]);