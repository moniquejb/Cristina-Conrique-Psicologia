import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = ({ windowHeight, windowWidth }) => {
  const [landingWord, setLandingWord] = useState('preocupación');

  useEffect(() => {
    //Set up changing words & animations on landing page
    let i = -1;
    const landingWordArr = ['ansiedad', 'estrés', 'tristeza', 'miedo', 'soledad', 'confusión', 'dudas', 'preocupación'];
    const wordChange = setInterval(() => {
      document.getElementById('landing-word').classList.remove('wordChangeOnce');
            
      //Once all words have been used, reset i and start from beggining of array- otherwise continue through list
      i === 7 ? i = 0 : i += 1;
      setLandingWord(landingWordArr[i]);
      document.getElementById('landing-word').classList.add('wordChangeAnimation');
      console.log('going');
    }, 3000);
    return () => {
      document.getElementById('landing-word').classList.remove('wordChangeAnimation');
      clearInterval(wordChange);
      console.log('cleared');
    };
  }, [])

  return (
    <main id='inicio'>
      <div className='nav-placeholder'></div>
      <div className='landing-placeholder'></div>
      <div className='bg-landing-colours bg-landing-top-colour'></div>
      <div className='bg-landing-colours bg-landing-bottom-colour'></div>
      <div className='landing-container'>
        {window.innerWidth >= 1280
          ? <div className='landing-image-container'>
            <img src='images/landing-img.svg' alt='Terapia Individual'></img>
          </div>
          : <></>}
        <div className='landing-header-image'>
          <div className='landing-heading-container'>
            <div className='landing-heading-text'>
              <h2>Sientes...</h2>
              <h1 id='landing-word' className='wordChangeOnce'>{landingWord}</h1>
              <h2>¿Estás pasando por un momento difícil?</h2>
            </div>
            <div className='landing-tablet-text'>
              {(windowWidth < 900 && windowHeight < 420) || (windowWidth <= 384 && windowHeight < 655)
                ? <h3 className='center-text'>Toma la decisión de agen&shy;dar tu cita y trabaja&shy;remos en conjunto.</h3>
                : <h3>Si llegaste aquí, segura&shy;mente estás bus&shy;cando superar esos momentos. Toma la decisión de agen&shy;dar tu cita y trabaja&shy;remos en conjunto.</h3>}
            </div>
          </div>
          {window.innerWidth < 1280
            ? <div className='landing-image-container'>
              <img src='images/landing-img.svg' alt='Terapia Individual'></img>
            </div>
            : <></>}
        </div>

        <div className='landing-text-container'>
          <div className='landing-textbox'>
            {((windowWidth < windowHeight) && windowHeight <= 641) || (windowHeight <= 660 && windowWidth <= 280) || (windowHeight <= 240 && windowWidth <= 320)
              ? <h3 className='center-text'>Toma la decisión de agen&shy;dar tu cita y trabaja&shy;remos en conjunto.</h3>
              : <h3>Si llegaste aquí, segura&shy;mente estás bus&shy;cando superar esos momentos. Toma la decisión de agen&shy;dar tu cita y trabaja&shy;remos en conjunto.</h3>
            }
            <a href='#contacto'>Agendar una cita</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing;