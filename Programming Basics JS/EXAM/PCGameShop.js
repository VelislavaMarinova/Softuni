function pcGameShop(input) {
    let index = 0
    let numGames = input[index];
    index++;
    let nameGame = 0

    let percentHearthstone = 0;
    let percentFornite = 0;
    let percentOverwatch = 0;
    let percentOther = 0;
    let numHearthstone = 0
    let numFornite = 0
    let numOverwatch = 0
    let numOthers = 0

for(let i = 1; i<=numGames;i++){
    nameGame = input[index];
    switch (nameGame) {
        case "Hearthstone": numHearthstone++;break;
        case "Fornite":numFornite++;break;
        case "Overwatch":numOverwatch++;break;
        default:numOthers++;break;
    
    }
    index++;
}
percentHearthstone = numHearthstone/numGames*100;
percentFornite = numFornite/numGames*100;
percentOverwatch = numOverwatch/numGames*100;
percentOther = numOthers/numGames*100;
    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOther.toFixed(2)}%`);
}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

