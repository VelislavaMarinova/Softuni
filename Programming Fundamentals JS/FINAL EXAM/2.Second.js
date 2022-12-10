function demo(input) {
    let number = input.shift();
    let regex = /(?<validstr>\!(?<command>[A-Z][a-z]{2,})\!\:\[(?<toTranslate>[A-Za-z]{8,})\])/
    for (let i = 0; i < input.length; i++) {
        let text = input[i];
        let match = regex.exec(text)
        if (match !== null) {
            let message = match.groups.toTranslate
            let res =''
            for(let letter of message){
                let num =letter.charCodeAt()
                 num = num.toString()
                res+=`${num} `
                
            }
            console.log(`${match.groups.command}: ${res}`);
        }else{
            console.log(`The message is invalid`);
        }

    }
    
}
demo(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
