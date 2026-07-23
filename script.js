function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function getComputerChoice(){
    let computerChoiceInt = getRandomInt(3);
    let computerChoice;

    if(computerChoiceInt === 0){
        computerChoice = "rock"
    }
    else if (computerChoiceInt === 1){
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoiceRaw = prompt("Choose a shape:rock, paper, scissors")
    let humanChoice = humanChoiceRaw.toLowerCase().trim()

    return humanChoice
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let winner;

    function playRound(computerChoice, humanChoice){
    let result;
    if ((computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        result = "You lose! " + computerChoice + " beats " + humanChoice;
    }
    else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        result = "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        result = "It's a tie"
    }

    return result
    }

    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(computerChoice)
        console.log(humanChoice)
        console.log(playRound(computerChoice, humanChoice))
    }

    if(humanScore > computerScore) {
        winner = "You"
    }
    else if(computerScore > humanScore) {
        winner = "Computer"
    }
    else {
        winner = "Nobody"
    }
    return ("Your score: " + humanScore + " Computer score: " + computerScore + ". " + winner + " wins the game" )
}




console.log(playGame())
