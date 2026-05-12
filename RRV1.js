//global variables:
let numFirstTurn;
let firstTurn;


//Function to flip coins and display the results
const flipCoin = (coinChoice) => {
    //once clicked make the buttons disappear
document.getElementById("head").style.display = `none`;
document.getElementById("tail").style.display = `none`;

// document.getElementByClass("CoinBut").style.display = `none`;

    //random generater to flip coin
    // 0 = head
    // 1 = Tails
    let playerChoice;
    if(coinChoice === 0){
        playerChoice = 'Heads';
    }
    else if(coinChoice === 1){
        playerChoice = 'Tails';
    }

    let word;
    const coinFlip = Math.floor(Math.random() * 2); 

     if(coinFlip === 0){
         word = "Heads";
     }
     else if(coinFlip === 1){
         word = "Tails";
     }



     if(playerChoice === word){
        firstTurn = "Player";
     }
     else{
        firstTurn = "Computer";
     }
document.getElementById("Coin").innerHTML = `Player choose: ${playerChoice} <br> Coin Results: ${word} <br> ${firstTurn} goes first`;

if(firstTurn === "Player"){
    numFirstTurn = 0;
}
else if (firstTurn === "Computer"){
    numFirstTurn = 1;
}


document.getElementById("startButt").style.display = `block`;
}

const begin = () =>{
    document.getElementById("startButt").style.display = `none`;
    // rolls for the bullet
    const bullet = Math.floor(Math.random() * 6) + 1;
    const startChamber = Math.floor(Math.random() * 6) + 1;
    let currentTurn = numFirstTurn;

    if(bullet === startChamber){
document.getElementById("Game").innerHTML = `First Turn: ${firstTurn} <br> roll: ${bullet} <br> Start Chamber: ${startChamber} <br> ${firstTurn} is out <br> Other opnen wins, would you like to play again?`;
// Show End screen results
// add a 
    }
    else{
document.getElementById("Game").innerHTML = `First Turn: ${firstTurn} <br> roll: ${bullet} <br> Start Chamber: ${startChamber} <br> ${firstTurn} is Not out `;
    document.getElementById("round2Butt").style.display = 'block';
//<button onclick="beginRound2()> Round 2 </button>
// Continue the game and show Round Two
// Have continue button appear

}
      // Round Two
}

const beginRound2 = () =>{
        document.getElementById("round2Butt").style.display = 'none';
    document.getElementById("round2").style.display = 'block';
}