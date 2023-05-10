import React from "react";
import "./Projects.scss";
import { MajorProjectCard, OtherProjectCard } from "../../components";
import { Navbar, Footer } from "../../components";

const Projects = () => {
  return (
    <div className="projects">
      <Navbar />

      <div className="major-projects">
        <h1 className="gradient__text">Major Projects</h1>
        <div className="other-projects-card">
          <MajorProjectCard direction={"row-reverse"} />
          <MajorProjectCard direction={"row"} />
          <MajorProjectCard direction="row-reverse" />
        </div>
      </div>

      <div className="other-projects">
        <h1 className="gradient__text">Other Projects</h1>
        <div className="other-projects-card">
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
