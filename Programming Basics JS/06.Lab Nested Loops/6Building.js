function building(input) {
    let numFloor = Number(input[0]);
    let numRoom = Number(input[1]);

    for (let a = numFloor; a > 0; a--) {
        let buffer = ""; //буфера е тук за да обхване всички апартаменти на етажа
        //console.log(a);
        for (let b = 0; b < numRoom; b++) {//б<нумроомс защото те започват от 0
            // console.log(`${a} ${b}`);
            if (a === numFloor) {
                buffer += (`L${a}${b} `)
            }
            else if (a % 2 === 0) {
                buffer += (`O${a}${b} `)
            }
            else{
                buffer += (`A${a}${b} `)
            }


        }
        console.log(buffer);
    }
}


building(["6", "4"])