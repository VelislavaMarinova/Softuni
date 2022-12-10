function toJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }
    let res = JSON.stringify(obj);
    
    console.log(res);
}

toJSON('George', 'Jones', 'Brown')