import React, { useState } from "react";
import Clover from './../assets/bitmap-clover (3).png';
import Dots from './../assets/dots.svg';
import { Link } from "react-router-dom";
import './main.scss';

const Main = () => {
  const [viewProj, setViewProj] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [credit, setCredit] = useState(false);
  const projects = ['North America Word Chain', 'Western GPA Calculator', 'Movie Tracker', 'Portfolio Old.Ver', 'See All Projects'];

  const handleViewProjToggle = () => {
    setViewProj((prev) => !prev);
    setContact(false);
    setAbout(false);
    setCredit(false);
  };

  const handleContactToggle = () => {
    setContact((prev) => !prev);
    setViewProj(false);
    setAbout(false);
    setCredit(false);
  };

  const handleAboutToggle = () => {
    setAbout((prev) => !prev);
    setViewProj(false);
    setContact(false);
    setCredit(false);
  };

  const handleCreditToggle = () => {
    setCredit((prev) => !prev);
    setViewProj(false);
    setContact(false);
    setAbout(false);
  };

  return (
    <section className="App-header">
      <div className="hr"><hr /></div>
      <div className="left">
        <div className="background">
          <img src={Clover} alt="Logo" />
        </div>
        <p>[ Nina P. ]</p>
        <ul className="menus">
          <li className="about" key="about" onClick={handleAboutToggle}>
            {about ? "\u25a0" : "01. About"}
          </li>
          <li className="project" key="projects" onClick={handleViewProjToggle}>
            {viewProj ? "\u25a0" : "02. Projects"}
          </li>
          <li className="contact" key="contact" onClick={handleContactToggle}>
            {contact ? "\u25a0" : "03. Contact"}
          </li>
          <li className="credit" key="credit" onClick={handleCreditToggle}>
            {credit ? "\u25a0" : "04. Credit"}
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="menu_click">
          {(about || viewProj || contact || credit) ? (
            <h3>
              {about && "01. About"}
              {viewProj && "02. Projects"}
              {contact && "03. Contact"}
              {credit && "04. Credit"}
            </h3>
          ) : (
            <img src={Dots} className="dots" alt="dots" />
          )}
        </div>
        <div className={`right_container ${about || viewProj || contact || credit ? 'active-element' : ''}`}>
          {about && (
            <p className="short-about element">
              Currently studying Computer Science at University of Western Ontario, I discovered my passion for software engineering during a group project and have been exploring various fields within the discipline ever since.
              I'm also a graphic design enthusiast, particularly drawn to Swiss design.
              <Link to='/aboutme'>Learn more {'\u2192'}</Link>
            </p>
          )}
          {viewProj && (
            <ul className="projects element">
              {projects.map((item, index) => (
                index === projects.length - 1 ? (
                  <li className="all" key={index}><Link to='/projects'>{item}  {'\u2192'}</Link></li>
                ) : (
                  <li key={index}>{item}</li>
                )
              ))}
            </ul>
          )}
          {contact && (
            <ul className="contact element">
              <li><a href="mailto:ninapong777@gmail.com">Email {'\u2197'}</a></li>
              <li><a href="https://www.linkedin.com/in/user/" target="_blank" rel="noopener noreferrer">LinkedIn {'\u2197'}</a></li>
              <li><a href="https://github.com/user" target="_blank" rel="noopener noreferrer">Github {'\u2197'}</a></li>
            </ul>
          )}
          {credit && (
            <ul className="credit element">
              <li className="clover_credit" style={{ fontWeight: "800", fontSize: "1.3rem" }}>Clover
                <li style={{ fontSize: "1rem", color: "#8e9aef" }}>
                  Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" target="_blank" style={{ textDecoration: "underline", color: "#8e9aef" }}>Icons 8</a> from <a href="https://icons8.com/illustrations" target="_blank" style={{ textDecoration: "underline", color: "#8e9aef" }}>Ouch!</a>
                </li>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="hr1"><hr /></div>
      <div className="footer"> Nina Pong {'\u00a9'} 2024. All rights reserved.</div>
    </section>
  );
};

export default Main;
