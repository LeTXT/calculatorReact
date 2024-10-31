import React, { useState } from "react"
import styles from "../styles/pages/Home.module.css"

import Screen from "../components/Screen";
import Buttons from "../components/Buttons";

function Home() {
    const [input, setInput] = useState(1);
    console.log(input);
    
    return (
        <div className={styles.homeContainer}>
            <Screen input={input}/>
            <Buttons setInput={setInput}/>
        </div>
    )
}

export default Home;