import React from "react";
import "./OtherProjectCard.scss";
import { AiOutlineFolder, AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const OtherProjectCard = ({ item }) => {
  return (
    <motion.div
      className="otherprojects"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      drag
      dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
    >
      <AiOutlineFolder className="gradient__text icons" />

      <div className="description">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      <div className="techstack">
        {item.techstackUsed.map((inneritem) => (
          <span>{inneritem}</span>
        ))}
      </div>

      <div className="links">
        <a href={item.githubLink} target="_blank">
          <AiOutlineGithub className="icon" />
        </a>
        <a href={item.hostedLink} target="_blank">
          <BiLinkExternal className="icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default OtherProjectCard;
