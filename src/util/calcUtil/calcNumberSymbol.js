export const calc = (btn, setInputState, inputState) => {
    
    let inputValue = inputState
    
    // Caso btn ser número
    if(/^\d+(\.\d+)?$/.test(btn)) { 
        return setInputState((prevInput) => String(prevInput) + btn)
    } 
    // Caso btn for symbol
    if(/^[^\w\s]+$/.test(btn)) { // Symbol
        return setInputState((prevInput) => String(prevInput) + btn)
    }
    if(btn === "RESULT") {
        const result = eval(inputValue)
        
        return setInputState(result)
    }
}