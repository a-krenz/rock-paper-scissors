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