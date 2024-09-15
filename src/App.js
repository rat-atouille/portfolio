import './App.css';
import React, { useState } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import ThreeScene from './components/ThreeScene';
import Experience from './components/Experience';
import Clover from './assets/bitmap-clover.png';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
      <div className="App">
        <main className="App-header">
          <div className='left'>
            <img src={Clover} alt="Logo" />
            <p>[ Nina P. ]</p>
            {openMenu && (
              <ul className='menus'>
                <li className='about' key='about'>
                  <Link to='/aboutme'>About me</Link>
                </li>
                <li className='projects' key='projects'>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li className='contact' key='contact'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            )}
          </div>
          <div className='right' onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <>...</>
            ) : (
              <>-</>
            )}
          </div>
        </main>
        
        <Routes>
          <Route path='/aboutme' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
