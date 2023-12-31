import * as React from 'react';
import './Experience.scss';
import data from '../../data';
import { Navbar, ExpCard, Footer } from '../../components';
import { motion, transform } from 'framer-motion';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExppartCard from '../../components/ExppartCard/ExppartCard';
import '../../background.css';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="experience"
    >
      <Navbar />

      <h1 className="gradient__text heading">Education</h1>
      <ExpCard />

      <h1 className="gradient__text heading">Experience</h1>

      <VerticalTimeline>
        {data.experience.map((item) => (
          <VerticalTimelineElement
            contentStyle={{ background: 'transparent' }}
            iconStyle={{
              background:
                'linear-gradient(89.98deg, #b16cea 0.02%, #fe5f68 51.52%, #ff9452 99.98%)',
            }}
            date={item.duration}
          >
            <ExppartCard item={item} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

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

export default Experience;
