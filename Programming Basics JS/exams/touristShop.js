function ouristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let name = "";
    let productCounter = 0
    let price = 0;
    let sumPrice = 0
    let command = input[index];
    while (command !== "Stop") {
        name = input[index];
        productCounter += 1
        index++;

        if (productCounter % 3 === 0) {
            price = Number(input[index]) / 2
            if (price > budget) {
                console.log(`You don't have enough money!`);
                console.log(`You need ${(price - budget).toFixed(2)} leva!`);
                break;
            }
        }
        else {
            price = Number(input[index]);
            if (price > budget) {
                console.log(`You don't have enough money!`);
                console.log(`You need ${(price - budget).toFixed(2)} leva!`);
                break;
            }
        }
        sumPrice += price;
        budget -= price;
        index++;
        command = input[index];

    }
    if (command === "Stop") {
        console.log(`You bought ${productCounter} products for ${sumPrice.toFixed(2)} leva.`);
    }
}
ouristShop(["253.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Backpack",
"25.20",
"Shoes",
"5",
"Sunglasses",
"3",
"Stop"])
