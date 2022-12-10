function salary(input){
    let numOpenTabs=Number(input[0]);
    let salary =Number(input[1]);
    let inputLength = input.length


    
for(let i=2; i<=inputLength;i++){
    let tabType=(input[i])
    switch(tabType){
        case "Facebook": salary -= 150;break;
        case "Instagram": salary -= 100;break;
        case "Reddit": salary -= 50;break;
    }
    

//if(tabType === "Facebook"){
  // salary -= 150
//}
//else if(tabType === "Instagram"){
//    salary -= 100
//}
//else if(tabType === "Reddit"){
 //   salary -= 50
//}
}
if(salary<=0){
    console.log(`You have lost your salary.`); 
}
else {
    console.log(`${Math.floor(salary)}`)
}

}
salary(["3",
"511",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

