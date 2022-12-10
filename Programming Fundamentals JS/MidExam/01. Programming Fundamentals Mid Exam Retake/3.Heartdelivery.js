function heartDelivery(arr) {
    let firstLine = arr.shift().split('@');
    let nextLine = arr.shift();
    let index = 0
    while (nextLine !== "Love!") {

        let nextLineArr = nextLine.split(" ");
        index +=Number(nextLineArr[1]);

        if (index > firstLine.length - 1) {
            index = 0;
        }
        if (firstLine[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        }
        else {
            firstLine[index] = firstLine[index] - 2;
            if (firstLine[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        nextLine = arr.shift();
    }
    console.log(`Cupid's last position was ${index}.`);
    let res = [];
    let resFlag = true;

    firstLine.forEach(element => {
        if (element !== 0) {
            res.push(element);
            resFlag = false;
        }

    });
    if (resFlag) {
        console.log(`Mission was successful.`);
    }
    else {
        console.log(`Cupid has failed ${res.length} places.`);
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
