import React, { useState } from 'react';
import './Projects.scss';
import { Link } from 'react-router-dom';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'wordchain', title: "Word Chain", content: 'Content for A' },
    { id: 'movie', title:"Movie Tracker", content: 'Content for B' },
    { id: 'gpa', title: "GPA CALCULATOR", content: 'Content for C' }
  ];

  const handleSectionClick = (id) => {
    setActiveSection(id === activeSection ? null : id); // Toggle between selected and deselected
  };

  return (
    <div className="container">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => handleSectionClick(section.id)}
        >
          <h1 className="section-title">{section.title}</h1>
          {activeSection === section.id && (
            <div className="section-content">
              {section.content}
              <div><Link to={`${section.id}`}>Details {'\u2192'}</Link></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
