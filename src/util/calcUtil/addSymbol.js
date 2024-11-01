const percent = (btn, setInputState, inputValue) => {
    if(!/%/.test(inputValue) && /[^\w\s]/.test(inputValue) && /\d$/.test(inputValue)) {
        setInputState((prevInput) => String(prevInput) + btn)
    }
    
}

const point = (btn, setInputState, inputValue) => {
    
    // verifica se já tem ponto
    if(/\./.test(inputValue)) {
        // verifica se tem simbolo, se o ultimo digito é um número e se tem apenas um ponto
        if(/[^\w\s.]/.test(inputValue) && /\d$/.test(inputValue) && (inputValue.match(/\./g) || []).length === 1) {
            return setInputState((prevInput) => String(prevInput) + btn)
        }
    } else {
        return setInputState((prevInput) => String(prevInput) + btn)
    }
}

export const addSymbol = (btn, setInputState, inputValue, setBool) => {
     // Verifica se existe numero no input
     if(!/\d/.test(inputValue)) {
        return
    }
    // Verifica se o botão apertado foi o "." ou "%"
    if(btn === "." || btn === "%") {
        if(btn === ".") {
            point(btn, setInputState, inputValue)
        }
        if( btn === "%") {
            percent(btn, setInputState, inputValue)
        }
        return
    }
    // Verifica se já tem um simbolo, e caso tenha substitui o simbolo
    if(/[^\w\s]/.test(inputValue.slice(-1)) && btn !== ".") {
        
        setInputState(inputValue.slice(0, -1))
        setInputState((prevInput) => String(prevInput) + btn)
        setBool(false)   
    }
    // Verifica se já existe simbolo, e caso não tenha adiciona
    if(!/[^\w\s.]/.test(inputValue)) {
        setInputState((prevInput) => String(prevInput) + btn)
        setBool(false) 
    }
    // return setInputState((prevInput) => String(prevInput) + btn)
}