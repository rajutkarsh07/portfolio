import React, { useState, useEffect } from "react";
import "./Experience.scss";
import data from "./data";
import { Navbar } from "../../components";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  // console.log(data);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
          <div className="rectangle">
            <div
              className="circle"
              style={{
                display: "flex",
                margin: "0",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "fixed",
                // paddingRight: "10vh",
                marginTop: "1vh",
              }}
            ></div>
          </div>

          {data.map((dataPart, i) => (
            <div
              className="Part-data"
              style={{
                padding: "10px",
                paddingLeft: `${i % 2 == 0 ? "500px" : "0px"}`,
                position: "relative",
              }}
            >
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
