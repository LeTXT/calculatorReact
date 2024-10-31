import React from "react";
import styles from "../styles/components/Screen.module.css";

function Screen({inputState}) {
    return (
        <div className={styles.screenContainer}>
            <input className={styles.firstInput}/>
            <input className={styles.secondInput} value={inputState} readOnly />
        </div>
    )
}

export default Screen;