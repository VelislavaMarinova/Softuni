function demo(input) {
    let text = input.shift();

    let line = input.shift()
    while (line !== "Done") {

        if (line.includes("TakeOdd")) {
            let oddText = ''
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    oddText += text[i];
                }
            }
            text = oddText
            console.log(text);
        }
        else if (line.includes("Cut")) {
            let [command, strartIndex, length] = line.split(' ')
            let textInLetters = text.split('');
            textInLetters.splice(strartIndex, length)
            text = textInLetters.join('')
            console.log(text);
        }
        else if (line.includes("Substitute")) {
            let [command, substring, substitute] = line.split(' ')
            if(text.includes(substring)){
              text =  text.split(substring).join(substitute)
              console.log(text);
            }else{
                console.log(`Nothing to replace!`);
            }
           
        }
        line = input.shift()
    }
    console.log(`Your password is: ${text}`);


}
demo((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)
