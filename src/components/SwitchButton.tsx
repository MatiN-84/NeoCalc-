
import styles from "./SwitchButton.module.css";

interface ISwitchButtons{
  theme:string,
  setTheme:React.Dispatch<React.SetStateAction<string>>
}
function SwitchButton({theme , setTheme}:ISwitchButtons) {
    
  return (
    <div className={`${styles.switchButton} ${styles["switchButton"+theme]}`}>

      <div className={`${styles.numbers} ${styles["numbers"+theme]}`}>{"1   2   3"}</div>
      <div className={`${styles.button} ${styles["button"+theme]}`}>
        <div className={`${styles.circle} ${styles['circle' + theme]}`}></div>
        <div className={`${styles.section1} ${styles.section}`} onClick={() => setTheme("1")}></div>
        <div className={`${styles.section2} ${styles.section}`} onClick={() => setTheme("2")}></div>
        <div className={`${styles.section3} ${styles.section}`} onClick={() => setTheme("3")}></div>
      </div>
    </div>
  );
}

export default SwitchButton;
