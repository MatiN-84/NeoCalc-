import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import buttons from "./constants/buttons.ts"
import SwitchButton from "./components/switchButton.tsx";
import styles from "./App.module.css"

type TthemeType = "1"|"2"|"3" 
function App() {

  const [theme, setTheme] = useState<TthemeType>("1");
  const [text, setText] = useState<string>("")

  const mainColors = ["hsl(222, 26%, 31%)" , "hsl(0, 0%, 90%)" , "hsl(268, 75%, 9%)"]
  useEffect(()=> {
    
    document.body.style.backgroundColor = mainColors[theme-1];


  }, [theme])
  return (


          <div className={styles.calculator}>
      <div className={`${styles.header} ${styles["header"+theme]}`}>
        <span>NEOCalc</span>
        <div className={`${styles.switch} ${styles["switch"+theme]}`} >
          <span>Theme</span>
          <SwitchButton theme={theme} setTheme={setTheme} />
        </div>
      </div>


      <div className={`${styles.screen} ${styles["screen"+theme]}`}>
        {text}
      </div>

      <div className={`${styles.buttonContainer} ${styles["buttonContainer"+theme]}`}  >
        {buttons.map((button) => (
          <Button theme={theme} key={button.character} button={button} text={text} setText={setText}  />
        ))}
      </div>
    </div>


  );
}

export default App;
