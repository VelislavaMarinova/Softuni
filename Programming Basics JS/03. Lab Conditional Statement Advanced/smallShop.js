function smallShop(input){
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    if (city ==="Plovdiv"){
        if (product == "coffee"){
            console.log(quantity*0.4)
        }
        if(product == "water"){
            console.log(quantity*0.7)
        }
        if(product == "beer")
            console.log(quantity*1.15)
        if(product == "sweets")
            console.log(quantity*1.30)
        if(product == "peanuts")
            console.log(quantity*1.5)
         }
     else if (city === "Sofia"){
            if (product == "coffee"){
                console.log(quantity*0.5)
            }
            if(product == "water"){
                console.log(quantity*0.8)
            }
            if(product == "beer")
                console.log(quantity*1.2)
            if(product == "sweets")
                console.log(quantity*1.45)
            if(product == "peanuts")
                console.log(quantity*1.6)
             }
    else if (city =="Varna"){
                if (product == "coffee"){
                    console.log(quantity*0.45)
                }
                if(product == "water"){
                    console.log(quantity*0.7)
                }
                if(product == "beer")
                    console.log(quantity*1.1)
                if(product == "sweets")
                    console.log(quantity*1.35)
                if(product == "peanuts")
                    console.log(quantity*1.55)
                 }
                 //mnogo console.log ne dobre
                 //vij 2 variant
                 
    
}
smallShop(["peanuts",
"Plovdiv",
"1"])

