import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';

const App = () => {
  return (
    <div className="App">
      <div className='containers'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aboutme' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
