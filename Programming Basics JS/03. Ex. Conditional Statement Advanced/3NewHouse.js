function newHouse(input) {
    let typeFlower = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (typeFlower) {
        case "Roses": price = numberFlowers *5; 
            if(numberFlowers>80){
                price = 0.9*price;
            }
            break;
        case "Dahlias":price = numberFlowers *3.8; 
            if(numberFlowers>90){
                price = 0.85*price;
            }
             break;

        case "Tulips":price = numberFlowers *2.8;
            if(numberFlowers>80){
                price = 0.85*price;
            }
            break;
        case "Narcissus":price = numberFlowers *3; 
            if(numberFlowers < 120){
                price = price *1.15;
            }
             break;
        case "Gladiolus":price = numberFlowers *2.5;
            if(numberFlowers<80){
                price = price *1.2
            }
            break;
     }
     if(budget>=price){   //>=!!!
         console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlower} and ${(budget-price).toFixed(2)} leva left.`);
     }
     else{
         console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
     }
     
}
newHouse(["Narcissus",
"119",
"360"])

;
