function playGame() { // master function
    // set up phase
    let goldAmount = rollDie(200);
    let movesLeft = 200;
    let vitality = 0;
    vitality = getVitality(vitality,goldAmount);

    // game play (maybe loop?)
    while(movesLeft >= 0 && vitality >= 0 && goldAmount >=0) {    // do ONE turn
        let movesUsed = rollDie(20);
        movesLeft -= movesUsed;
        // alert("You have moved " + movesUsed + " spaces and have " + movesLeft + " moves left.");
        console.log("You have moved " + movesUsed + " spaces and have " + movesLeft + " moves left.");

        let chanceOfEnemy = ifEnemy();

        let chanceOfLoot = ifLoot();
        
        goldAmount = updateGoldCounter(goldAmount, chanceOfLoot);
        // alert("You now have " + goldAmount + " gold.");
        console.log("You now have " + goldAmount + " gold.");

        vitality = updateVitalityCounter(vitality, chanceOfEnemy);
        
        console.log("You now have " + vitality + " vitality.")

    }

    // end game stuff
}

function rollDie(numberOfSides) {
    let result = Math.floor( Math.random() * numberOfSides) + 1;
        return result;
}

function getVitality(vitality, goldAmount) {
    if(goldAmount > 150) {
        vitality = 25;
        return vitality;
    }
    else if(goldAmount > 100 && goldAmount <= 150) {
        vitality = 50;
        return vitality;
    }
    else {
        vitality = 100;
        return vitality;
    }
}

function ifEnemy() {
    let enemy = rollDie(10);
    if(enemy > 5) {
        return true;
    }
    else {
        return false;
    }
}


function enemyDamage(vitality, chanceOfEnemy) {
    if(chanceOfEnemy) {
        let damage = rollDie(25);
        vitality -= damage;
        return vitality;  
    }
    else {
        let damage = 0;
        return damage;  
    }   
}

function attackDamage(vitality, chanceOfEnemy) {
    if(chanceOfEnemy) {
        let attack = rollDie(20);
        vitality += attack;
        return vitality;    
    }
    else {
        let attack = 0;
        return attack;
    }
}

function ifLoot() {
    let loot = rollDie(10);
    if(loot > 5) {
        return true;
    }
    else {
        return false;
    }
}

function updateVitalityCounter(vitality, chanceOfEnemy) {
    vitality = vitality - enemyDamage(vitality, chanceOfEnemy);
    vitality = vitality + attackDamage(vitality, chanceOfEnemy);
    return vitality;
}

function updateGoldCounter(goldAmount, ifLoot) {
    if(ifLoot) {
        let goldFound = rollDie(12);
        goldAmount += goldFound;
        return goldAmount;        
    }
    else {
        let goldLost = rollDie(12);
        goldAmount -= goldLost;
        return goldAmount;
    }
}


playGame();