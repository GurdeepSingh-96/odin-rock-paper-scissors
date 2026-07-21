let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();



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
    let humanChoice = prompt("Enter an integer: 1.rock, 2.paper, 3.scissors")

    if(parseInt(humanChoice) === 1){
        humanChoice = "rock"
    }
    else if (parseInt(humanChoice) === 2){
        humanChoice = "paper"
    }
    else {
        humanChoice = "scissors"
    }

    return humanChoice
}

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

console.log(computerChoice)
console.log(humanChoice)
console.log(playRound(computerChoice,humanChoice))
console.log(humanScore)
console.log(computerScore)