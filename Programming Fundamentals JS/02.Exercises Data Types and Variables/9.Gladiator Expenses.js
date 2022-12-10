function gladiatorExpenses(a, b, c, d, e) {
    let lostFightsCount = Number(a);
    let helmetPrice = Number(b);
    let swordPrice = Number(c);
    let shieldPrice = Number(d);
    let armorPrice = Number(e);

    let numBrokenHelmet = Math.floor(lostFightsCount/2);
    let numBrokenSword = Math.floor(lostFightsCount/3);
    let numBrokenShield = Math.floor(lostFightsCount/6);
    let numBrokenArmour = Math.floor(numBrokenShield/2);

    let repairPriceHelmet = helmetPrice*numBrokenHelmet;
    let repairPriceSword = swordPrice*numBrokenSword;
    let repairPriceShield = shieldPrice*numBrokenShield;
    let repairPriceArmour = armorPrice*numBrokenArmour;
    let total = repairPriceHelmet+repairPriceSword+repairPriceShield+repairPriceArmour

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

    
}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23,12.50,21.50, 40, 200)