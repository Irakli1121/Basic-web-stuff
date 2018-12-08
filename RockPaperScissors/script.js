console.log("connected")


let moves = ["Rock", "Paper", "Scissors"];

let playerMoves = document.getElementById("playerMoves");
let displayPlayerMove = document.getElementById("displayPlayerMove");
let displayCpuMove = document.getElementById("displayCpuMove");



let playerScore = 0;
let playerScoreDisplay = document.getElementById("playerScore");
let cpuScore = 0;
let cpuScoreDisplay = document.getElementById("cpuScore");
let displayResultText = document.getElementById("displayResultText");

let winScore = document.getElementById("winScore").value;




playerMoves.addEventListener("click", (event) => {

    winScore = document.getElementById("winScore").value;

    let playerMove = event.target.id;

    if (moves.indexOf(playerMove) == -1){
        return;
    }

    if (winScore < 1){
        return;
    }

    console.log(winScore);
    console.log(playerScore);
    console.log(cpuScore);

    if (playerScore < winScore && cpuScore < winScore){
        gameLoop(playerMove);
    } else {
        
    }
    

});

document.getElementById("reset").addEventListener('click', reset);


function reset(){
    playerScore = 0;
    cpuScore = 0;
    displayResultText.innerHTML = "";
    displayPlayerMove.innerHTML = "";
    displayCpuMove.innerHTML = "";
    playerScoreDisplay.innerHTML = 0;
    cpuScoreDisplay.innerHTML = 0;

    if (!displayResultText.classList.contains("empty")){
        displayResultText.classList.add("empty");
    }
    
}

function gameLoop(playerMove){

    if (displayResultText.classList.contains("empty")){
        displayResultText.classList.remove("empty");
    }

    displayPlayerMove.innerHTML = `<h1> You selected ${playerMove}`;

    let cpuMove = Math.round(Math.random()*2);

    
    displayCpuMove.innerHTML = `<h1>CPU selected ${moves[cpuMove]}`;

    switch (playerMove){
        case "Rock":
            if (moves[cpuMove] === "Scissors"){
                displayResultText.innerHTML = "You have won the round";
                playerScore++;
            } else if (moves[cpuMove] === "Rock") {
                displayResultText.innerHTML = "Draw";
            } else {
                cpuScore++;
                displayResultText.innerHTML = "CPU have won the round";
            }
            break;
        case "Paper":
            if (moves[cpuMove] === "Rock"){
                playerScore++;
                displayResultText.innerHTML = "You have won the round";
            } else if (moves[cpuMove] === "Paper") {
                displayResultText.innerHTML = "Draw";
            } else {
                cpuScore++;
                displayResultText.innerHTML = "CPU have won the round";
            }
            break;
        case "Scissors":
            if (moves[cpuMove] === "Paper"){
                playerScore++;
                displayResultText.innerHTML = "You have won the round";
            } else if (moves[cpuMove] === "Scissors") {
                displayResultText.innerHTML = "Draw";
            } else {
                cpuScore++;
                displayResultText.innerHTML = "CPU have won the round";
            }
            break;
    }

    playerScoreDisplay.innerHTML = playerScore;
    cpuScoreDisplay.innerHTML = cpuScore;


    if (playerScore == winScore || cpuScore == winScore){
        let winner = "CPU";
        if (playerScore == Math.max(playerScore,winScore)){
            winner = "Player";
        }
        displayResultText.innerHTML = `${winner} has won the game`;
    }
}