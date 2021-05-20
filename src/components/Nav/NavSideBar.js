import React from 'react';
import { FacebookIcon, InstagramIcon, SkypeIcon } from '../../utilities/icons.js';
import './NavSideBar.css';

const NavSideBar = () => {
  return (
    <nav className='nav-side-container no-select'>
      <ul>
        <li id='li-img-side'><a href='/#inicio'><img src='images/logo.svg' alt='Psicóloga Cristina Conrique Logo'></img></a></li>
        <li id='nav-line-1'></li>
        <li><a href='/#inicio' className='li-text'>Inicio</a></li>
        <li><a href='/#terapia' className='li-text'>Terapia</a></li>
        <li><a href='/#sobre' className='li-text'>Sobre Mí</a></li>
        <li><a href='/#tarifas' className='li-text'>Tarifas</a></li>
        <li className='li-img'><a href='/#inicio'><img src='images/logo.svg' alt='Psicóloga Cristina Conrique Logo'></img></a></li>
        <li><a href='/recursos' className='li-text'>Recursos</a></li>
        <li><a href='/faqs' className='li-text'>FAQs</a></li>
        <li><a href='/#contacto' className='li-text'>Contacto</a></li>
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
  )
}

export default NavSideBar;