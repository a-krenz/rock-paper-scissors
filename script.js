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

function getHumanChoice() {
    return prompt("Enter your choice:");
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.}`);
        return "human";
    } else if (
        humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    } else if (humanChoice === computerChoice) {
        console.log("Tie! No one scores.");
        return "tie";
    } else {
        console.log("Your input could not be interpreted. Computer wins.");
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundWinner;

    for (let i = 0; i < 5; i++) {
        roundWinner = playRound(getHumanChoice(), getComputerChoice());

        if (roundWinner === "human") {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win with a score of ${humanScore}!`);
    } else {
        console.log(`You lose to the computer. Your score is ${humanScore}.`);
    }
}