function orders(order, num) {

    let orderedProduct = order;
    let numProducts = Number(num);
    let totalSum = 0

    switch (orderedProduct) {
        case 'coffee': totalSum = 1.5 * numProducts; break;
        case 'water': totalSum = 1 * numProducts; break;
        case 'coke': totalSum = 1.4 * numProducts; break;
        case 'snacks': totalSum = 2 * numProducts; break;
    }
    console.log(totalSum.toFixed(2));

}
orders("coffee", 5)