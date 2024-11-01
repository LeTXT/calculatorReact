export const calcResult = (inputValue, setInputState, calculatedObj) => {
    try {
        // caso seja uma conta de porcentagem
        if(/\%/.test(inputValue)) {
            // Procura o primeiro símbolo
            const searchSymbol = inputValue.search(/[^a-zA-Z0-9]/)
            // Obtem o número até esse primeiro símbolo
            const searchResult = inputValue.substring(0, searchSymbol)
            // Obtem o símbolo
            const getSymbol = inputValue.match(/[^a-zA-Z0-9]/)[0]
            // Obtem o valor da porcentagem
            const searchPercent = inputValue.substring(searchSymbol + 1, inputValue.length -1)

            let percentValue = searchResult * searchPercent / 100

            // adiciona conta no input.value
            inputValue = searchResult + getSymbol + percentValue
        }
            const result = eval(inputValue.replace(/÷/g, "/").replace(/×/g, "*"))

            const toStringNumber = result.toString()

            if(toStringNumber.includes('.')) {
                return setInputState(result.toFixed(1))
            }
            
            calculatedObj.value = true
            console.log(calculatedObj.value);
            
            return setInputState(result)
            
        
    } catch (error) {
        console.error(error);
        setInputState("Error")
    }
    // const result = eval(inputValue)
        
    // return setInputState(result)
}