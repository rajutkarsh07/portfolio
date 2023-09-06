import React from "react";
import "./MajorProjectCard.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import tempimg from "../../assets/tempimage.png";

const MajorProjectCard = ({ classNa, item }) => {
  return (
    <div className={`majorprojectcard ${classNa}`}>
      <div className="contents">
        <p>Featured Project</p>
        <h2 className="gradient__text">{item.name}</h2>
        <div className="info">
          <p>{item.projDescription}</p>
        </div>
        <div className="techstack">
          {item.techstackUsed.map((inneritem) => (
            <span>{inneritem}</span>
          ))}
        </div>
        <div className="links">
          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <AiOutlineGithub />
          </a>
          <a
            href={item.hostedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="image">
        <img src={item.imageLink} alt="" />
      </div>
    </div>
  );
};

export default MajorProjectCard;
