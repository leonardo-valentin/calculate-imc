import * as inputs from "./main.js"
import {Modal} from './modal.js'

function calculateIMC(w, h) {
    return (w / (h * h)).toFixed(2)
}

function notANumber(value) {
    return (isNaN(value) || value == "")
}

function displayResultMessage(result) {
    Modal.message.innerText = `O seu IMC é de ${result}`
    Modal.open()
}

function clearText() {
    inputs.inputWeight.value = ""
    inputs.inputHeight.value = ""
}

export {calculateIMC, notANumber, displayResultMessage, clearText}