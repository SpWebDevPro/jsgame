//ouvrir la modal pour rentrer le nom du joueur
//set element .modal to display:block
//set element .backmodal to display:block
function onClickEditPlayer(event){
    /* let data = event.target.dataset;
    console.log(data); */
    editedPlayer = +event.target.dataset.playerid;
    modalSetPlayers.style.display = 'block';
    backModalSetPlayers.style.display = 'block';
}

function closePlayerModal(){
    modalSetPlayers.style.display = 'none';
    backModalSetPlayers.style.display = 'none';
    formPlayerConfigElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = "";
    inputPlayerNameElement.value="";
}

function setPlayConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    let enteredPlayerName = formData.get('player-name').trim();
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error')
        errorOutputElement.textContent = "you must enter valid player name";
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-'+editedPlayer+'');
    console.log(updatedPlayerDataElement.children[1]);
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerModal();
}   