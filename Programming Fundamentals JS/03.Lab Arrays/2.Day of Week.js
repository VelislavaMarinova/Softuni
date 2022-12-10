function dayOfWeek(n){
let arrDayOfweek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
if(n<=7){
    console.log(arrDayOfweek[n-1]);
}
else{
    console.log('Invalid day!');
}
}
dayOfWeek(3)
dayOfWeek(8)