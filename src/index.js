import './styles/entry.scss';
import { initGame } from "./js/main"
import { gameFieldInit } from "./js/field"
import { boardInit } from "./js/leadersBoard"
import { rulesInit } from './js/rules';

initGame()
gameFieldInit()
boardInit()
rulesInit()