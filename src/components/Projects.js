import React from "react";
import './Projects.scss'
import { Link } from 'react-router-dom';
import Clover from '../assets/bitmap-clover.png';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <ul className="projects">
        <li className="cinephile">
            <img src={Clover}></img>
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
                  <a href="https://github.com/rat-atouille/movieTracker" target="_blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>  
        </li>

        <li className="gpa">
          <img src={Clover}></img>
            <div>
              <h2>UWO GPA calculator</h2>
              <ul className="tech-stack">
                <li>React</li>
              </ul>     
              <ul className="link">
                <li>
                  <a href="" target="_blank">
                  </a>
                </li>
              </ul> 
          </div> 
        </li>

        <li className="word-chain">
              <img src={Clover}></img>
              <div>
              <h2>North America Word Chain</h2>
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
            </div>
        </li>

        <li className="old-portfolio">
              <img src={Clover}></img>
            <div>
              <h2>Portfolio Old Ver.</h2>
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
            </div>
        </li>
      </ul>   
    </>
  )
}
export default Projects;