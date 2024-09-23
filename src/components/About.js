import React from "react";
import './about.scss'

const About = () => {
  return (
    <div className="d">
      <section className="aboutSec">
        <h1>About</h1>
        <p>
          Hi, I'm Nina. 
          I am a computer science student at University of Western Ontario.
          I am passionate about designing and making softwares. 
        </p>
      </section>
      <section>
        <h1>Skills</h1>
        <ul>
          <li>ReactJS</li>
          <li>JavaScript</li>
          <li>SASS/CSS</li>
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
          <li>C++</li>
          <li>SQL</li>
        </ul>
      </section>
    </div>
  )
}
export default About;