function login(input) {
    let index = 0
    let username = input[index]
    index++;
    let attempt = input[index];
    let correctPass = ""
    let message = ""
    let attemptCounter = 0
    //console.log(username[0]);
    for (let i = username.length - 1; i >= 0; i--) {
        correctPass += username[i];
    }
    while (attempt !== correctPass) {
        message = `Incorrect password. Try again.`
        attemptCounter += 1
        if (attemptCounter === 4) {
            message = `User ${username} blocked!`
            console.log(message);
            break;
        }
        console.log(message);
        index++;
        attempt = input[index]
    }
    if (attempt === correctPass) {
        message = `User ${username} logged in.`
        console.log(message);
    }

}
//login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])