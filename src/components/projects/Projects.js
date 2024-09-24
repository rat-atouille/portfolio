import React, { useState } from 'react';
import './Projects.scss';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'wordchain', title: "Word Chain", content: 'Content for A' },
    { id: 'movie', title:"Movie Tracker", content: 'Content for B' },
    { id: 'portfolio', title: "Portfolio",content: 'Content for C' },
    { id: 'gpa', title: "GPA CALCULATOR", content: 'Content for D' }
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
