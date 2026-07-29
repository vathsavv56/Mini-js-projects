const playerSelect = document.getElementById("values");
const playerRes = document.getElementById("player");
const systemRes = document.getElementById("system");
const resultRes = document.getElementById("resultRes");

const getRandomSel = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const moves = {
    1: "rock",
    2: "paper",
    3: "scissor"
};

function playGame() {
    const playerSel = playerSelect.value;
    const systemSelection = moves[getRandomSel(1, 3)];

    playerRes.textContent = `Player: ${playerSel}`;
    systemRes.textContent = `System: ${systemSelection}`;

    if (playerSel === systemSelection) {
        resultRes.textContent = "🤝 It's a Draw!";
    } 
    else if (
        (playerSel === "rock" && systemSelection === "scissor") ||
        (playerSel === "paper" && systemSelection === "rock") ||
        (playerSel === "scissor" && systemSelection === "paper")
    ) {
        resultRes.textContent = `You Win!`;
    } 
    else {
        resultRes.textContent = "System Wins!";
    }
}