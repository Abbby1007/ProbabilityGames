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
   document.getElementById("Game").innerHTML = `First Turn: ${firstTurn} <br> roll: ${bullet}`;

   

}