function demo(input) {

    let numBarcodes = Number(input.shift());
    let pattern = /(@#{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/
    let validBarcodes = []

    for (let i = 0; i < numBarcodes; i++) {
        let line = input[i];
        let match = pattern.exec(line);
        if (match) {
            validBarcodes.push(match.groups.barcode)
        }
    }

    let resArr = [];
    let group = '';

    for (let i = 0; i < validBarcodes.length; i++) {
        let line = validBarcodes[i]
        for (let el of line) {
            if (!isNaN(Number(el))) {
                group += el
            }
        }
        if (!group) {
            group = '00'
        }
        let barcodeAndGroup = {}
        barcodeAndGroup[line] = group
        resArr.push(barcodeAndGroup)
        group = ''
    }
    for (let i = 0; i < numBarcodes; i++) {
        let line = input[i];
        let counter = 0
        for (let el of resArr) {

            if (line.includes(Object.keys(el))) {
                console.log(`Product group: ${Object.values(el)}`);
                break;
            } else {
                counter++
                if (counter === resArr.length) {
                    console.log(`Invalid barcode`);
                    break;
                }
            }
        }
    }
}
demo((["6",
    "@###V00al1dteM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
)
console.log("-------------------------------");
demo((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
)