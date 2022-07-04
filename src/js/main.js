import { gameInit } from "./field"

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

export const checkInput = (input) => {
    return input.value ? true : false
}

export const changeActiveWindow = (from, to) => {
    document.querySelector(`.${from}`).classList.remove("block_active")
    document.querySelector(`.${to}`).classList.add("block_active")
}

const getMode = () => {
    const radioElem = document.querySelector("#practice")
    return radioElem.checked ? "practice" : "timeAttack"
}

const handleGoBtn = () => {
    const inputName = document.querySelector("#name")
    if(checkInput(inputName)){
        setPlayerToLocalStorage(inputName.value)
        changeActiveWindow('main', 'field')
        gameInit(getMode())

    } else {
        inputName.focus();
    }
}

export const initGame = () => {
    setPlayerName();
    document.querySelector('.main__btn')?.addEventListener('click', handleGoBtn)
}