function com_Random(){
    let com = ["batu", "kertas", "gunting"];
    let random = Math.floor(Math.random() * com.length);
    return com[random]

}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        return "draw";
    }else if(playerSelection === "batu" && computerSelection === "kertas"){
        com_score++;
        return "lose";
    }else if(playerSelection === "batu" && computerSelection === "gunting"){
        player_score++;
        return "win";
    }else if(playerSelection === "kertas" && computerSelection === "gunting"){
        com_score++;
        return "lose";
    }else if(playerSelection === "kertas" && computerSelection === "batu"){
        player_score++;
        return "win";
    }else if(playerSelection === "gunting" && computerSelection === "batu"){
        com_score++;
        return "lose";
    }else if(playerSelection === "gunting" && computerSelection === "kertas"){
        player_score++;
        return "win";
    }
}

function game(playerChoice){
    let comChoice = com_Random();
    condition = playRound(playerChoice, comChoice);
    console.log(condition);
    games_play ++;
    if(games_play < 5){
        game_start();
        console.log(com_score);
        console.log(player_score);

    }else{
        batuImg.removeEventListener("click", clickBatu);
        kertasImg.removeEventListener("click", clickKertas);
        guntingImg.removeEventListener("click", clickGunting);    
        console.log("Game OVer");
    }


}

function clickBatu(){
    playerSelect = "batu";
    game(playerSelect);
}

function clickKertas(){
    playerSelect = "kertas";
    game(playerSelect);
}

function clickGunting(){
    playerSelect = "gunting";
    game(playerSelect);
}


function game_start(){
    batuImg.addEventListener("click", clickBatu);
    kertasImg.addEventListener("click", clickKertas);
    guntingImg.addEventListener("click", clickGunting);
}

let player_score = 0;
let com_score = 0;
let games_play = 0;


const batuImg = document.getElementById("batu");
const kertasImg = document.getElementById("kertas");
const guntingImg = document.getElementById("gunting");




game_start();
