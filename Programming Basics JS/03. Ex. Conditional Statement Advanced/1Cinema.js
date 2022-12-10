function cinema(input){

    let typeProjectin = input[0];
    let rolls = Number(input[1]);
    let colons = Number(input[2]);
    let seats = rolls*colons
    let income = 0

    if(typeProjectin ==='Premiere'){
        income = seats*12
        }
    else if(typeProjectin === "Normal"){
        income = seats*7.5

    }
    else if(typeProjectin === "Discount"){
        income = seats*5
    }
    console.log(`${(income).toFixed(2)}`);

}
cinema(["Normal",
"21",
"13"])

