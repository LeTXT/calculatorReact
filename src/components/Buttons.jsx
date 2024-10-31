import React from "react";
import style from "../styles/components/Buttons.module.css"

import { calc } from "../util/calcUtil/calcNumberSymbol.js"

function Buttons({setInputState, inputState}) {
    const btn = ["DEL", "AC", "%", "÷", 7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "RESULT"]

    return (
        <div className={style.buttonsContainer}>
            {btn.map((btn, index) => (
                <button key={index} onClick={() => calc(btn, setInputState, inputState)}>
                    {btn}
                </button>
            ))}
        </div>
    )
}

export default Buttons;