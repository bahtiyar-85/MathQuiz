import { changeActiveWindow } from "./main";

export const rulesInit = () => {
    document.querySelector(".rules__back").addEventListener("click", () => {
        changeActiveWindow("rules", "main")
        document.querySelector(".main__input-name").focus()
    })
}