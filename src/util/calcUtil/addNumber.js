export const addNumber = (btn, inputValue, setInputState, calculatedObj) => {
    console.log(calculatedObj.value);
    
    if(!calculatedObj.value) {
        return setInputState((prevInput) => String(prevInput) + btn)
    } 
    if(calculatedObj.value) {
        // secundInput.value = input.value
        calculatedObj.value = false
        return setInputState(btn)
    }

    return setInputState((prevInput) => String(prevInput) + btn)
}