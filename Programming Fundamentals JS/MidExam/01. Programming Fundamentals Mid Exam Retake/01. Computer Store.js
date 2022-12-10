function computerStore(arr) {
    let arrOfElements = arr;
    let taxes = 1.2;
    let message = "";
    let arrOfElementsLength = arrOfElements.length;
    let typeCustomer = arrOfElements[arrOfElementsLength - 1];
    let arrOfPrice = arrOfElements.splice(0, (arrOfElementsLength - 1), 1)
    let arrOfPriceNumber = arrOfPrice.map((el) => {
        return Number(el)
    })
    let arrOfPriceNumberLength = arrOfPriceNumber.length;
    let sum = 0
    for (let i = 0; i < arrOfPriceNumberLength; i++) {

        let currentPriceOfEl = arrOfPriceNumber[i];
        if (currentPriceOfEl >= 0) {
            sum += currentPriceOfEl


        }
        else {
            console.log('Invalid price!');

        }
    }
    let sumWithTaxes = sum * taxes
    let totalPrice = sumWithTaxes
    if (typeCustomer === 'special') {
        totalPrice = 0.9 * sumWithTaxes
    }
    if (sumWithTaxes > 0) {
        message = `Congratulations you've just bought a new computer!
            Price without taxes: ${sum.toFixed(2)}$
            Taxes: ${(sumWithTaxes - sum).toFixed(2)}$
            -----------
            Total price: ${totalPrice.toFixed(2)}$
            `
        //message = `Invalid order!`
    }
    else {
        message = `Invalid order!`
    }



    console.log(message);

}
computerStore([
    'regular'
    ])
    
    
