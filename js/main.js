import {Error} from './error.js'
import * as utilities from './utils.js'

const form = document.querySelector('form')
export const inputWeight = document.querySelector('#peso')
export const inputHeight = document.querySelector('#altura')

inputHeight.oninput = () => Error.close()
inputWeight.oninput = () => Error.close()
form.onsubmit = e => {
    e.preventDefault()

    const weight = Number(inputWeight.value)
    const height = (Number(inputHeight.value)) / 100

    const weightOrHeightIsNotANumber = utilities.notANumber(weight) || utilities.notANumber(height)

    if (weightOrHeightIsNotANumber) {
        Error.open()
        return;
    } 

    Error.close()
    
    const result = utilities.calculateIMC(weight, height)

    utilities.displayResultMessage(result)

    utilities.clearText()
}