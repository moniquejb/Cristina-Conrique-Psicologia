import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container' id='footer'>
      <div className='footer-text-container'>
        <p>© 2021 Cristina Conrique&nbsp;&nbsp;|&nbsp;&nbsp;Todos los derechos reservados&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <p>Imágenes de&nbsp;
          <a target='_blank'
            rel="noreferrer"
            href="http://www.freepik.com">Freepik</a>
          &nbsp;y&nbsp;
          <a target='_blank'
            rel="noreferrer"
            href="https://www.linkedin.com/in/monique-blignaut-48173485/">Monique Blignaut</a>
          &nbsp;&nbsp;|&nbsp;
          Creado por&nbsp;
          <a target='_blank'
            rel="noreferrer"
            href="https://www.linkedin.com/in/monique-blignaut-48173485/">Monique Blignaut</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;