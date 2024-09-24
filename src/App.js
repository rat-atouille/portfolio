import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/projects/Projects';
import Details from './components/Details';
import Loader from './components/Loading';

const App = () => {
  const [projectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  const location = useLocation();

  // Show loader whenever the location (route) changes
  useEffect(() => {
    setLoading(true); // Show loader at the beginning of route change
    const timeout = setTimeout(() => setLoading(false), 5000); // Simulate loading delay

    return () => clearTimeout(timeout); // Clean up on component unmount
  }, [location]); // Location dependency triggers useEffect on route change

  return (
    <div className="App">
      {loading && <Loader />} {/* Show loader conditionally */}
      {!loading && (  // Only show the content if loading is false
        <div className="containers">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/projects" element={<Projects projectName={projectName} setProjectName={setProjectName} />}>
              <Route path={`${projectName}`} element={<Details />} />
            </Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
