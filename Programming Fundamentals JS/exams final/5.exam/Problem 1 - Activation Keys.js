function demo(input) {

    let rawAk = input.shift();
    for (let i = 0; i < input.length; i++) {
        let [command, ...tokens] = input[i].split('>>>');
        if (command === "Generate") {
            break
        }
        switch (command) {
            case 'Contains':
                let substringWord = tokens;
                rawAk.includes(substringWord) ? console.log(`${rawAk} contains ${substringWord}.`) : console.log(`Substring not found!`);
                break;
            case 'Flip':
                let upperLower = tokens[0];
                let start = Number(tokens[1]);
                let end = Number(tokens[2]);
                let substr = rawAk.substring(start, end);
                if (upperLower === "Upper") {
                    substr = substr.toUpperCase()
                    rawAk = rawAk.substring(0, start) + substr + rawAk.substring(end)
                    console.log(rawAk);
                } else {
                    substr = substr.toLowerCase()
                    rawAk = rawAk.substring(0, start) + substr + rawAk.substring(end)

                    console.log(rawAk);
                }
                break;
            case 'Slice':
                let startInd = Number(tokens[0]);
                let endInd = Number(tokens[1]);

                rawAk = rawAk.slice(0, startInd) + rawAk.slice(endInd)
                console.log(rawAk);
                break;
        }
    }
    console.log(`Your activation key is: ${rawAk}`);
}
demo(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])



