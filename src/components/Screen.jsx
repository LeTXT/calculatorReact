import React from "react";
import styles from "../styles/components/Screen.module.css";

function Screen({input}) {
    return (
        <div className={styles.screenContainer}>
            <input className={styles.firstInput}/>
            <input className={styles.secondInput} value={input}/>
        </div>
    )
}

export default Screen;