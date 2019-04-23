function playGame() { // master function
    // set up phase
    let goldAmount = rollDie(200);
    let movesLeft = 200;
    let vitality = 0;
    vitality = getVitality(vitality,goldAmount);

    // game play (maybe loop?)
    while(movesLeft > 0) {    // do ONE turn
        let movesUsed = rollDie(20);
        movesLeft -= movesUsed;
        // alert("You have moved " + movesUsed + " spaces and have " + movesLeft + " moves left.");
        console.log("You have moved " + movesUsed + " spaces and have " + movesLeft + " moves left.");
        
        goldAmount = updateGoldCounter(goldAmount);
        // alert("You now have " + goldAmount + " gold.");
        console.log("You now have " + goldAmount + " gold.");

        vitality = updateVitalityCounter(vitality);
        
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

function updateVitalityCounter(vitality) {
    vitality = vitality - enemyDamage();
    vitality = vitality + attackDamage();
    return vitality;
}


function updateGoldCounter(playerGold) {
    if(ifLoot = true) {
        let goldFound = rollDie(12);
        playerGold += goldFound;
        return playerGold;        
    }
    else {
        
    }
}

function enemyDamage() {
    if(ifEnemy = true) {
      let damage = rollDie(25);
      return damage;  
    }
    else {
        
    }   
}

function ifEnemy() {
    let enemy = rollDice(10);
    if(enemy > 5) {
        return true;
    }
    else {
        return false;
    }
}

function ifLoot() {
    let loot = rollDice(10);
    if(loot > 5) {
        return true;
    }
    else {
        return false;
    }
}

function attackDamage() {
    let attack = rollDie(20);
    return attack;
}

playGame();