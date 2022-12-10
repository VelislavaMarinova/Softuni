function echoType(command) {
    let type = typeof (command)
    if (type === "string" || type === "number") {
        console.log(type);
        console.log(command);
    }
    
    else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }
}
//console.log(type);

echoType('Hello, JavaScript!')
echoType(18)
echoType(null)