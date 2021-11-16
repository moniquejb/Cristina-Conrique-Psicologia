import React from 'react';
import './About.css';

const About = ({ windowHeight, windowWidth}) => {
  return (
    <>
      <div id='sobre'></div>
      <div className='about-container'>
      {windowWidth < windowHeight 
      ? <div className='about-img'>
          <img src='images/headshot_square.jpg' alt='Foto de Psicóloga Cristina Conrique'></img>
        </div>
      : <div className='about-img'>
          <img src='images/headshot_portrait.jpg' alt='Foto de Psicóloga Cristina Conrique'></img>
        </div>
      }
        <div className='about-h1-container'>
          <h1>Sobre Mí</h1>
        </div>
        <div className='about-text-container'>
          {windowWidth > windowHeight && <img src='images/headshot_portrait.jpg' alt='Foto de Psicóloga Cristina Conrique'></img>}          
          <p>Soy Licenciada en psicología, titulada por la Universidad de Guadalajara, en México.<br /><br />Tengo Máster en Psicología Clínica y de la Salud y Máster en Psicoterapia Cognitivo&shy;-Conductual, por el Instituto Superior de Estudios Psicológicos, reali&shy;zados en Madrid, España.<br /><br />Soy una persona empática, cercana, accesible y comprome&shy;tida con el bienestar emocional en las personas. Persigo los derechos y la libre expresión de las personas, así como un impacto social en la educación y respeto entre iguales.<br /><br />Como persona que ha migrado a diferentes países en la búsqueda del crecimie&shy;nto personal y profesional, ofrezco una perspec&shy;tiva multi&shy;cultural, con formación en la diversidad tanto sexual como cultural y diferentes grupos social&shy;mente vulnera&shy;bles. Te brindo mi conocimie&shy;nto profesional y experien&shy;cia personal para alcanzar los objetivos propuestos en terapia, pero sobre todo para lograr el biene&shy;star emocional y trabajar juntos.</p>
        </div>
      </div>
    </>
  )
}

export default About;