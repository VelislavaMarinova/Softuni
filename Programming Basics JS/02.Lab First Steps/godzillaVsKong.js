function godzillaVsKong(input){
    let movieBudget = Number(input[0])
    let numberStatists = Number(input[1]);
    let priceClothesForOne = Number(input[2])
    let priceClothes = priceClothesForOne*numberStatists
    let priceMovieDecor = movieBudget*0.1
    //let priceMovie = priceClothes + priceMovieDecor(prenebregva if1)
    if (numberStatists>150){priceClothes= priceClothes - priceClothes*0.1
    }
    let priceMovie = priceClothes + priceMovieDecor
    if (priceMovie >movieBudget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(priceMovie-movieBudget).toFixed(2)} leva more.`)
    }
    else if(priceMovie<=movieBudget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(movieBudget-priceMovie).toFixed(2)} leva left.`)
    }
  }
godzillaVsKong(["15437.62","186","57.99"]);
