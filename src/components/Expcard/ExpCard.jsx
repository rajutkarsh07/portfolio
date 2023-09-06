import React from "react";
import "./ExpCard.scss";

const ExpCard = () => {
  return (
    <div className="expCard">
      <div className="img">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQG2LjL0bUoxvA/company-logo_200_200/0/1519949103603?e=1695859200&v=beta&t=OIbsvPo-A2cuDtNUyvfZN1ACX935cqhDIumtWHZg2X0"
          alt=""
        />
      </div>
      <div className="contents">
        <h2>
          Indian Institute of Information Technology, Design and Manufacturing,
          Jabalpur
        </h2>
        <h3>Computer Science and Engineering (B.Tech)</h3>
        <p>Dec 2021 - june 2025</p>
      </div>
      <div></div>
    </div>
  );
};

export default ExpCard;
