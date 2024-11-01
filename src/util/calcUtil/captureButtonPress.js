import {calcResult} from "./calcResult"
import { addNumber } from "./addNumber"
import { addSymbol } from "./addSymbol"

export const captureButtonPress = (btn, setInputState, setInputTop, inputState, bool, setBool) => {
    
    let inputValue = inputState
    
    // Caso btn ser número
    if(/^\d+(\.\d+)?$/.test(btn)) { 
        addNumber(btn, inputValue, setInputState, setInputTop, bool, setBool)
    } 
    // Caso btn for symbol
    if(/^[^\w\s]+$/.test(btn)) { // Symbol
        addSymbol(btn, setInputState, inputValue, setBool)
    }
    if(btn === "RESULT" && /\d/.test(inputValue) && /[^\w\s]/.test(inputValue)) {
        calcResult(inputValue, setInputState, setBool, setInputTop)
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