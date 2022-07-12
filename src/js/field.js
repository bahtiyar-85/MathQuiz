import config from "/src/data/config.json" assert {type: "json"};
import { getPlayerFromLocalStorage } from "./main";
import { checkInput } from "./main";
import { changeActiveWindow } from "./main";
import { getMode } from "./main";
import { renderLeaderBoard } from "./leadersBoard";

const getTimeLimit = () => {
    const time = config.timeLimit.split(/\s|\.|\:/)
    return parseInt(time[0]) * 60 + parseInt(time[1])
}

const convert = (num) => {
    return num.toString().padStart(2, "0");
}

const renderTimer = (time) => {
    const seconds = time % 60
    const minutes = Math.floor(time/60) 
    document.querySelector('.field__timer-minutes').textContent = convert(minutes)
    document.querySelector('.field__timer-seconds').textContent = convert(seconds)
}


const getRandom = (max) => {
    return Math.round(Math.random() * (max - 1) + 1)
}

const action = (a, b, operator) => {
    if (operator === '+') return a + b
    if (operator === '-') return a - b
    if (operator === '/') return a / b
    return a * b
}
  
const getRandomDevision = (num) => {
    const array = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0) array.push(i)
    }
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
  
const generateExample = (max) => {
    const operators = ['+', '-', '*', '/']
    const operator = operators[Math.floor(Math.random() * 3)]
    const num1 = getRandom(max)
    const num2 = operator === '/' ? getRandomDevision(num1) : getRandom(max);
    const result = action(num1, num2, operator)

    return { num1, num2, operator, result }
}

const renderExample = (renderData) => {
    const { number1, number2, operator } = getFieldElements()
    number1.textContent = renderData.num1
    number2.textContent = renderData.num2
    operator.textContent = renderData.operator
   
}

const renderGameItems = (userScore, userLevel) => {
    const { score, result, level } = getFieldElements()

    result.textContent = "?"
    level.textContent = userLevel
    score.textContent = userScore
}

const getFieldElements = () => {
    const number1 = document.querySelector(".field__number1")
    const number2 = document.querySelector(".field__number2")
    const operator = document.querySelector(".field__operator")
    const result = document.querySelector(".field__result")
    const input = document.querySelector(".field__input-value")
    const user = document.querySelector(".field__user-value")
    const score = document.querySelector(".field__score-value")
    const level = document.querySelector(".field__level-value")
    const btnCheck = document.querySelector(".field__check")
    const btnStop = document.querySelector(".field__stop")
    
    return { number1, number2, operator, result, input, user, score, level, btnCheck, btnStop}
}

const renderResult = (e) => {
    if (e.target.value.length > 6) {
        e.target.value = e.target.value.slice(0,6); 
    }
    const {result} = getFieldElements()
    result.textContent = e.target.value
}

const renderPlayerName = (name) => {
    const { user } = getFieldElements()
    user.textContent = name
    
}

const modalToggle = () => {
    document.querySelector(".modal").classList.toggle("modal__show")
}

export const getLeaderFromStorage = (mode) => {
    return  JSON.parse(localStorage.getItem(mode)) || []
}

const setLeaderToStorage = ( name, score) => {
    const mode = getMode()
    const leaderList = JSON.parse(localStorage.getItem(mode)) || []
    const index = leaderList.findIndex(item => item.nickname === name)
    if(index === -1){
        const obj = {
            nickname: name,
            score: score
        }
        leaderList.push(obj)
    } else {
        score > leaderList[index].score ? leaderList[index].score = score : null  
    }
    leaderList.sort((a, b) => b.score - a.score)
    localStorage.setItem(mode, JSON.stringify(leaderList.slice(0, 10)))
}

const handleToLeaderListClick = () => {
    renderLeaderBoard(getMode())
    modalToggle()
    changeActiveWindow("field", "board")
    document.querySelector(".board__select").focus()
}

const addAnimation = (elem, animClass, string="") => {
    string ? elem.textContent = string : null
    elem.classList.add(animClass)
    setTimeout(() => elem.classList.remove(animClass), 1000)
}

export const gameFieldInit = () => {
  
    const handleCheck = () => {
        const animElem = document.querySelector(".field__animation-item")
        const scoreElem = document.querySelector(".field__score-value")
        const listElem = document.querySelector(".field__list")
        input.focus()
        if(checkInput(input) === false){
            return 0
        } 
        if(input.value == newData.result){
            correct++
            score++
            rampage++
            addAnimation(animElem, "animation-up" , "+1")           
        } else {
            incorrect++
            score--
            rampage = 0
            addAnimation(animElem, "animation-down" , "-1")
            addAnimation(scoreElem, "animation-shake")
        } 
        if(rampage == 5) {
            level++
            max += 5
            rampage = 0
        }
       
        addAnimation(listElem, "animation-left")
        setTimeout( () => {
            input.value = ""
            newData = generateExample(max)
            renderExample(newData)
            addAnimation(listElem, "animation-right")
            renderGameItems(score, level)
        }, 1000)
    }

    const renderModal = () => {
        document.querySelector(".modal__score-value").textContent = score
        document.querySelector(".modal__correct-value").textContent = correct
        document.querySelector(".modal__incorrect-value").textContent = incorrect
        document.querySelector(".modal__leader-board").focus()
    }

    const handleStopGame = (name, score) => {
        const mode = getMode()
        clearInterval(timer)
        setLeaderToStorage( name, score)
        modalToggle()
        renderModal()
    }
  
    
    const timerInit = () => {
        let time = getTimeLimit()
        timer = setInterval(function () {   
            if (time <= 0) {
                renderTimer(time)
                clearInterval(timer)
                handleStopGame( playerName, score)
            } else { 
                renderTimer(time)
            }
            --time
        }, 1000)
    }

    const timeInit = () => {
        let time = 1
        timer = setInterval(function () {   
            renderTimer(time)
            time++
            time === 3600 ? time = 0 : null
        }, 1000)
    }

    const setDefaultValues = () => {
        max = 10
        correct = 0
        incorrect = 0
        score = 0
        rampage = 0
        level = 1
        playerName = getPlayerFromLocalStorage()
        input.focus()
        input.value = ""
        newData = generateExample(max)
        renderPlayerName(playerName)
        renderExample(newData)

        renderGameItems(score, level)
        const mode = getMode()
        mode === "timeAttack" ? timerInit() : timeInit()
    }

    let max = 10
    let correct = 0
    let incorrect = 0
    let score = 0
    let rampage = 0
    let level = 1
    let timer
    const { input, btnCheck, btnStop } = getFieldElements(); 
    let playerName = getPlayerFromLocalStorage()
    let newData = generateExample(max)

    input?.addEventListener('input', (e) => renderResult(e))
    btnCheck?.addEventListener('click', handleCheck )
    btnStop.addEventListener('click', () => handleStopGame( playerName, score) )
    input?.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && e.target.value !== "") {
            handleCheck()
        }
    });
    document.querySelector(".modal__back").addEventListener("click", () => {
        modalToggle()
        changeActiveWindow("field", "main")
        document.querySelector(".main__input-name").focus()
    })
    document.querySelector(".main__btn").addEventListener('click', setDefaultValues)
    document.querySelector(".modal__play-again").addEventListener('click', function(){
        modalToggle()
        setDefaultValues()
    })
    document.querySelector(".modal__leader-board").addEventListener('click', handleToLeaderListClick)
} 