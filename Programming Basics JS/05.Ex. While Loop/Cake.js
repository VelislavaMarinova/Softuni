function cake(input) {
    let index = 0

    let cakeLength = Number(input[index]);
    index++;
    let cakeWide = Number(input[index]);
    index++
    let cakeSize = cakeLength * cakeWide;


    let command = input[index];
    let sum = 0;

    while (command !== "STOP") {
        command = Number(input[index]);
        sum += command;
        index++;
        if(sum >=(cakeSize)){
            console.log(`No more cake left! You need ${sum-cakeSize} pieces more.`);break;
        }
        
        command = input[index];
    }
    if(command === "STOP"){
        console.log(`${cakeSize - sum} pieces are left.`);
    }
}
// cake(["10",
// "10",
// "1",
// "STOP"])

cake(["10",
"10",
"20",
"20",
"20",
"20",
"221"])

