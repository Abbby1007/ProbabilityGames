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
     document.getElementById("round2Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br> ${currentTurn} is out`;   
    }
    else{
        document.getElementById("round2Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br> ${currentTurn} is not out`; 
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
     document.getElementById("round3Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is out`;   
    }
    else{
        document.getElementById("round3Results").innerHTML = ` bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is not out`; 
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
     document.getElementById("round4Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is out`;   
    }
    else{
        document.getElementById("round4Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is not out`; 
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
     document.getElementById("round5Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is out`;   
    }
    else{
        document.getElementById("round5Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is not out`; 
    document.getElementById("round6Butt").style.display = 'block';  
    }
        if(currentTurn === 6){
            currentTurn = 1; 
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
document.getElementById("round6Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn}<br> Player is out <br> Computer is the WINNER!!!!`;    
     }
     else{
document.getElementById("round6Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn}<br> Computer is out <br> Player is the WINNER!!!!`;        
     }
     
    }
    else{
        document.getElementById("round6Results").innerHTML = `bullet: ${bullet} <br> Chamber: ${numCurrentTurn} <br>  ${currentTurn} is not out <br> ${currentTurn} is the WINNER!!!!`;  
    }
        if(numCurrentTurn === 6){
        numCurrentTurn = 1; 
        }else{
            numCurrentTurn += 1;
        }
}
