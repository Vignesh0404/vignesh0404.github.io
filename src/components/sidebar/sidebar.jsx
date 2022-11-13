import React, { useState } from 'react';
import "./sidebar.css";
import Logo from '../../assets/logo-1.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const SideBar = () => {
  const [toggle, showMenu] = useState(false);

  const [activeLink, setActiveLink] = useState('home');


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <Router>
      <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt= "" />
        
      </a>

      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className= {activeLink === 'home' ? "active" : "nav__link"} onClick={() => onUpdateActiveLink('home')}>
                <i className="icon-home"></i>
              </a>
            </li>

          

            <li className="nav__item">
              <a href="#about" className= {activeLink === 'about' ? "active" : "nav__link"} onClick={() => onUpdateActiveLink('about')}>
              <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className= {activeLink === 'skills' ? "active" : "nav__link"} onClick={() => onUpdateActiveLink('skills')}>
                <i class="fa-solid fa-code"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#timeline" className= {activeLink === 'timeline' ? "active" : "nav__link"} onClick={() => onUpdateActiveLink('timeline')}>
              <i className="icon-briefcase"></i>
              
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className= {activeLink === 'work' ? "active" : "nav__link"} onClick={() => onUpdateActiveLink('work')}>
              <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className= {activeLink === 'contact' ? "active" : "nav__link"} onClick={() => onUpdateActiveLink('contact')}>
                <i class="fa-regular fa-message"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="div nav__footer">
        <span className="copyright"></span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=> showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </Router>
    </>
  )
}

export default SideBar