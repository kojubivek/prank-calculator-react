import "./App.css";
import { BtnArea } from "./component/button/BtnArea.component";
import Display from "./component/display/Dispaly.component";
import { useState } from "react";
const operator = ["+", "-", "*", "/", "%"];
const App = () => {
  const [strToDisplay, setstrToDisplay] = useState("");

  let [lastOperator, setLastOperator] = useState("");
  const handleOnButtonClick = (val) => {
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

      return setstrToDisplay(eval(temStr).toString());
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
          <Display strToDisplay={strToDisplay} />
          <BtnArea handleOnButtonClick={handleOnButtonClick} />
        </div>
        <div className="circle"></div>
      </div>{" "}
    </div>
  );
};

export default App;
