import React from "react";

export default function BtnNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="btnNext"
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    ></div>
  );
}
