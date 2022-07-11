
import { renderLeaderBoard } from "./leadersBoard"

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

export const getMode = () => {
    const radioElem = document.querySelector("#practice")
    return radioElem.checked ? "practice" : "timeAttack"
}

const handleGoBtn = () => {
    const inputName = document.querySelector("#name")
    if(checkInput(inputName)){
        setPlayerToLocalStorage(inputName.value)
        changeActiveWindow('main', 'field')
    } else {
        inputName.focus();
    }
}

const handleBoardClick = () => {
    renderLeaderBoard(getMode())
    changeActiveWindow('main', 'board')
    document.querySelector(".board__back").focus()
}

export const initGame = () => {
    setPlayerName();
    document.querySelector('.main__btn')?.addEventListener('click', handleGoBtn)
    document.querySelector("#leaderboard").addEventListener('click', handleBoardClick)
    document.querySelector(".main__btn-rules").addEventListener('click', () => {
        changeActiveWindow('main', 'rules')
        document.querySelector(".rules__back").focus()
    })
}
