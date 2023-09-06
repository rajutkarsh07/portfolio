import React from "react";
import data from "../../data";
import "./ExpCard.scss";

const ExpCard = () => {
  return (
    <div className="expCard">
      <div className="img">
        <img src={data.instituteLogo} alt="" />
      </div>
      <div className="contents">
        <h2>{data.instituteName}</h2>
        <h3>{data.branch}</h3>
        <p>
          {data.started} - {data.end}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ExpCard;
