function demo(input) {
    let numHeroes = input.shift();
    let maxManaPoints = 200;
    let maxHitPoints = 100;
    class heroInfo {
        constructor(name, hitPoints, manaPoints) {
            this.name = name,
                this.hitPoints = hitPoints,
                this.manaPoints = manaPoints
        }
    }
    let allHerosInfoArr = []
    for (let i = 0; i < numHeroes; i++) {
        let [name, hitPoints, manaPoints] = input[i].split(' ')
        let newObj = new heroInfo(name, hitPoints, manaPoints);
        allHerosInfoArr.push(newObj)

    }
    let linesOfCommands = input.slice(numHeroes);
    let line = linesOfCommands.shift();
    while (line !== 'End') {
        let [command, name, numOne, numTwo] = line.split(' - ')

        line = linesOfCommands.shift()
        switch (command) {
            case "CastSpell":
                let neededMP = Number(numOne);
                let spellName = numTwo;
                for (let el of allHerosInfoArr) {
                    if (el.name === name) {
                        if (el.manaPoints >= neededMP) {
                            el.manaPoints = Number(el.manaPoints) - neededMP
                            console.log(`${name} has successfully cast ${spellName} and now has ${el.manaPoints} MP!`);


                        } else {
                            console.log(`${name} does not have enough MP to cast ${spellName}!`);

                        }
                    }
                }
                break;
            case "TakeDamage":
                let damage = Number(numOne);
                let attacker = numTwo;
                for (let el of allHerosInfoArr) {
                    if (el.name === name) {
                        let cuurentHP = Number(el.hitPoints)
                        el.hitPoints = cuurentHP - damage;
                        if (Number(el.hitPoints) > 0) {
                            console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${el.hitPoints} HP left!`);
                        } else {
                            let indexOfel = allHerosInfoArr.indexOf(el);
                            allHerosInfoArr.splice(indexOfel, 1)
                            console.log(`${name} has been killed by ${attacker}!`);
                        }
                    }
                }
                break;
            case "Recharge":
                let amountRecharge = Number(numOne);
                for (let el of allHerosInfoArr) {
                    if (el.name === name) {
                        let startMP =Number(el.manaPoints);
                        el.manaPoints = Number(el.manaPoints) + amountRecharge;
                        if (el.manaPoints > maxManaPoints) {
                            amountRecharge = maxManaPoints -startMP
                            el.manaPoints = maxManaPoints
                        }
                        console.log(`${name} recharged for ${amountRecharge} MP!`);
                    }
                }
                break;
            case "Heal":
                let amountHeal = Number(numOne);
                for (let el of allHerosInfoArr) {
                    if (el.name === name) {
                        let startHP =Number (el.hitPoints)
                        el.hitPoints = Number(el.hitPoints) + amountHeal;
                        if (el.hitPoints > maxHitPoints) {
                            amountHeal = maxHitPoints - startHP
                            el.hitPoints = maxHitPoints;
                        }
                        console.log(`${name} healed for ${amountHeal} HP!`);
                    }
                }
                break;
        }
    }
    for (let el of allHerosInfoArr) {
        console.log(`${el.name}
 HP: ${el.hitPoints}
 MP: ${el.manaPoints}`);
    }
    //console.log(allHerosInfoArr[1]);
}
demo(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    // 'Heal - Solmyr - 10',
    // 'Recharge - Solmyr - 50',
   'TakeDamage - Kyrre - 66 - Orc',
    //'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
)
console.log('-----------------------------');
demo(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Heal - Adela - 3',
    
     'TakeDamage - Tyris - 0 - Fireball',
   'TakeDamage - Ivor - 1 - Mosquito',
    'End'
])