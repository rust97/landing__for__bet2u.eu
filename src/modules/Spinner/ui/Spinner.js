import React from "react";
import "./Spinner.scss";
import bg from "../../../../public/assets/img/pole.jpg";

export default function Spinner() {
  return (
    <div className="spinner_wrap " style={{ background: `url(${bg})` }}>
      <div className="banter-loader">
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
      </div>
    </div>
  );
}
