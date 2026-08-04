document.addEventListener("DOMContentLoaded", () => {
    const rock = document.getElementById("rockBtn");
    const paper = document.getElementById("paperBtn");
    const scissors = document.getElementById("scissorsBtn");
    const results = document.getElementById("results");
    const roundList = document.getElementById("roundList");
    const winnerAnnouncement = document.getElementById("winnerAnnouncement");

    let humanScore = 0;
    let computerScore = 0;
    let winner = null;

    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    function getComputerChoice(){
        let computerChoiceInt = getRandomInt(3);
        let computerChoice;

        if(computerChoiceInt === 0){
            computerChoice = "rock";
        }
        else if (computerChoiceInt === 1){
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }

        return computerChoice;
    }

    function playRound(humanChoice){
        if (winner) return; // game already over, ignore clicks

        let computerChoice = getComputerChoice();
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
            result = "It's a tie";
        }

        results.textContent = result;

        const li = document.createElement("li");
        li.textContent = result + " (Score — You: " + humanScore + " Computer: " + computerScore + ")";
        roundList.appendChild(li);

        if (humanScore === 5) {
            winner = "You";
            winnerAnnouncement.textContent = "You win the game! Final score — You: " + humanScore + " Computer: " + computerScore;
        }
        else if (computerScore === 5) {
            winner = "Computer";
            winnerAnnouncement.textContent = "Computer wins the game! Final score — You: " + humanScore + " Computer: " + computerScore;
        }

        if (winner) {
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }

        return result;
    }

    rock.addEventListener("click", () => playRound("rock"));
    paper.addEventListener("click", () => playRound("paper"));
    scissors.addEventListener("click", () => playRound("scissors"));
});