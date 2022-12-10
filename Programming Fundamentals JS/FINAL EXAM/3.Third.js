function demo(input) {
    let passUser = input.shift();


    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Complete') {
            break;
        }
        let [command, ...tokens] = input[i].split(" ");

        switch (command) {
            case 'Make':
                let index = tokens[1];
                if (tokens[0] === 'Upper') {
                    let element = passUser[index]
                    passUser = passUser.split('')
                    element = element.toUpperCase()
                    passUser.splice(index, 1, element)
                    passUser = passUser.join('')
                    console.log(passUser);
                }
                else if (tokens[0] === 'Lower') {
                    let element = passUser[index]
                    passUser = passUser.split('')
                    element = element.toLowerCase()
                    passUser.splice(index, 1, element)
                    passUser = passUser.join('')
                    console.log(passUser);

                }
                break;

            case 'Insert':
                let ind = Number(tokens[0]);
                let char = tokens[1];
                if (ind >= 0 && ind < passUser.length) {
                    passUser = passUser.split('');
                    passUser.splice(ind, 0, char);
                    passUser = passUser.join('');
                    console.log(passUser);
                }

                break;
            case 'Replace':

                let charToReplace = tokens[0];
                let value = Number(tokens[1])
                if (passUser.includes(charToReplace)) {
                    let num = Number(charToReplace.charCodeAt())
                    let sum = num + value
                    let symbol = String.fromCharCode(sum)

                    for (let i = 0; i < passUser.length; i++) {
                        if (passUser[i] === charToReplace) {
                            passUser = passUser.replace(charToReplace, symbol)

                        }
                    }
                    console.log(passUser);
                }

                break;
            case 'Validation':
                let regex = /(?<validpass>[A-Za-z\d+\_]+)/g
                let match
                let pass="";
                while ((match = regex.exec(passUser)) !== null) {
                   pass=match.groups.validpass
                }
                // pass = pass.slice(9)
//console.log(match.groups.validpass);
                if (passUser.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                }
                if (passUser !== pass) {
                    console.log(`Password must consist only of letters, digits and _!`);
                }
                let upperCounter = 0
                let lowerCounter = 0
                let numberCounter = 0
                for (let j = 0; j < passUser.length; j++) {

                    if (!isNaN(Number(passUser[j]))) {
                        numberCounter++
                    } else {
                        let toupper = passUser[j].toUpperCase()
                        let tolower = passUser[j].toLowerCase()
                        if (passUser[j] === toupper) {
                            upperCounter++
                        }
                        if (passUser[j] === tolower) {
                            lowerCounter++
                        }
                    }

                }
                if (upperCounter === 0) {
                    console.log(`Password must consist at least one uppercase letter!`);
                }
                if (lowerCounter === 0) {
                    console.log(`Password must consist at least one lowercase letter!`);
                }
                if (numberCounter === 0) {
                    console.log(`Password must consist at least one digit!`);
                }

                break;
        }
    }
}
demo(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])

