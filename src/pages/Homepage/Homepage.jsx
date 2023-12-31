import React from 'react';
import './Homepage.scss';
import utkarsh from '../../assets/utkarsh.png';
import { Navbar, Footer } from '../../components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../../data';
import MovingText from '../../components/MovingText/MovingText';
import Typewriter from 'typewriter-effect';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderutkarsh from '../../assets/placeholderutkarsh.png';
import '../../background.css';

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
          <LazyLoadImage
            src={data.imageHome}
            alt="Utkarsh Raj"
            className="image"
            effect="blur"
            height={250}
            width={250}
            placeholderSrc={placeholderutkarsh}
          />
        </div>

        <p>My name is </p>
        <div className="name">
          <h1 className="gradient__text">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`${data.name}`)
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(`${data.name}`)
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
          <h3>{data.contentBelowName}</h3>
        </div>
        <p className="details">
          I'm a
          <span className="gradient__text">
            <strong> {data.majorSkill1} </strong>
          </span>
          and{' '}
          <span className="gradient__text">
            <strong> {data.majorSkill2} </strong>
          </span>
          specialized in building exceptional websites.
        </p>

        <Link to="/Contact" className="cta-btn">
          Hire Me
        </Link>
      </div>

      <div className="moving">
        <MovingText text={data.name} />
      </div>
      <Footer />
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Homepage;
