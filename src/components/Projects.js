import React, { useRef, useEffect, useState } from "react";
import './Projects.scss';
import Clover from "../assets/bitmap-clover.png";
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {

  const targetRef = useRef();
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  const [projName, setProjName] = useState('MOVIE');

  const projects = [
    { 
      name: "North America Word Chain", 
      thumbnail: Clover, // Assuming you have an image or use placeholder 
      id: "wordchain" 
    },
    { 
      name: "Western GPA Calculator", 
      thumbnail: Clover, 
      id: "gpa" 
    },
    { 
      name: "Movie Tracker", 
      thumbnail: Clover, 
      id: "movie" 
    },
    { 
      name: "Portfolio Old Version", 
      thumbnail: Clover, 
      id: "portfolio" 
    }
  ];

  const handleMouseOver = () => {

  }
  
  const handleMouseLeave = () => {
    
  }


  // Function to navigate or display details of a project
  const toDetails = (projectName) => {
    setProjName(projectName);
    // Add your navigation logic here if needed
  };

  return (
    <section>
      <div className="projectSec" ref={targetRef}>
        <div className="container">
          <motion.div className="images" style={{ x }}>
            {projects.map((item, index) => (
              <div
                id={item.id}
                key={index}
                className={`project_item ${item.id}`}
                onClick={() => toDetails(item.name)}
              >
                <h4 className="project_item">{item.name}</h4>
                <img src={item.thumbnail} alt={item.id} />
              </div>
            ))}
          </motion.div>
          <div className="tracker">[  ]</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
