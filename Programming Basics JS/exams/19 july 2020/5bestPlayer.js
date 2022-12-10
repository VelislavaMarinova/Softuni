function bestPlayer(input) {
    let index = 0
    let name = input[index];
    index++;
    let goals = Number(input[index])
    
    let bestPlayer = "";
    let greatGoals = 0
    while (name !== "END") {


        if (goals > greatGoals) {
            greatGoals = goals
            bestPlayer = name
        }
        if(greatGoals >=10){
            break;
        }
        index++;
        name = input[index];
        index++;
        goals = Number(input[index]);

    }
    console.log(`${bestPlayer} is the best player!`)
    if (greatGoals >= 3) {
        console.log(`He has scored ${greatGoals} goals and made a hat-trick !!!`);
    }
    else{
        console.log(`He has scored ${greatGoals} goals.`);
    }
}
bestPlayer(['Petrov',
    '2',
    'Drogba',
    '11'])