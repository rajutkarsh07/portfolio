import React from "react";
import "./MajorProjectCard.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import tempimg from "../../assets/tempimage.png";

const MajorProjectCard = ({ direction }) => {
  return (
    <div
      className="majorprojectcard"
      style={{ display: "flex", flexDirection: `${direction}` }}
    >
      <div className="contents">
        <p>Featured Project</p>
        <h2 className="gradient__text">CodeNova</h2>
        <div className="info">
          <p>
            Social media platform exclusively designed for programmers, where
            users receive personalized problem recommendations based on their
            skill ratings and rankings. Users can also engage in stimulating
            discussions like Stack Overflow, exchanging ideas and knowledge.
            This platform facilitates private user communication via chat,
            promoting collaborative learning and networking.
          </p>
        </div>
        <div className="techstack">
          <span>React JS</span>
          <span>Node JS</span>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>SCSS</span>
          <span>Axios</span>
          <span>React JS</span>
          <span>React JS</span>
        </div>
        <div className="links">
          <AiOutlineGithub className="icon" />
          <BiLinkExternal className="icon" />
        </div>
      </div>
      <div className="image">
        <img src={tempimg} alt="" />
      </div>
    </div>
  );
};

export default MajorProjectCard;
