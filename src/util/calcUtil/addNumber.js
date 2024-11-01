export const addNumber = (btn, inputValue, setInputState, setInputTop, bool, setBool) => {
    
    if(!bool) {
        return setInputState((prevInput) => String(prevInput) + btn)
    } 
    if(bool) {
        // secundInput.value = input.value
        setInputTop(inputValue)
        setBool(false)
        return setInputState(btn)
    }

    return setInputState((prevInput) => String(prevInput) + btn)
}