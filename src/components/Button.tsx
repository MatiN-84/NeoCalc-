import React, { useEffect, useState } from "react";
import styles from "./Button.module.css"
function Button({ button, text, setText ,theme }) {
  const {type , character,style}= button
  const [lastIsOperator, setlastIsOperator] = useState(false);

  useEffect(() => {
    setlastIsOperator(
      text[text.length - 1] === "+" ||
        text[text.length - 1] === "-" ||
        text[text.length - 1] === "/" ||
        text[text.length - 1] === "*" ||
        text[text.length - 1] === "."?true:false
    );
  }, [text]);
  const handleButtonClick = () => {
    if (type === "action") {
      doAction();
    } else if (type === "operator") {
      if (text !== "" && !lastIsOperator) {
        setText(text + character);
      }
    } else {
      setText(text + character);
    }
    // console.log(lastIsOperator);
    // console.log(text === "");
    // console.log("mishe ? " + (text !== "" && !lastIsOperator));
  };

  const doAction = () => {
    if (type === "action") {
      switch (character) {
        case "RESET":
          setText("");
          break;
        case "DEL":
          setText(text.slice(0, -1));
          break;
        case "=":
          if(lastIsOperator){
            return;
          }
          try {
            setText(eval(text));
          } catch {
            setText("ERROR");
          }
          break;
        default:
          break;
      }
    }
};
  return <button className={`${styles.button} ${styles[style + theme]} ${lastIsOperator && character==="="?styles["unActive"]:""}`} onClick={() => handleButtonClick()} >{character}</button>;

}
export default Button;
