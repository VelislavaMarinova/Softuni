function bonusScore(input){
    let a = Number(input[0]);
    let bonusPoints1 = 0.0
    //let bonusPoints2 = 0.0
    if(a <= 100){
        bonusPoints1 = 5
    }
    else if (a>1000){
        bonusPoints1 = a*0.1
    }
    else {bonusPoints1 = a*0.2  //else if (a>100){ bonusPoints1 = a*0.2}  // //ako else if (a>100){ bonusPoints1 = a*0.2} go ka4im predi else if (a>1000){
                                 //bonusPoints1 = a*0.1 togava vsi4ki stoinosti nad 100 gi umnojava *0.2 i e gre6no
    }
    if(a %2 == 0){ bonusPoints1 = bonusPoints1 +1;
        
    }
    else if (a%10 == 5){bonusPoints1 = bonusPoints1 +2
    }
   // let total = bonusPoints1 + bonusPoints2 //kogato e na 5 red ne vzema If

    console.log(bonusPoints1);
    console.log(a +bonusPoints1);

}
bonusScore(["2"]);