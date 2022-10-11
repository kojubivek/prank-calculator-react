import "./App.css";
import { BtnArea } from "./component/button/BtnArea.component";
import Display from "./component/display/Dispaly.component";
import { useState } from "react";
import sound from "./assests/aa.wav";
const operator = ["+", "-", "*", "/", "%"];
const App = () => {
  const [strToDisplay, setstrToDisplay] = useState("");

  let [lastOperator, setLastOperator] = useState("");
  const [isprank, setIsprank] = useState(false);

  const randomNumber = () => {
    const num = Math.round(Math.random() * 10);

    return num > 5 ? 0 : num;
  };
  const handleOnButtonClick = (val) => {
    isprank && setIsprank(false);
    console.log(isprank);
    if (val === "AC") {
      return setstrToDisplay("");
    }
    if (val === "C") {
      return setstrToDisplay(strToDisplay.slice(0, -1));
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      let temStr = strToDisplay;
      if (operator.includes(lastChar)) {
        temStr = strToDisplay.slice(0, -1);
      }

      const extra = randomNumber();
      if (extra) {
        setIsprank(true);
        console.log(isprank);
        const audio = new Audio(sound);
        audio.play();
      }

      const total = eval(temStr) + extra;

      return setstrToDisplay(total.toString());
    }

    if (operator.includes(val)) {
      if (!strToDisplay) {
        return;
      }
      let temStr = strToDisplay;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operator.includes(lastChar)) {
        temStr = strToDisplay.slice(0, -1);
      }
      setstrToDisplay(temStr + val);
      setLastOperator(val);
      return;
    }
    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const numberAfterLastOperator = strToDisplay.slice(operatorIndex);
        if (numberAfterLastOperator.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    setstrToDisplay(strToDisplay + val);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="circle1"></div>
        <div className="calculator">
          <Display strToDisplay={strToDisplay} isprank={isprank} />
          <BtnArea handleOnButtonClick={handleOnButtonClick} />
        </div>
        <div className="circle"></div>
      </div>{" "}
    </div>
  );
};

export default App;
