import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [landingWord, setLandingWord] = useState('preocupación');

  useEffect(() => {
    //Set up changing words on landing page
    let i = -1;
    const landingWordArr = ['ansiedad', 'estrés', 'tristeza', 'miedo', 'soledad', 'confusión', 'dudas', 'preocupación'];
    const wordChange = setInterval(() => {
      //Once all words have been used, reset i and start from beggining of array- otherwise continue through list
      i === 7 ? i = 0 : i += 1;
      setLandingWord(landingWordArr[i])
    }, 3000);
    return () => {
      clearInterval(wordChange);
    };
  }, [])

  return (
    <main id='inicio'>
      <div className='landing-colours landing-top-colour'></div>
      <div className='landing-colours landing-bottom-colour'></div>
      <div className='landing-container'>
        <div className='landing-image-container'>
          <img src='images/landing-img.svg' alt='Terapia Individual'></img>
        </div>
        <div className='landing-heading-container'>
          <div className='landing-heading-text'>
            <h2>Sientes...</h2>
            <h1 className='wordChangeAnimation'>{landingWord}</h1>
            <h2>¿Estás pasando por un momento difícil?</h2>
          </div>
        </div>
        <div className='landing-text-container'>
          <div className='landing-textbox'>
            <h3>Si llegaste aquí, seguramente estás buscando superar esos momentos. Toma la decisión de agendar tu cita y trabajaremos en conjunto.</h3>
            <a href='#contacto'>Agendar una cita</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing;