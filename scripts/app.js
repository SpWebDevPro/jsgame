let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {
        name :'',
        symbol: 'X'
    },
    {
        name :'',
        symbol: 'O'
    }
];

let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
/* we will store 1 for 1st player and 2 for the 2nd player each time they select an field */

const playerOneElement = document.getElementById("edit-player-one");
const playerTwoElement = document.getElementById("edit-player-two");

const modalSetPlayers = document.getElementById("modal-set-players");
const backModalSetPlayers = document.getElementById("back-modal-set-players");
const btnCloseOverlay = document.getElementById("btn-close-overlay");

const formPlayerConfigElement = document.querySelector("form");
const inputPlayerNameElement = document.getElementById("playername");
const errorOutputElement = document.getElementById("config-error");

const startGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");

const gameFieldElements = document.querySelectorAll('#game li');//return an array
//console.log(gameFieldElements);
//console.log(gameFieldElements[0]);

const activePlayerElement = document.getElementById("active-player-name");
const gameOverElement = document.querySelector(".winner");


playerOneElement.addEventListener('click', onClickEditPlayer); 
playerTwoElement.addEventListener('click', onClickEditPlayer);
backModalSetPlayers.addEventListener('click', closePlayerModal);
btnCloseOverlay.addEventListener('click', closePlayerModal);
formPlayerConfigElement.addEventListener('submit', setPlayConfig);
startGameBtnElement.addEventListener('click', startNewGame);
for (gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField );
}