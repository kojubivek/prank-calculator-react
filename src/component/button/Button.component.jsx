import React from "react";

export const Button = ({ cls, lable, handleOnButtonClick }) => {
  return (
    <div
      className={"btn btn-mod " + cls}
      onClick={() => handleOnButtonClick(lable)}
    >
      {lable}
    </div>
  );
};
