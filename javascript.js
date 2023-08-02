function getComputerChoice(){
    let com = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * com.length);
    return com[random]

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("You Draw")
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            console.log("You Lose");
            com_score += 1;
        }
        else if(computerSelection === "scissors"){
            console.log("You Win");
            player_score += 1;
            
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            console.log("You Lose");
            com_score += 1;
        }
        else if(computerSelection === "rock"){
            console.log("You Win");
            player_score += 1;
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("You Lose");
            com_score += 1;
        }
        else if(computerSelection === "paper"){
            console.log("You Win");
            player_score += 1;
        }
    }

}

function game(){
    let playerSelection = prompt("");
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
    playerSelection = prompt("");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerSelection = prompt("");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerSelection = prompt("");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);


    playerSelection = prompt("");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);


    if(player_score > com_score){
        console.log("You Win The Game");
    }else if(player_score < com_score){
        console.log("You Lose The Game");
    }else if(player_score === com_score){
        console.log("The game is Draw");
    }
}

let player_score = 0;
let com_score = 0;
  

game();

console.log(player_score)
console.log(com_score)