//global variables:
let numFirstTurn;
let firstTurn;
let numCurrentTurn;
let currentTurn;
let bullet;
let round = 1;


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

if(firstTurn === "Player"){
    numFirstTurn = 0;
}
else if (firstTurn === "Computer"){
    numFirstTurn = 1;
}


document.getElementById("startButt").style.display = `block`;
round += 1;
}

// Round  function code
const begin = () =>{

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
document.getElementById("Game").innerHTML = `First Turn: ${firstTurn} <br> Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;
    
    }
    else{
document.getElementById("Game").innerHTML = `First Turn: ${firstTurn} <br> ${firstTurn} is Not out `;
    document.getElementById("round2Butt").style.display = 'block';
//<button onclick="beginRound2()> Round 2 </button>
// Continue the game and show Round Two
// Have continue button appear

}
    if(numCurrentTurn === 6){
        numCurrentTurn = 1; 
        }else{
            numCurrentTurn += 1;
        }  
}

// Round 2 function code
const beginRound2 = () =>{
        document.getElementById("round2Butt").style.display = 'none';
    document.getElementById("round2").style.display = 'block';

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
document.getElementById("round2Results").innerHTML = `Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;  
    }
    else{
        document.getElementById("round2Results").innerHTML = `${currentTurn} is not out`; 
    document.getElementById("round3Butt").style.display = 'block';  
    }
        if(numCurrentTurn === 6){
        numCurrentTurn = 1; 
        }else{
            numCurrentTurn += 1;
        }
}

// Round 3 function code
const beginRound3 = ()=>{
        document.getElementById("round3Butt").style.display = 'none';
    document.getElementById("round3").style.display = 'block';

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
document.getElementById("round3Results").innerHTML = `Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;  
    }
    else{
        document.getElementById("round3Results").innerHTML = `${currentTurn} is not out`; 
    document.getElementById("round4Butt").style.display = 'block';  
    }
        if(numCurrentTurn === 6){
        numCurrentTurn = 1; 
        }else{
            numCurrentTurn += 1;
        }
}

// Round 4 function code
const beginRound4 = ()=>{
        document.getElementById("round4Butt").style.display = 'none';
    document.getElementById("round4").style.display = 'block';

    // last roudn was player
    // now it will be computer
    if(currentTurn === "Player"){
            currentTurn = "Computer";

    }
    else if(currentTurn === "Computer"){
        currentTurn = "Player"
    }

    if(numCurrentTurn === bullet){
        let oponent;
        if(currentTurn === "Player"){
            oponent = "Computer";
        }
        else{
            oponent = "Player";
        }
document.getElementById("round4Results").innerHTML = `Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;  
    }
    else{
        document.getElementById("round4Results").innerHTML = `${currentTurn} is not out`; 
    document.getElementById("round5Butt").style.display = 'block';  
    }
        if(numCurrentTurn === 6){
        numCurrentTurn = 1; 
        }else{
            numCurrentTurn += 1;
        }
}

// Round 5 function code
const beginRound5 = ()=>{
        document.getElementById("round5Butt").style.display = 'none';
    document.getElementById("round5").style.display = 'block';

    // last roudn was player
    // now it will be computer
    if(currentTurn === "Player"){
        currentTurn = "Computer"

    }
    else if(currentTurn === "Computer"){
        currentTurn = "Player"
    }

    if(numCurrentTurn === bullet){
           let oponent;
        if(currentTurn === "Player"){
            oponent = "Computer";
        }
        else{
            oponent = "Player";
        }
    document.getElementById("round4Results").innerHTML = `Turn: ${currentTurn} <br> ${currentTurn} is out <br><span id="win">${oponent} wins</span>, <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;  
    }
    else{
        document.getElementById("round4Results").innerHTML = `${currentTurn} is not out`; 
    document.getElementById("round6Butt").style.display = 'block';  
    }
        if(currentTurn === 6){
            numCurrentTurn = 1; 
        }else{
        numCurrentTurn += 1;
        }
}

// Round 6 function code
const beginRound6 = ()=>{
        document.getElementById("round6Butt").style.display = 'none';
    document.getElementById("round6").style.display = 'block';

    // last roudn was player
    // now it will be computer
    if(currentTurn === "Player"){
        currentTurn = "Computer"

    }
    else if(currentTurn === "Computer"){
        currentTurn = "Player"
    }

    if(numCurrentTurn === bullet){ 
     if(currentTurn === "Player"){
document.getElementById("round6Results").innerHTML = `Player is out <br> <span id="win">Computer is the WINNER!!!!</span> <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;    
     }
     else{
document.getElementById("round6Results").innerHTML = `Computer is out <br> <span id= "win"> Player is the WINNER!!!!</span> <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;        
     }
     
    }
    else{
        document.getElementById("round6Results").innerHTML = `${currentTurn} is not out <br> <span id="win">${currentTurn} is the WINNER!!!!</span> <br> would you like to play again? <br> <a href="RRVersion1.html"><button>Try Again</button></a>`;  
    }
        if(numCurrentTurn === 6){
        numCurrentTurn = 1; 
        }else{
            numCurrentTurn += 1;
        }
}
