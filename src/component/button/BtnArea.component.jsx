import React from "react";
import { Button } from "./Button.component";

export const BtnArea = ({ handleOnButtonClick }) => {
  const btnArg = [
    {
      cls: "btn-ac",
      lable: "AC",
    },
    {
      cls: "btn-c",
      lable: "C",
    },
    {
      cls: "btn-perc",
      lable: "%",
    },
    {
      cls: "btn-/",
      lable: "/",
    },
    {
      cls: "btn-7",
      lable: "7",
    },
    {
      cls: "btn-8",
      lable: "8",
    },
    {
      cls: "btn-9",
      lable: "9",
    },
    {
      cls: "btn-mul",
      lable: "*",
    },
    {
      cls: "btn-4",
      lable: "4",
    },
    {
      cls: "btn-5",
      lable: "5",
    },

    {
      cls: "btn-6",
      lable: "6",
    },
    {
      cls: "btn-sub",
      lable: "-",
    },
    {
      cls: "btn-1",
      lable: "1",
    },
    {
      cls: "btn-2",
      lable: "2",
    },
    {
      cls: "btn-3",
      lable: "3",
    },
    {
      cls: "btn-add",
      lable: "+",
    },
    {
      cls: "btn-0",
      lable: "0",
    },
    {
      cls: "btn-dot",
      lable: ".",
    },
    {
      cls: "btn-equals",
      lable: "=",
    },
  ];

  return (
    <>
      {" "}
      {btnArg.map((element, indx) => (
        // <Button key={element.lable} cls={element.cls} lable={element.lable} />
        <Button
          key={element.lable}
          {...element}
          handleOnButtonClick={handleOnButtonClick}
        />
      ))}
      {/* <Button cls="btn-ac" lable="AC" />
      <Button cls="btn-c" lable="C" />
      <Button cls="btn-perc" lable="%" /> */}
      {/* <div className="btn btn-mod btn-divide">/</div>
      <div className="btn btn-mod btn-7">7</div>
      <div className="btn btn-mod btn-8">8</div>
      <div className="btn btn-mod btn-9">9</div>
      <div className="btn btn-mod btn-mul">*</div>
      <div className="btn btn-mod btn-4">4</div>
      <div className="btn btn-mod btn-5">5</div>
      <div className="btn btn-mod btn-6">6</div>
      <div className="btn btn-mod btn-sub">-</div>
      <div className="btn btn-mod btn-1">1</div>
      <div className="btn btn-mod btn-2">2</div>
      <div className="btn btn-mod btn-3">3</div>
      <div className="btn btn-mod btn-add">+</div>
      <div className="btn btn-mod btn-0">0</div>
      <div className="btn btn-mod btn-dot">.</div>
      <div className="btn btn-mod btn-equals">=</div> */}
    </>
  );
};
