function furniture(input) {
    let text = input.join(" ");
    let furnitureArr = [];
    let totalSum = 0
    let regExp = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>[\d]+)/g;
    let valid;
    while ((valid = regExp.exec(text)) !== null) {
        let validName = valid.groups['name'];// = let validName = valid.groups.name;
        let validPrice = valid.groups['price'];// = let validPrice = valid.groups.price;
        let validQuantity = valid.groups['quantity']// = let validQuantity = valid.groups.quantity;
        furnitureArr.push(validName);
        totalSum += Number(validPrice) * Number(validQuantity);


    }
    console.log('Bought furniture:');
    furnitureArr.forEach((el) => {
        console.log(el);
    })
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])