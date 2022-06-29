const getPlayerName = () => {
    const name = localStorage.getItem('playerName') || "player"
    const inputName = document.querySelector("#name")
    console.log(name);
    inputName.value = name;
    inputName.focus()
}

export const initGame = () => {
    getPlayerName();
}