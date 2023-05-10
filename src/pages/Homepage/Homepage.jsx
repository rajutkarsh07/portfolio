import React from "react";
import "./Homepage.scss";
import utkarsh from "../../assets/utkarsh.png";
import { Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MovingText from "../../components/MovingText/MovingText";

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
        <img src={utkarsh} alt="Utkarsh Raj" className="image" />

        <p>My name is </p>
        <div className="name">
          <h1 className="gradient__text">Utkarsh Raj</h1>
          <h3>I build things for the web.</h3>
        </div>
        <p className="details">
          I’m a Full Stack developer specializing in building (and occasionally
          designing) exceptional websites.
        </p>

        <Link to="/" className="cta-btn">
          Hire Me
        </Link>
      </div>

      <MovingText text="Utkarsh Raj" />
      <Footer />
    </motion.div>
  );
};

export default Homepage;
