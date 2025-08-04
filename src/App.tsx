import React, { useState } from "react";
import Button from "./components/Button";
import buttons from "./constants/buttons.js"
import SwitchButton from "./components/switchButton.js";
function App() {
  const [text, setText] = useState("")
  return (
    <div>
      <div>
        <span>calculator</span>
        <div>
          <span>theme</span>
          <SwitchButton />
        </div>
      </div>


      <div>
        {text}
      </div>

      <div >
        {buttons.map((button) => (
          <Button key={button.character} character={button.character} text={text} setText={setText} type={button.type} />
        ))}
      </div>
    </div>
  );
}

export default App;
