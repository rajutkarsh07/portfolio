import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ data }) => {
  return (
    <div className="card">
      <div>
        <a className="main-heading">{data.heading}</a>
        <a className="main-heading-2">{data.type}</a>
        <a className="main-heading-3">{data.duration}</a>
      </div>
      <div className="lowHeading">
        {data.lowHeading.map((subheading) => (
          <div className="subheading-content">
            <a className="subheading-heading"> {subheading.heading}</a>
            <a className="subheading-content-2">{subheading.content}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
