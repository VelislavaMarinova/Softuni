function requiredReading(num1, num2, num3){
let numPages = Number(num1);
let pagesByHour = Number(num2);
let numDays = Number(num3);
let numHoursReadBook = numPages/pagesByHour
let numHoursReadingPerDay = numHoursReadBook/numDays
console.log(numHoursReadingPerDay);
}
requiredReading(212,20 ,2 );
requiredReading(432,15 , 4 )