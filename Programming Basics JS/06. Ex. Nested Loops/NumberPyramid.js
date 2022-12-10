function numberPyrrolmid(input) {
    let num = Number(input[0]);
    let current = 1
    let currentLine = ""
    let isBigger = false
    for (let rol = 1; rol <=num; rol++) {
        for (let col = 1; col <= rol; col++) {
            if(current > num){
                isBigger = true;
                break;
            }
            currentLine+=current+" "
            current++
        }
        console.log(currentLine);
        currentLine = ""
        if(isBigger){
            break;
        }
    }

}
numberPyrrolmid(["15"])