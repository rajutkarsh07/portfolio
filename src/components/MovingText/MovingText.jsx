import React from "react";
import "./movingtext.scss";

export default function MovingText({ text }) {
  return (
    <div className="cs-moving_text_wrap cs-bold cs-primary_font">
      <div className="cs-moving_text_in">
        <div className="cs-moving_text">{text}</div>
        <div className="cs-moving_text">{text}</div>
      </div>
    </div>
  );
}
