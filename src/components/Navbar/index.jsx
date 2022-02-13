import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './styles.css';
import logo from '../../assets/logo.svg';

//BEM -> BLOCK ELEMENT MODIFIER
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
       <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is Oman Company</a></p>
        <p><a href="#possiblity">Open ai</a></p>
        <p><a href="#features">CaseStudies</a></p>
        <p><a href="#blog">Library</a></p>
      </>
    )
  };

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar_links'> 
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='gpt3_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3_navbar-menu'>
        {toggleMenu ?  (
          <RiCloseLine 
            size={27}
            color="#fff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line 
            size={27}
            color="#fff"
            onClick={() => setToggleMenu(true)}        
          />
        )}
        {toggleMenu && (
          <div className="gpt3_navbar-menu_container scale-up-center">
              <div className='gpt3_navbar-menu_container-links'>
                <Menu />
                <div className='gpt3_navbar-menu-container-links-sign'>
                  <p>Sign up</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;