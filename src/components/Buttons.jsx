import React from "react";
import style from "../styles/components/Buttons.module.css"

function Buttons({setInput}) {
    const btn = ["DEL", "AC", "%", "÷", 7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "RESULT"]

    const addNumber = (newNumber) => {
        setInput((prevInput) => String(prevInput) + newNumber)
    }
    return (
        <div className={style.buttonsContainer}>
            {btn.map((btn, index) => (
                <button key={index} onClick={() => addNumber(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    )
}

export default Buttons;