function playGame() { // master function
    // set up phase
    let goldAmount = 50;
    let movesLeft = 200;

    // game play (maybe loop?)
    while(movesLeft > 0) {    // do ONE turn
        let movesUsed = rollDie(20);
        movesLeft -= movesUsed;
        // alert("You have moved " + movesUsed + " spaces and have " + movesLeft + " moves left.");
        console.log("You have moved " + movesUsed + " spaces and have " + movesLeft + " moves left.");
        
        goldAmount = updateGoldCounter(goldAmount);
        // alert("You now have " + goldAmount + " gold.");
        console.log("You now have " + goldAmount + " gold.");

    }""

    // end game stuff
}

function rollDie(numberOfSides) {
    let result = Math.floor( Math.random() * numberOfSides) + 1;
    return result;
}

function updateGoldCounter(playerGold) {
    let goldFound = rollDie(12);
    playerGold += goldFound;
    return playerGold;
}

// function increaseTurnCounter(thanos) {
//     thanos++;
//     return thanos;
// }

playGame();



// window.addEventListener( 'DOMContentLoaded', function () {
	
//     const buttonRoolDice = document.querySelector( '.dice-roll' );

// function rollDice () {

//     const diceSide1 = document.getElementById( 'dice-side-1' );
//     const diceSide2 = document.getElementById( 'dice-side-2' );
//     const diceSide3 = document.getElementById( 'dice-side-3');
//     const status = document.getElementById( 'status' );

//     const side1 = rollDie(20);
//     alert("You just rolled a " + side1);
//     // return;
//     const diceTotal = side1 + side2 + side3;

//     diceSide1.innerHTML = side1;
//     diceSide2.innerHTML = side2;
//     diceSide3.innerHTML = side3;

//     status.innerHTML = 'You rolled ' + diceTotal + '.';

//     if ( side1 === side2 ) {
//         status.innerHTML += ' Doubles! You get a free turn!';
//     }

//     else if (side1 === side3) {

//     }
// }

// buttonRoolDice.addEventListener( 'click', rollDice, false );

// }, false);    



// const side2 = Math.floor( Math.random() * 6 ) + 1;
// const side3 = Math.floor( Math.random() * 12 ) + 1;