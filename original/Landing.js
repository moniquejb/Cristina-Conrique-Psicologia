import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [landingWord, setLandingWord] = useState('preocupación');

  useEffect(() => {
    let i = -1;
    const landingWordArr = ['ansiedad', 'estrés', 'tristeza', 'miedo', 'soledad', 'confusión', 'dudas', 'preocupación'];
    const wordChange = setInterval(() => {
      i === 7 ? i = 0 : i += 1;
      setLandingWord(landingWordArr[i])
    }, 3000);
    return () => {
      clearInterval(wordChange);
    };
  }, [])

  return (
    <main id='inicio'>
      <div className='landing-wrapper'>
        <div className='landing-img'>
          <div className='landing-colour top-colour'></div>
          <div className='landing-colour bottom-colour'></div>
          <img src='images/landing-img.svg' alt='Terapia Individual'></img>
        </div>
        <div className='landing-top'>
          <h2>Sientes...</h2>
          <h1>preocupación</h1>
          {/* className='wordChangeAnimation' {landingWord} */}
          <h2>¿Estás pasando por un momento difícil?</h2>
        </div>
        <div className='landing-bottom'>
          <div className='landing-bottom-textbox'>
            <h3>Si llegaste aquí, seguramente estás buscando superar esos momentos. Toma la decisión de agendar tu cita y trabajaremos en conjunto.</h3>
            <a href='#contacto'>Agendar una cita</a>
          </div>
        </div>

        <div className='landing-combined'>
          <div className='landing-combined-text'>
            <div className='landing-combined-heading'>
              <h2>Sientes...</h2>
              <h1>preocupación</h1>
              {/* className='wordChangeAnimation' {landingWord} */}
              <h2>¿Estás pasando por un momento difícil?</h2>
            </div>
            <div className='landing-combined-textbox'>
              <h3>Si llegaste aquí, seguramente estás buscando superar esos momentos. Toma la decisión de agendar tu cita y trabajaremos en conjunto.</h3>
              <a href='#contacto'>Agendar una cita</a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Landing;