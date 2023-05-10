import React from "react";
import "./Contact.scss";
import { Navbar, Footer } from "../../components";
import phone from "../../assets/phone.svg";
import mail from "../../assets/email.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      <Navbar />
      <div className="contents">
        <div className="content-left">
          <div className="text">
            <h1 className="gradient__text">Get in touch</h1>
            <p>
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get bak to you in the next 24 hours.
            </p>
          </div>
          <div className="text">
            <span>
              <img src={mail} alt="" />
              <p>utkarshraj1306@gmail.com</p>
              <div></div>
            </span>
            <span>
              <img src={phone} alt="" />
              <p>9693501629</p>
              <div></div>
            </span>
          </div>
        </div>
        <form className="content-right">
          <div className="input-items">
            <label>Your Name</label>
            <input placeholder="Utkarsh Raj" type="text" />
          </div>
          <div className="input-items">
            <label>Your Email</label>
            <input placeholder="utkarsh@gmail.com" type="email" />
          </div>
          <div className="input-items">
            <label>Your approximate budget (USD $)</label>
            <input placeholder="$300" type="number" />
          </div>
          <div className="input-items">
            <label>Tell more what you are looking for?</label>
            <input
              placeholder="I want a website for my business "
              type="text"
            />
          </div>
          <button
            to="/"
            className="cta-btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Contact Me
          </button>
        </form>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
