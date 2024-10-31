export const actionBtn = (btn, setInputState, inputState) => {
    
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