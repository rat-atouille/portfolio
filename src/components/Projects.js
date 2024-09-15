import React from "react";
import { Link } from 'react-router-dom';
import Clover from '../assets/bitmap-clover.png';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div>My Projects</div>
      <ul>
        <li className="cinephile">
            <img src={Clover}></img>
            <h1>Movie Tracker</h1>
            <ul className="tech-stack">
              <li>React</li>
              <li>Node</li>  
              <li>Express</li>
              <li>MySQL</li>
            </ul>     
            <ul className="link">
              <li>
                <a href="https://github.com/rat-atouille/movieTracker" target="_blank">
                  <FaGithub />
                </a>
              </li>
            </ul>  
        </li>

        <li className="gpa">
              <img src={Clover}></img>
              <h1>UWO GPA calculator</h1>
              <ul className="tech-stack">
                <li>React</li>
              </ul>     
              <ul className="link">
                <li>
                  <a href="" target="_blank">
                  </a>
                </li>
              </ul>  
        </li>

        <li className="word-chain">
              <img src={Clover}></img>
              <h1>North America Word Chain</h1>
              <ul className="tech-stack">
                <li>Java</li>
                <li>Java Swing</li>
                <li>JUnit</li>
              </ul>     
              <ul className="link">
                <li>
                  <a href="https://github.com/rat-atouille/North-America-Word-Chain" target="_blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>  
        </li>

        <li className="old-portfolio">
              <img src={Clover}></img>
              <h1>Portfolio Old Ver.</h1>
              <ul className="tech-stack">
                <li>React</li>
              </ul>     
              <ul className="link">
                <li>
                  <a href="https://github.com/rat-atouille/oldPortfolio" target="_blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>  
        </li>
      </ul>   
    </>
  )
}
export default Projects;