import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div id='sobre'></div>
      <div className='about-container'>
        <div className='about-img'>
          <img src='images/headshot.jpg' alt='Foto de Psicóloga Cristina Conrique'></img>
        </div>
        <div className='about-h1-text-container'>
          <h1>Sobre Mí</h1>
          <div className='about-text'>
            <p>Soy Licenciada en psicología, titulada por la Universidad de Guadalajara, en México.<br/><br/>Tengo Máster en Psicología Clínica y de la Salud y Máster en Psicoterapia Cognitivo-Conductual, por el Instituto Superior de Estudios Psicológicos, realizados en Madrid, España.<br/><br/>Soy una persona empática, cercana, accesible y comprometida con el bienestar emocional en las personas. Persigo los derechos y la libre expresión de las personas, así como un impacto social en la educación y respeto entre iguales.<br/><br/>Como persona que ha migrado a diferentes países en la búsqueda del crecimiento personal y profesional, ofrezco una perspectiva multicultural, con formación en la diversidad tanto sexual como cultural y diferentes grupos socialmente vulnerables. Te brindo mi conocimiento profesional y experiencia personal para alcanzar los objetivos propuestos en terapia, pero sobre todo para lograr el bienestar emocional y trabajar juntos.</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default About;