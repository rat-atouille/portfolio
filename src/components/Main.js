import React, {useState} from "react";
import Clover from './../assets/bitmap-clover.png';
import Menu from './../assets/menu.svg'
import { Link } from "react-router-dom";
import './main.scss'
const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="App-header">
      <div className='left'>
        <div className='background'><img src={Clover} alt="Logo" /></div>
        <p>[ Nina P. ]</p>
        {openMenu && (
          <ul className='menus'>
            <li className='about' key='about'>
              <Link to='/aboutme'>About</Link>
            </li>
            <li className='project' key='projects'>
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
          <img src={Menu} className='' alt="menu" />
        )}
      </div>
  </section>
  )
}

export default Main;