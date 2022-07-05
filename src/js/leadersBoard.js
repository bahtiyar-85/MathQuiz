import { getLeaderFromStorage } from "./field"

const setLeaderBoard = (mode) => {
    const leadersList = getLeaderFromStorage(mode)
    const listElem = document.querySelector(".board__list")
    const ul = document.createElement('ul')
    ul.classList.add('board__list')
    leadersList.forEach(item => {
        const li = document.createElement('li')
        li.classList.add("board__items")
        ul.append(li)
        const playerElem = document.createElement('span')
        playerElem.textContent = item.nickname
        const scoreElem = document.createElement('span')
        scoreElem.textContent = item.score
        li.append(playerElem)
        li.append(scoreElem)
    })
    listElem.replaceWith(ul)
}
export const boardInit = (mode) => {
    setLeaderBoard(mode)
    
    const selectElem = document.querySelector(".board__select")
    selectElem.addEventListener("change", (e) => setLeaderBoard(e.target.value))
}