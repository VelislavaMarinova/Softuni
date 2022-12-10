function storeProvision(arr1, arr2) {
    let currentStock = arr1;
    let productsOrdered = arr2;

    let updStore = {}

    for (let i = 0; i < arr2.length; i += 2) {
        let currentProduct = arr2[i];
        let quantity = Number(arr2[i+1]);
       if(!arr1.includes(currentProduct)){
        arr1.push(currentProduct);
        arr1.push(quantity)

       }
       else{
        let indexOfCurrentProduct = arr1.indexOf(currentProduct);
        let quantityInStore =Number (arr1[indexOfCurrentProduct+1])
        let quantitySum = quantityInStore + quantity
        arr1.splice((indexOfCurrentProduct+1), 1, quantitySum)
       }
    }
    for(let i= 0; i<arr1.length;i+=2){
        updStore.product = arr1[i];
        updStore.quantity = arr1[i+1]
        console.log(`${updStore.product} -> ${updStore.quantity}`);
    }
    //console.log(`${updStore.product} -> ${updStore.quantity}`);

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)