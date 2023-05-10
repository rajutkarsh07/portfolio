import React from "react";
import "./Experience.scss";
import data from "./data";
import { Navbar } from "../../components";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  // console.log(data);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects"
    >
      <Navbar />

      <h1 className="gradient__text heading-experience">Experience</h1>
      <div className="major-projects">
        <div className="other-projects-card">
          <div className="rectangle"></div>
          {data.map((dataPart, i) => (
            <div
              className="Part-data"
              style={{
                padding: "10px",
                paddingLeft: `${i % 2 == 0 ? "500px" : "0px"}`,
                position: "relative",
              }}
            >
              {console.log(i % 2 == 0)}
              <ExperienceCard data={dataPart} />
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
