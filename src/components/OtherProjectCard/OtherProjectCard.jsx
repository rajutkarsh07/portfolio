import React from "react";
import "./OtherProjectCard.scss";
import { AiOutlineFolder, AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const OtherProjectCard = () => {
  return (
    <motion.div
      className="otherprojects"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      drag
      dragConstraints={{ left: -100, right: 100 }}
    >
      <AiOutlineFolder className="gradient__text icons" />

      <div className="description">
        <h3>Google News Clone</h3>
        <p>
          Social media platform exclusively designed for programmers, where
          users receive personalized problem recommendations based on their
          skill ratings and rankings.
        </p>
      </div>

      <div className="techstack">
        <span>react</span>
        <span>node</span>
        <span>firebase</span>
        <span>axios</span>
        <span>mongoDB</span>
      </div>

      <div className="links">
        <a href="https://github.com/rajutkarsh07" target="blank">
          <AiOutlineGithub className="icon" />
        </a>
        <a href="#">
          <BiLinkExternal className="icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default OtherProjectCard;
