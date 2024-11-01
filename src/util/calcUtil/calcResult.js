const percentCalc = (inputValue) => {
    
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

export const calcResult = (inputValue, setInputState, setBool, setInputTop) => {
    try {
        // Caso seja porcentagem
        if(/%/.test(inputValue)) {
        percentCalc(inputValue)
        }
        // // caso seja uma conta de porcentagem
        // if(/%/.test(inputValue)) {
        //     // Procura o primeiro símbolo
        //     const searchSymbol = inputValue.search(/[^a-zA-Z0-9]/)
        //     // Obtem o número até esse primeiro símbolo
        //     const searchResult = inputValue.substring(0, searchSymbol)
        //     // Obtem o símbolo
        //     const getSymbol = inputValue.match(/[^a-zA-Z0-9]/)[0]
        //     // Obtem o valor da porcentagem
        //     const searchPercent = inputValue.substring(searchSymbol + 1, inputValue.length -1)

        //     let percentValue = searchResult * searchPercent / 100

        //     // adiciona conta no input.value
        //     inputValue = searchResult + getSymbol + percentValue

            const sanitizedInput = inputValue.replace(/÷/g, "/").replace(/×/g, "*")

            const result = new Function(`return ${sanitizedInput}`)
            
            const toStringNumber = result.toString()

            const finalResult = toStringNumber.includes(".") ? result.toFixed(1) : result
            
            setBool(true)
            setInputTop(inputValue)

            return setInputState(finalResult)
    } catch (error) {
        console.error(error);
        setInputState("Error")
    }
}