import React from "react";
import "./Projects.scss";
import { MajorProjectCard, OtherProjectCard } from "../../components";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects"
    >
      <Navbar />

      <div className="major-projects">
        <h1 className="gradient__text">Major Projects</h1>
        <div className="other-projects-card">
          <MajorProjectCard classNa={"majorprojectcard-normal"} />
          <MajorProjectCard classNa={"majorprojectcard-reverse"} />
          <MajorProjectCard classNa={"majorprojectcard-normal"} />
        </div>
      </div>

      <div className="other-projects">
        <h1 className="gradient__text">Other Projects</h1>
        <div className="other-projects-card">
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
          <Tilt>
            <OtherProjectCard />
          </Tilt>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Projects;
