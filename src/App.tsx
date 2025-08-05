import React, { useState } from "react";
import Button from "./components/Button";
import buttons from "./constants/buttons.js"
import SwitchButton from "./components/switchButton.js";
import styles from "./App.module.css"
function App() {
  const [theme, setTheme] = useState("1");
  const [text, setText] = useState("")
  return (
    <div className={styles.body}>
          <div className={styles.calculator}>
      <div className={styles.header}>
        <span>calc</span>
        <div className={styles.switch} >
          <span>Theme</span>
          <SwitchButton theme={theme} setTheme={setTheme} />
        </div>
      </div>


      <div className={styles.screen}>
        {text}
      </div>

      <div className={styles.buttonContainer}  >
        {buttons.map((button) => (
          <Button theme={theme} key={button.character} button={button} text={text} setText={setText}  />
        ))}
      </div>
    </div>
    </div>

  );
}

export default App;
