import React, { useState, useEffect } from "react";
import "./About.scss";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import utkarshimg from "../../assets/utkarshimg.png";
import data from "../../data";
import Clang from "../../assets/Clang.png";
import reactIcon from "../../assets/react.png";
import cpp from "../../assets/cpp.png";
import Tilt from "react-parallax-tilt";
import cf from "./../../assets/codeforces.jpg";
import lc from "./../../assets/leetcode.jpg";
import gh from "./../../assets/github.jpg";
import CFmap from "../../components/Heatmap/CFmap";

const About = () => {
  const [rotate, setRotate] = useState({
    c: false,
    cpp: false,
    react: false,
  });

  const [codeforces, setCodeforceUser] = useState({});
  const [leetcode, setLeetcode] = useState({});
  const [github, setGitHub] = useState({});

  useEffect(() => {
    fetch("https://codeforces.com/api/user.info?handles=utkarsh_raj_13")
      .then((response) => response.json())
      .then((json) => {
        let data = json.result[0];
        setCodeforceUser(data);

        // console.log(data.handle);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/utkarsh_raj_13")
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        setLeetcode(data);

        // console.log(data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/rajutkarsh07")
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        setGitHub(data);
        // console.log(data);
      })
      .catch((e) => console.error(e));
  }, []);

  // console.log(gitHub);

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
            Hi, I'm {data.name} from {data.instituteName}. A{" "}
            <span style={{ fontStyle: "italic" }}> {data.majorSkill1} </span> ,
            <span style={{ fontStyle: "italic" }}> {data.majorSkill2} </span>{" "}
            and {data.majorSkill3} {data.aboutYourself}
          </p>
          <Tilt>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <img src={data.imageAbout} alt={data.name} />
            </motion.div>
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

        <div className="codingprofile">
          <h2 className="gradient__text">Coding Profiles</h2>

          <div className="codeforces">
            <img src={cf} alt="codeforces" />
            <ul>
              <li>
                <a
                  href="https://codeforces.com/profile/utkarsh_raj_13"
                  target="_blank"
                  className="handle"
                >
                  {codeforces.handle}
                </a>
              </li>
              <li>
                <p>
                  rating : {codeforces.rating} ({codeforces.rank})
                </p>
              </li>
              <li>
                <p>
                  max rating : {codeforces.maxRating} ({codeforces.maxRank})
                </p>
              </li>
            </ul>
          </div>
          <div className="leetcode">
            <img src={lc} alt="leetcode" />
            <ul>
              <li>
                <a
                  href="https://leetcode.com/utkarsh_raj_13/"
                  target="_blank"
                  className="handle"
                >
                  {codeforces.handle}
                </a>
              </li>

              <li className="leetcode-data">{leetcode.totalSolved} Solved</li>

              {/* "totalSolved easySolved mediumSolved": 205, hardSolved*/}
              <li>
                <p>easy : {leetcode.easySolved}</p>
              </li>
              <li>
                <p>medium : {leetcode.mediumSolved}</p>
              </li>
              <li>
                <p>hard : {leetcode.hardSolved}</p>
              </li>
            </ul>
          </div>
          <div className="codeforces">
            <img src={gh} alt="codeforces" />
            <ul>
              <li>
                <a
                  href="https://github.com/rajutkarsh07"
                  target="_blank"
                  className="handle"
                >
                  {github.login}
                </a>
              </li>
              <li>
                <p>{github.public_repos} repository</p>
              </li>
              <li>
                <p>{github.followers} followers</p>
              </li>
              <li>
                <p>{github.following} following</p>
              </li>
            </ul>
          </div>
        </div>
        <CFmap />
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
