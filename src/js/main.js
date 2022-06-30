export const getPlayerFromLocalStorage = () => {
   return localStorage.getItem('playerName') || "player"
}

const setPlayerToLocalStorage = (value) => {
    localStorage.setItem('playerName', value)
}

const setPlayerName = () => {
    const name = getPlayerFromLocalStorage()
    const inputName = document.querySelector("#name")
    inputName.value = name;
    inputName.focus()
}

const checkInputName = (input) => {
    return input.value ? true : false
}

export const changeActiveWindow = (from, to) => {
    document.querySelector(`.${from}`).classList.remove("block_active")
    document.querySelector(`.${to}`).classList.add("block_active")
}

const handleGoBtn = () => {
    const inputName = document.querySelector("#name")
    if(checkInputName(inputName)){
        setPlayerToLocalStorage(inputName.value)
        changeActiveWindow('main', 'field')
    } else {
        inputName.focus();
    }
}

export const initGame = () => {
    setPlayerName();
    document.querySelector('.main__btn').addEventListener('click', handleGoBtn)
}