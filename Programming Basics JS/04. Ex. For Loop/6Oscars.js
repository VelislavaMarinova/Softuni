function oscars(input) {
    let actorName = input[0];
    let score = Number(input[1]);
    let appraiserNum = Number(input[2]);
    let inputL=input.length



    for (let i = 3; i < inputL; i++) {
        if (i % 2 !== 0) {
            let points = i + 1;
            let addedScore = input[i].length * Number(input[points]) / 2;
            score += addedScore
           }
       
           if (score > 1250.5){
            break;
           }
    }
   
    
   if(score< 1250.5){
      console.log(`Sorry, ${actorName} you need ${(1250.5 - score).toFixed(1)} more!`)}
  else{console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(score).toFixed(1)}!`)}
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
