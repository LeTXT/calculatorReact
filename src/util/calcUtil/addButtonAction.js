import {calcResult} from "./calcResult"
import { addNumber } from "./addNumber"

export const actionBtn = (btn, setInputState, inputState) => {
    
    let inputValue = inputState
    let calculatedObj = {value: false}
    
    // Caso btn ser número
    if(/^\d+(\.\d+)?$/.test(btn)) { 
        addNumber(btn, inputValue, setInputState, calculatedObj)
    } 
    // Caso btn for symbol
    if(/^[^\w\s]+$/.test(btn)) { // Symbol
        return setInputState((prevInput) => String(prevInput) + btn)
    }
    if(btn === "RESULT" && /\d/.test(inputValue) && /[^\w\s]/.test(inputValue)) {
        calcResult(inputValue, setInputState, calculatedObj)
    }
    if(btn === "DEL") {
        console.log(inputValue);
        try {
            const delLast = String(inputValue).slice(0, -1)
            setInputState(delLast)
        } catch (error) {
            console.error(error);
            setInputState("Error")
        }
        
    }
    if(btn === "AC") {
        setInputState("")
    }
}