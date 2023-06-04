import React from "react";
import "./Homepage.scss";
import utkarsh from "../../assets/utkarsh.png";
import { Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MovingText from "../../components/MovingText/MovingText";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homepage"
    >
      <Navbar />

      <div className="contents">
        <div>
          <img src={utkarsh} alt="Utkarsh Raj" className="image" />
        </div>

        <p>My name is </p>
        <div className="name">
          <h1 className="gradient__text">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Utkarsh Raj")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Utkarsh Raj")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
          <h3>I build things for the web.</h3>
        </div>
        <p className="details">
          I'm a
          <span className="gradient__text">
            <strong> Full Stack Web Developer </strong>
          </span>
          and{" "}
          <span className="gradient__text">
            <strong> UI/UX designer </strong>
          </span>
          specializing in building exceptional websites.
        </p>

        <Link to="/Contact" className="cta-btn">
          Hire Me
        </Link>
      </div>

      <MovingText text="Utkarsh Raj" />
      <Footer />
    </motion.div>
  );
};

export default Homepage;
