function getComputerChoice(){
    let answers = ["rock","paper","scissor","rock","paper","scissor","rock","paper","scissor"];
    var index = Math.floor(Math.random() * answers.length);
    return answers[index]
}

function getPlayerChoice() {
    let choise = prompt("Please enter your choise", "Rock, Paper, Scissor");
    if (choise != null ) {
        var playerSelection = choise.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        document.getElementById("result").innerHTML = result 
        return result

    }  
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        answer = "You Lose! Paper beats Rock"; 
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        answer = "You Win! Rock beats Scissor"; 
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        answer = "You Lose! Scissor beats Paper"; 
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        answer = "You Win! Paper beats Rock"; 
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        answer = "You Lose! Rock beats Scissor"; 
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        answer = "You Win! Scissor beats Paper"; 
    }
    else {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection) 
    }
    
    return answer
}

let computer = 0;
let player = 0;
let i = 0;
let winner = null;

function game() {

    let result = getPlayerChoice()
    if (result == "You Lose! Paper beats Rock" || result == "You Lose! Scissor beats Paper" || result == "You Lose! Rock beats Scissor"  ) {
        computer++
        i++
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player
        
    }
    else {
        player++
        i++
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player

    }

    if (i==5) {
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player
            if (computer > player) {
                winner = "I won as allways!!"
            }
            else {
                winner = "You fuck!!"
            }
        setTimeout(() => alert(winner));
        window.location.reload()
        return
    }
}
