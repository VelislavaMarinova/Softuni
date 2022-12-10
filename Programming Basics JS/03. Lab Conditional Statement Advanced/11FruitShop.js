function fruitShop(input){
    let fruit = input[0];
    let weekDay = input[1];
    let quantityFruits = Number(input[2]);

    if (weekDay === "Monday"||weekDay ==="Tuesday"||weekDay ==="Wednesday"||weekDay ==="thursday"||weekDay ==="Friday")
        switch(fruit){
            case "banana": console.log((quantityFruits*2.5).toFixed(2));break;
            case "apple": console.log((quantityFruits*1.2).toFixed(2));break;
            case "orange": console.log((quantityFruits*0.85).toFixed(2));break;
            case "grapefruit": console.log((quantityFruits*1.45).toFixed(2));break;
            case "kiwi": console.log((quantityFruits*2.7).toFixed(2));break;
            case "pineapple": console.log((quantityFruits*5.5).toFixed(2));break;
            case "grapes": console.log((quantityFruits*3.85).toFixed(2));break;
            default: console.log("error");break;
    }
    else if (weekDay === "Saturday"||weekDay ==="Sunday"){
        switch(fruit){
            case "banana": console.log((quantityFruits*2.7).toFixed(2));break;
            case "apple": console.log((quantityFruits*1.25).toFixed(2));break;
            case "orange": console.log((quantityFruits*0.90).toFixed(2));break;
            case "grapefruit": console.log((quantityFruits*1.60).toFixed(2));break;
            case "kiwi": console.log((quantityFruits*3).toFixed(2));break;
            case "pineapple": console.log((quantityFruits*5.6).toFixed(2));break;
            case "grapes": console.log((quantityFruits*4.2).toFixed(2));break;
            default: console.log("error");break;
    }
    }
    else {
        console.log("error");
    }
}
fruitShop(["orange","Sunday","3"]);
