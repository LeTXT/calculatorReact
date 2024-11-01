import React, { useState } from "react";
import style from "../styles/components/Buttons.module.css"

import { captureButtonPress } from "../util/calcUtil/captureButtonPress.js"

function Buttons({setInputState, inputState, setInputTop}) {
    const [bool, setBool] = useState(false)
    const btn = ["DEL", "AC", "%", "÷", 7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "RESULT"]

    return (
        <div className={style.buttonsContainer}>
            {btn.map((btn, index) => (
                <button key={index} onClick={() => captureButtonPress(btn, setInputState, setInputTop, inputState, bool, setBool)}>
                    {btn}
                </button>
            ))}
        </div>
    )
}

export default Buttons;