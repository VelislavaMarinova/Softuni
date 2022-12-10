function login(credentials) {
	const username = credentials[0];
	let rightPassword = "";
	let loginAttempts = 1;
	let isUserBlocked = false;
	let message = "";
	for (let i = username.length - 1; i >= 0; i--) {
        rightPassword += username[i];
    }
	for (let i = 1; i < credentials.length; i++) {
		if (loginAttempts < 4 && credentials[i] !== rightPassword) {
			message = `Incorrect password. Try again.`;
		} 
		if (loginAttempts == 4) {
			message =  `User ${username} blocked!`;
		}
		if(credentials[i] === rightPassword ) {
			message = `User ${username} logged in.`;
		} 
		console.log(message);
		loginAttempts++;
    }


}
login(['Acer','login','go','let me in','recA'])