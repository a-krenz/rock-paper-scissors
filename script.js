function getComputerChoice() {
    const rnd = Math.floor(Math.random() * 3)

    switch (rnd) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "rock";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice:").toLowerCase();
}

console.log(getHumanChoice());