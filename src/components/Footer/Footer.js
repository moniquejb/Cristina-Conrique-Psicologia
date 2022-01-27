import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container' id='footer'>
      <div className='footer-text-container'>
        <p>© {new Date().getFullYear()} Cristina Conrique&nbsp;&nbsp;|<br className='break-foot-small-mobile'/>&nbsp;&nbsp;Todos los derechos reservados&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <div className='break-foot-large-mobile'></div>
        <div className='break-foot-small-mobile'></div>
        <p>Imágenes de&nbsp;
          <a target='_blank'
            rel="noreferrer"
            href="http://www.freepik.com">Freepik</a>
          &nbsp;y&nbsp;
          <a target='_blank'
            rel="noreferrer"
            href="https://www.linkedin.com/in/monique-blignaut-48173485/">Monique Blignaut</a>
          &nbsp;&nbsp;|<br className='break-foot-small-mobile'/>&nbsp;
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