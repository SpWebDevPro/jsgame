function resetGameStatus(){
    activePlayer = 0;
    currentRound = 1;
    console.log('gameOverElement.firstElementChild.innerHTML before:', gameOverElement.firstElementChild.innerHTML);
    gameOverElement.firstElementChild.innerHTML = '<h2>You won, <span id="winner-game">PLAYER NAME</span>!</h2>';
    console.log('gameOverElement.firstElementChild.innerHTML after' , gameOverElement.firstElementChild.innerHTML);
    gameOverElement.style.display = "none";

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameFieldElement = gameFieldElements[gameBoardIndex];
            gameFieldElement.textContent = '';
            gameFieldElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame(){
    for (player of players){
        if (player.name === ''){
            alert('please set players name');
            return;
        }
    }
    resetGameStatus();
    activePlayerElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1;
    }else {
        activePlayer = 0;
    }
    activePlayerElement.textContent = players[activePlayer].name;
}

function selectGameField(event){
    //check wicth field is selected
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;
    //add symbol
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    //keep track of all selected field
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    //check if there is a winner
    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    }
    //increment the round number
    currentRound++;
    //change turn of player
    switchPlayer();
}

function checkForGameOver() {
    //checking the rows equality
    for (let i = 0; i<3; i++){
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }
    //checking the columns equality
    for (let i = 0; i<3; i++){
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }
    //checking equality for diagonal
    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]){
        return gameData[0][0];
    }
    if (gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]){
        return gameData[0][2];
    }
    if (currentRound === 9){
        return -1;
    }
    return 0;
}

function endGame(winnerId){
    console.log('gameOverElement', gameOverElement);
    gameOverElement.style.display = "block";
    if (winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        console.log(gameOverElement.firstElementChild.firstElementChild.firstElementChild);
        gameOverElement.firstElementChild.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = "GAME OVER";
    }
    
}