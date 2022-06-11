import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, SkypeIcon } from '../../utilities/icons.js';
import './Nav.css';
import './NavSideBar.css';
import './NavCompact.css';

const Nav = ({ navOrientation }) => {
  const [shrinkNav, setShrinkNav] = useState('');
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [compactNavOpen, setCompactNavOpen] = useState(false);
  //Const to determin current path
  const location = useLocation();

  const handleSideNavOpen = () => {
    //Toggle side navigation bar on click
    setSideNavOpen(prev => prev ? false : true);
    !sideNavOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    console.log('open');
  }

  const handleCompactNavOpen = () => {
    //Toggle compact navigation bar on click
    setCompactNavOpen(prev => prev ? false : true);
    !compactNavOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }

  const handleNavLanding = () => {
    //Close side/compact navigation bar if a nav link linked to landing page is clicked
    console.log(location.pathname);
    if (location.pathname === '/') {
      setSideNavOpen(false);
      setCompactNavOpen(false);
      document.body.style.overflow = 'auto'
    }
  }

  const scrollFunction = () => {
    //Add class to shrink normal nav bar if user scrolls 150px from top, remove class if user scrolls less than 150px from top
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setShrinkNav('shrink-nav');
    } else {
      setShrinkNav('');
    }
  }

  //Run scrollFunction whenever user scrolls
  window.onscroll = () => scrollFunction();

  if (navOrientation === 'horizontal') {
    //Sets and returns normal nav bar 
    if (compactNavOpen || sideNavOpen) {
      //If compact or side nav bar was previously open, close them
      setCompactNavOpen(false);
      setSideNavOpen(false);
    }
    return (
      <nav className='nav-container no-select' id={`${shrinkNav}`}>
        <ul>
          <li><a href='/#inicio' className='li-text'>Inicio</a></li>
          <li><a href='/#terapia' className='li-text'>Terapia</a></li>
          <li><a href='/#sobre' className='li-text'>Sobre Mí</a></li>
          <li><a href='/#tarifas' className='li-text'>Tarifas</a></li>
          <li className='li-img'><a href='/#inicio'><img src='images/logo.svg' alt='Psicóloga Cristina Conrique Logo'></img></a></li>
          <li><a href='/recursos' className='li-text'>Recursos</a></li>
          <li><a href='/faqs' className='li-text'>FAQs</a></li>
          <li><a href='/#contacto' className='li-text'>Contacto</a></li>
          <li>
            <div id='li-icon'>
              <a
                target='_blank'
                rel="noreferrer"
                href='https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461'>
                <FacebookIcon />
              </a>
              <a
                target='_blank'
                rel="noreferrer"
                href='https://www.instagram.com/psicologa_cristinaconrique/'>
                <InstagramIcon />
              </a>
              <a
                target='_blank'
                rel="noreferrer"
                href='https://join.skype.com/invite/ckkLqnyKyirz'>
                <SkypeIcon />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    )
  } else if (navOrientation === 'vertical') {
    //Sets and returns side nav bar
    if (compactNavOpen) {
      //If previous nav bar was compact nav bar and it was open, side nav bar also stays open
      setCompactNavOpen(false);
      setSideNavOpen(true);
    };

    if (!sideNavOpen) {
      return (
        <div className='nav-side-dropdown-container-closed'>
          <div onClick={handleSideNavOpen} className='nav-side-dropdown-icon-closed'>
            <div className='nav-side-dropdown-bar-closed'></div>
            <div className='nav-side-dropdown-bar-closed'></div>
            <div className='nav-side-dropdown-bar-closed'></div>
          </div>
        </div>
      )
    } else {
      return (
        <>
          <div className='nav-side-dropdown-container'>
            <div onClick={handleSideNavOpen} className='nav-side-dropdown-icon'>
              <div className='nav-side-dropdown-bar'></div>
              <div className='nav-side-dropdown-bar'></div>
              <div className='nav-side-dropdown-bar'></div>
            </div>
          </div>
          <nav className='nav-side-container no-select'>
            <ul>
              <li id='li-img-side'><a href='/#inicio'><img src='images/logo-small.png' alt='Psicóloga Cristina Conrique Logo'></img></a></li>
              <li id='nav-line-1'></li>
              <li><a onClick={handleNavLanding} href='/#inicio' className='li-text'>Inicio</a></li>
              <li><a onClick={handleNavLanding} href='/#terapia' className='li-text'>Terapia</a></li>
              <li><a onClick={handleNavLanding} href='/#sobre' className='li-text'>Sobre Mí</a></li>
              <li><a onClick={handleNavLanding} href='/#tarifas' className='li-text'>Tarifas</a></li>
              <li className='li-img'><a onClick={handleNavLanding} href='/#inicio'><img src='images/logo-small.png' alt='Psicóloga Cristina Conrique Logo'></img></a></li>
              <li><a href='/recursos' className='li-text'>Recursos</a></li>
              <li><a href='/faqs' className='li-text'>FAQs</a></li>
              <li><a onClick={handleNavLanding} href='/#contacto' className='li-text'>Contacto</a></li>
              <li id='nav-line-2'></li>
              <li>
                <div className='li-icon'>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461'>
                    <FacebookIcon />
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://www.instagram.com/psicologa_cristinaconrique/'>
                    <InstagramIcon />
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://join.skype.com/invite/ckkLqnyKyirz'>
                    <SkypeIcon />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className='nav-side-bg'></div>
        </>
      )
    }
  } else if (navOrientation === 'compact') {
    //Sets and returns compact nav bar
    if (sideNavOpen) {
      //If previous nav bar was side nav bar and it was open, compact nav bar also stays open
      setCompactNavOpen(true);
      setSideNavOpen(false);
    };

    if (!compactNavOpen) {
      return (
        <div className='nav-compact-dropdown-container-closed'>
          <div onClick={handleCompactNavOpen} className='nav-compact-dropdown-icon-closed'>
            <div className='nav-compact-dropdown-bar-closed'></div>
            <div className='nav-compact-dropdown-bar-closed'></div>
            <div className='nav-compact-dropdown-bar-closed'></div>
          </div>
        </div>
      )
    } else {
      return (
        <>
          <nav className='nav-compact-container no-select'>
            <a href='/#inicio' className='li-img'><img src='images/logo-small.png' alt='Psicóloga Cristina Conrique Logo'></img></a>
            <ul>
              <li><a href='/#inicio' onClick={handleNavLanding} className='li-text'>Inicio</a></li>
              <li><a href='/#terapia' onClick={handleNavLanding} className='li-text'>Terapia</a></li>
              <li><a href='/#sobre' onClick={handleNavLanding} className='li-text'>Sobre Mí</a></li>
              <li><a href='/#tarifas' onClick={handleNavLanding} className='li-text'>Tarifas</a></li>
            </ul>
            <ul>
              <li><a href='/recursos' className='li-text'>Recursos</a></li>
              <li><a href='/faqs' className='li-text'>FAQs</a></li>
              <li><a href='/#contacto' onClick={handleNavLanding} className='li-text'>Contacto</a></li>
              <li>
                <div id='li-icon'>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461'>
                    <FacebookIcon />
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://www.instagram.com/psicologa_cristinaconrique/'>
                    <InstagramIcon />
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href='https://join.skype.com/invite/ckkLqnyKyirz'>
                    <SkypeIcon />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className='nav-droplet' onClick={handleCompactNavOpen} >
            <div className='nav-compact-dropdown-container'>
              <div className='nav-compact-dropdown-icon'>
                <div className='nav-compact-dropdown-bar'></div>
                <div className='nav-compact-dropdown-bar'></div>
                <div className='nav-compact-dropdown-bar'></div>
              </div>
            </div>
          </div>
          <div className='nav-side-bg'></div>
        </>
      )
    }
  }
}

export default Nav;