import { getLeaderFromStorage } from "./field"
import { changeActiveWindow } from "./main";

export const renderLeaderBoard = (mode) => {
    const leadersList = getLeaderFromStorage(mode)
    const select = document.querySelector('.board__select').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === mode) select[i].selected = true;
    }
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
export const boardInit = () => {
    const selectElem = document.querySelector(".board__select")
    selectElem.addEventListener("change", (e) => renderLeaderBoard(e.target.value))
    document.querySelector(".board__back").addEventListener("click", () => changeActiveWindow("board", "main"))
}
