import React, { useState } from "react";
import styles from "./SwitchButton.module.css";
function SwitchButton() {
    const [theme, setTheme] = useState("1");
  return (
    <div className={`${styles.switchButton}`}>

      <div>1 2 3</div>
      <div className={styles.button}>
        <div className={`${styles.circle} ${styles['circle' + theme]}`}></div>
        <div className={`${styles.section1} ${styles.section}`} onClick={() => setTheme("1")}></div>
        <div className={`${styles.section2} ${styles.section}`} onClick={() => setTheme("2")}></div>
        <div className={`${styles.section3} ${styles.section}`} onClick={() => setTheme("3")}></div>
      </div>
    </div>
  );
}

export default SwitchButton;
