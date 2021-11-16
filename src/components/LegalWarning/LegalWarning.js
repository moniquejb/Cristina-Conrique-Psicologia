import React from 'react';
import './LegalWarning.css';
import AvisoLegalText from '../../utilities/aviso_legal_text.js';

const LegalWarning = ({ handleToggleLegal, toggleLegal }) => {  
  //Only display legal notice if it has been clicked, otherwise hide it
  if (toggleLegal) {
    return (
      <div id='legal-warning-container' className='legal-warning-container' onClick={handleToggleLegal}>
        <div className='legal-warning-bg'>
          <div className='legal-warning-exit'>
            <p id='legal-warning-x' onClick={handleToggleLegal}>x</p>
          </div>
          <div className='legal-warning-heading-text-container'>
            <h1>Aviso Legal y<br id='legal-warning-line-break'/> Política de Privacidad</h1>
            <div className='legal-warning-text-box-1'>
              <div className='legal-warning-text-box-2'>
                <div className='legal-warning-text'>
                  <AvisoLegalText />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}

export default LegalWarning;