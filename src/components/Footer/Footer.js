import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container' id='footer'>
      <div className='footer-text-container'>
        <p>© 2021 Cristina Conrique | Todos los derechos reservados |&nbsp;</p>
        <p>Creado por&nbsp;
          <a target='_blank'
            rel="noreferrer"
            href='https://www.linkedin.com/in/monique-blignaut-48173485/'>Monique Blignaut</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;