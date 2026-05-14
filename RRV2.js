//global variables:
let numFirstTurn;
let firstTurn;
let numCurrentTurn;
let currentTurn;
let bullet;
let round = 0;


//Function to flip coins and display the results
const flipCoin = (coinChoice) => {
    //once clicked make the buttons disappear
document.getElementById("head").style.display = `none`;
document.getElementById("tail").style.display = `none`;


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

    if(playerChoice === word){
        firstTurn = "Player";
     }
     else{
        firstTurn = "Computer";
     }

         document.getElementById("Coin").innerHTML=`<img src="heads.png"> <br>Player choice: ${playerChoice}<br> ${firstTurn} goes first`
     }
     else if(coinFlip === 1){
         word = "Tails";
    if(playerChoice === word){
        firstTurn = "Player";
     }
     else{
        firstTurn = "Computer";
     }
         document.getElementById("Coin").innerHTML=`<img src="tails.png"> <br>Player choice: ${playerChoice}<br> ${firstTurn} goes first`
     }



     if(playerChoice === word){
        firstTurn = "Player";
     }
     else{
        firstTurn = "Computer";
     }
if(firstTurn === "Player"){
    numFirstTurn = 0;
}
else if (firstTurn === "Computer"){
    numFirstTurn = 1;
}


document.getElementById("startButt").style.display = `block`;

}

// Round  function code
const begin = () =>{
    round += 1;
    document.getElementById("startButt").style.display = `none`;
    // rolls for the bullet
     bullet = Math.floor(Math.random() * 6) + 1;
    const startChamber = Math.floor(Math.random() * 6) + 1;
    numCurrentTurn = startChamber;
    currentTurn = firstTurn;


    if(bullet === startChamber){
        let oponent;
        if(currentTurn === "Player"){
            oponent = "Computer";
        }
        else{
            oponent = "Player";
        }
document.getElementById("Game").innerHTML = `Round ${round} <br> Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion2.html"><button>Try Again</button></a>`;
    }
    else{
document.getElementById("Game").innerHTML = `Round ${round} <br> Turn: ${currentTurn} <br> ${currentTurn} is Not out`;
    document.getElementById("round2Butt").style.display = 'block';
//<button onclick="beginRound2()> Round 2 </button>
// Continue the game and show Round Two
// Have continue button appear

}
// next chamber gets randomly choosen
numCurrentTurn =  Math.floor(Math.random() * 6) + 1;  

// but the bullet number stays the same
}

// Round 2 function code
const beginRound2 = () =>{
     round += 1;
        document.getElementById("round2Butt").style.display = 'none';

    // last roudn was player
    // now it will be computer
    if(currentTurn === "Player"){
        currentTurn = "Computer";

    }
    else if(currentTurn === "Computer"){
        currentTurn = "Player";
    }

    if(numCurrentTurn === bullet){
        let oponent;
        if(currentTurn === "Player"){
            oponent = "Computer";
        }
        else{
            oponent = "Player";
        }
document.getElementById("Game").innerHTML = `Round ${round} <br> Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion2.html"><button>Try Again</button></a>`;
    }
    else{
        document.getElementById("Game").innerHTML = `Round ${round} <br> Turn: ${currentTurn} <br> ${currentTurn} is Not out`; 
        document.getElementById("round2Butt").style.display = 'block';
    }

// next chamber gets randomly choosen
numCurrentTurn =  Math.floor(Math.random() * 6) + 1; 

// but the bullet number stays the same
       
}


