import React from "react";
import './Projects.scss';
import { FaGithub } from "react-icons/fa";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Clover from "../assets/bitmap-clover.png";

const Projects = () => {
  // Access scroll progress
  const { scrollYProgress } = useViewportScroll();

  // Convert vertical scroll to horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * 2]); // Adjust for 300vw width

  return (
    <section className="proj">
      <h1>Projects</h1>
      <motion.div
        className="projects"
        style={{ x }} // Apply horizontal scroll based on vertical scroll
        initial={{ x: 0 }}
        animate={{ x }}
      >
        <ul className='descriptions'>
          <li className="cinephile">
            <img src={Clover} alt="Project Clover" />
            <div>
              <h2>Movie Tracker</h2>
              <ul className="tech-stack">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
              </ul>
              <ul className="link">
                <li>
                  <a href="https://github.com/rat-atouille/movieTracker" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="gpa">
            <img src={Clover} alt="Project Clover" />
            <div>
              <h2>UWO GPA Calculator</h2>
              <ul className="tech-stack">
                <li>React</li>
              </ul>
              <ul className="link">
                <li>
                  <a href="" target="_blank" rel="noreferrer">
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="word-chain">
            <img src={Clover} alt="Project Clover" />
            <div>
              <h2>North America Word Chain</h2>
              <ul className="tech-stack">
                <li>Java</li>
                <li>Java Swing</li>
                <li>JUnit</li>
              </ul>
              <ul className="link">
                <li>
                  <a href="https://github.com/rat-atouille/North-America-Word-Chain" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="old-portfolio">
            <img src={Clover} alt="Project Clover" />
            <div>
              <h2>Portfolio Old Ver.</h2>
              <ul className="tech-stack">
                <li>React</li>
              </ul>
              <ul className="link">
                <li>
                  <a href="https://github.com/rat-atouille/oldPortfolio" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
