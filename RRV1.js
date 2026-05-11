//Function to flip coins and display the results
const flipCoin = (coinChoice) => {
    //once clicked make the buttons disappear
    // document.getElementsByClassName("coinBut").style.visibility = "hidden";

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

     let firstTurn;

     if(playerChoice === word){
        firstTurn = "Player";
     }
     else{
        firstTurn = "Computer";
     }
document.getElementById("Coin").innerHTML = `Player choose: ${playerChoice} <br> Coin Results: ${word} <br> ${firstTurn} goes first`;
}