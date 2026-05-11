//Function to flip coins and display the results
const flipCoin = () => {
    //random generater to flip coin
    // 0 = head
    // 1 = Tails
    // let playerChoice;
    // let coin;
    // if(coin === 0){
    //     playerChoice = 'Heads';
    // }
    // else if(coin === 1){
    //     playerChoice = 'Tails';
    // }
    // else{
    //     playerChoice = 'IDK';
    // }

    let word;
    const coin = Math.floor(Math.random() * 2); 

     if(coin === 0){
         word = "Heads";
     }
     else if(coin === 1){
         word = "Tails";
     }

document.getElementById("Coin").innerHTML = `Coin Results: ${word}`;
}
