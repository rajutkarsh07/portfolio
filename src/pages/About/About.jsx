import React, { useState } from "react";
import "./About.scss";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import utkarshimg from "../../assets/utkarshimg.png";
import Clang from "../../assets/Clang.png";
import reactIcon from "../../assets/react.png";
import cpp from "../../assets/cpp.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  const [rotate, setRotate] = useState({
    c: false,
    cpp: false,
    react: false,
  });

  const toggleRotate = (key) => {
    setRotate((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <Navbar />
      <div className="contents">
        <h1 className="gradient__text">About</h1>
        <div className="main-info">
          <p>
            Hi, I'm Utkarsh Raj a fullstack web developer , UI/UX Designer and
            freelancer with a passion for crafting beautiful, responsive
            websites that make a difference for my clients. With years of
            experience and a love for all things tech, I'm always looking for
            new and innovative ways to improve my skills and create cutting-edge
            designs. <br />
            As a web developer, I understand that the key to a successful
            website is not just how it looks, but also how it functions. That's
            why I specialize in creating sites that are not only visually
            stunning but also intuitive and easy to use. I believe that a
            website should be a tool that helps businesses achieve their goals
            and connect with their audience, and I work tirelessly to make that
            a reality for every client I work with.
          </p>
          <Tilt>
            <img src={utkarshimg} alt="Utkarsh Raj" />
          </Tilt>
        </div>

        <div className="tech">
          <p>
            Here are a few technologies and Design tools I've been working with
            recently:
          </p>

          <div className="tech-items">
            <motion.div
              className="item"
              animate={{ rotate: rotate.c ? 360 : 0 }}
              onClick={() => {
                toggleRotate("c");
              }}
            >
              <img src={Clang} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.cpp ? 360 : 0 }}
              onClick={() => {
                toggleRotate("cpp");
              }}
            >
              <img src={cpp} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.react ? 360 : 0 }}
              onClick={() => {
                toggleRotate("react");
              }}
            >
              <img src={reactIcon} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
