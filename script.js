function getComputerChoice() {
    const rnd = Math.floor(Math.random() * 3)

    switch (rnd) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Rock";
    }
}

function playRound(humanChoice, computerChoice) {
    const results = document.querySelector("#results");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return "human";
    } else if (
        humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"
    ) {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        return "computer";
    } else if (humanChoice === computerChoice) {
        results.textContent = "Tie! No one scores.";
        return "tie";
    } else {
        results.textContent = "Your input could not be interpreted. Computer wins.";
        return "computer";
    }
}

const buttons = document.querySelectorAll("button");
const human = document.querySelector("#human");
const computer = document.querySelector("#computer");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const roundWinner = playRound(button.id, getComputerChoice());
        if (roundWinner == "computer") {
            computerScore++;
            computer.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner == "human") {
            humanScore++;
            human.textContent = `Your Score: ${humanScore}`;
        }
    });
});