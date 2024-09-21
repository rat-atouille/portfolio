import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Main from './components/Main';
import Details from './components/Details';

const App = () => {
  const [projectName, setProjectName] = useState('');

  // loading
  useEffect(()=> {

  }, [])
  
  return (
    <div className="App">
      <div className='containers'>
        <Routes>
          <Route path='/' element={<Main />} />
            <Route path='/aboutme' element={<About />} />
            <Route path='/projects' element={<Projects projectName={projectName} setProjectName={setProjectName} />}>
            <Route path={`${projectName}`} element = {<Details />}> </Route> 
            </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
