function passwordValidator(attempt) {
    let attemptLength = attempt.length
    //•	The length should be 6 - 10 characters (inclusive)
    //•	It should consist only of letters and digits
    //•	It should have at least 2 digits 
    let lengthCheck = function (pass) {

        if (attemptLength > 5 && attemptLength <= 9) {
            return "true"
        }
        else {
            return 'false'
        }
    }
    let lettersDigitsCheck = (pass) => {

        for (let i = 0; i < attemptLength; i++) {
            let charCodeSign = attempt[i].charCodeAt()
            if ((charCodeSign >= 48 && charCodeSign <= 57) || (charCodeSign >= 65 && charCodeSign <= 122)) {
                continue;
            }
            else {
                return "false"
            }
        }
        return 'true'
    }
    let numDigitsCheck = (pass) => {
        let digitCounter = 0
        for (let i = 0; i < attemptLength; i++) {
            let charCodeSign = attempt[i].charCodeAt()

            if (charCodeSign >= 48 && charCodeSign <= 57) {
                digitCounter++
            }
        }
        if (digitCounter >= 2) {

            return "true"
        }
        else {

            return "false"
        }
    }
    if (lengthCheck(attempt) === "false"){
        console.log('Password must be between 6 and 10 characters');
        }
    if(lettersDigitsCheck(attempt) === "false"){
        console.log('Password must consist only of letters and digits');
    }
    if(numDigitsCheck(attempt)==="false"){
        console.log('Password must have at least 2 digits');
    }
    if(lengthCheck(attempt) === 'true' && lettersDigitsCheck(attempt) === 'true' && numDigitsCheck(attempt) === 'true') {
        console.log('Password is valid');
    }
  
}
passwordValidator('Pa$s$s')