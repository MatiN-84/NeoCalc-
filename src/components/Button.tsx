import React, { useEffect, useState } from "react";

function Button({ character, text, setText, type }) {
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
  return <button onClick={() => handleButtonClick()}>{character}</button>;
}

export default Button;
