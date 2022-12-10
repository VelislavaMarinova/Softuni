function demo(input) {
    let concealedMessage = input.shift();
    let index = 0
    let line = input[index]

    while (line !== 'Reveal') {
        let [command, firstEl, secondEl] = line.split(':|:');
        switch (command) {

            case "InsertSpace":
                //   InsertSpace:|:{index}":
                // Inserts a single space at the given index. The given index will always be valid.
                let index = Number(firstEl);
                concealedMessage = concealedMessage.slice(0, index) + " " + concealedMessage.slice(index);
                console.log(concealedMessage)
                break;
            case "Reverse": 
            let elToReverse = firstEl;
            let reversed = firstEl.split('').reverse().join('')
            if(concealedMessage.includes(elToReverse)){
                //let pattern = /elToReverse/ig;
                let indexOfEL = concealedMessage.indexOf(elToReverse)
                let length = elToReverse.length
                concealedMessage = concealedMessage.slice(0,indexOfEL)+concealedMessage.slice(indexOfEL+length)+reversed;
                console.log(concealedMessage)
                //concealedMessage = concealedMessage.replace(/firstEl/,'')
                //concealedMessage = concealedMessage+reversed
            }else{
                console.log('error');
            }
            // "Reverse:|:{substring}":
                // If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
                // If not, print "error".
                // This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
                break;
            case "ChangeAll":
                let substring = firstEl;
                let replacement = secondEl;

                let pattern = new RegExp(substring,'g');
                concealedMessage = concealedMessage.replace(pattern,replacement);
                console.log(concealedMessage)
                // "ChangeAll:|:{substring}:|:{replacement}":
                // Changes all occurrences of the given substring with the replacement text.
                break;
        }
     

        index++;
        line = input[index]
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
demo([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
console.log("----------------------------");
demo([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )