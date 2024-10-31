import React, { useState } from "react"
import styles from "../styles/pages/Home.module.css"

import Screen from "../components/Screen";
import Buttons from "../components/Buttons";

function Home() {
    const [inputState, setInputState] = useState("");
    // console.log(inputState);
    
    return (
        <div className={styles.homeContainer}>
            <div className={styles.calculatorContainer}>
                <Screen inputState={inputState}/>
                <Buttons setInputState={setInputState} inputState={inputState} />
            </div>
        </div>
    )
}

export default Home;