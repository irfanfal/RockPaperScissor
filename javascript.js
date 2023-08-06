function com_Random(){
    let com = ["batu", "kertas", "gunting"];
    let random = Math.floor(Math.random() * com.length);
    return com[random]

}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        return "draw";
    }else if(playerSelection === "batu" && computerSelection === "kertas"){
        return "lose";
    }else if(playerSelection === "batu" && computerSelection === "gunting"){
        return "win";
    }else if(playerSelection === "kertas" && computerSelection === "gunting"){
        return "lose";
    }else if(playerSelection === "kertas" && computerSelection === "batu"){
        return "win";
    }else if(playerSelection === "gunting" && computerSelection === "batu"){
        return "lose";
    }else if(playerSelection === "gunting" && computerSelection === "kertas"){
        return "win";
    }
}

function game(playerChoice){
    let comChoice = com_Random();

    condition = playRound(playerChoice, comChoice);
    let count = 0;
    count += 1;
    console.log(condition);
    console.log(count);
}

const batuImg = document.getElementById("batu");
const kertasImg = document.getElementById("kertas");
const guntingImg = document.getElementById("gunting");

function clickBatu(){
    playerSelect = "batu";
    game(playerSelect);
    batuImg.removeEventListener("click", clickBatu);
    kertasImg.removeEventListener("click", clickKertas);
    guntingImg.removeEventListener("click", clickGunting);
}

function clickKertas(){
    playerSelect = "kertas";
    game(playerSelect);
    batuImg.removeEventListener("click", clickBatu);
    kertasImg.removeEventListener("click", clickKertas);
    guntingImg.removeEventListener("click", clickGunting);
}

function clickGunting(){
    playerSelect = "gunting";
    game(playerSelect);
    batuImg.removeEventListener("click", clickBatu);
    kertasImg.removeEventListener("click", clickKertas);
    guntingImg.removeEventListener("click", clickGunting);
}


batuImg.addEventListener("click", clickBatu);
kertasImg.addEventListener("click", clickKertas);
guntingImg.addEventListener("click", clickGunting);

