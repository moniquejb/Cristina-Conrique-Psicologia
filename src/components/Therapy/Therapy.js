import React from 'react';
import './Therapy.css'
import Tilt from 'react-parallax-tilt';

const Therapy = () => {
  return (
    <>
      <div id='terapia'></div>
      <div className='therapy-container'>
        <h1>Terapia</h1>
        <div className='therapy-text'>
          <p>La terapia es individuali&shy;zada y es tu espacio seguro, buscare&shy;mos abordar el problema para mejorar y solucio&shy;nar aquello que te genera malestar. Aprende&shy;rás habilida&shy;des para afrontar las situacio&shy;nes de la vida cotidiana de una forma más tranquila, con más confianza, sintiendo que dominas las situacio&shy;nes que se presentan.</p>
        </div>
        <div className='therapy-individuals-container'>
          <div className='therapy-individuals'>
            <div className='therapy-individuals-heading'>
              <h3>Adultos</h3>
            </div>
            <div className='therapy-individuals-img'>
              <Tilt>
                <img loading='lazy' src='images/adultos.svg' alt='Terapia para Adultos'></img>
              </Tilt>
            </div>
            <div className='therapy-individuals-text'>
              <ul>
                <li>Habilidades sociales</li>
                <li>Gestión de problemas</li>
                <li>Separación</li>
                <li>Ataques de pánico</li>
                <li>Ansiedad</li>
                <li>Duelos</li>
                <li>Depresión</li>
                <li>Estrés</li>
              </ul>
            </div>
          </div>

          <div className='therapy-individuals therapy-white-bg'>
            <div className='therapy-individuals-heading'>
              <h3>Inclusiva</h3>
            </div>
            <div className='therapy-individuals-img'>
              <Tilt>
                <img loading='lazy' src='images/inclusiva.svg' alt='Terapia Inclusiva'></img>
              </Tilt>
            </div>
            <div className='therapy-individuals-text'>
              <ul>
                <li>Identidad de género</li>
                <li>Disforia de género</li>
                <li>Educación sexual</li>
                <li>Inclusión social</li>
                <li>Grupos de riesgo</li>
              </ul>
            </div>
          </div>

          <div className='therapy-individuals'>
            <div className='therapy-individuals-heading'>
              <h3>Adolescentes</h3>
            </div>
            <div className='therapy-individuals-img'>
              <Tilt>
                <img loading='lazy' src='images/adolescentes.svg' alt='Terapia para Adolescentes'></img>
              </Tilt>
            </div>
            <div className='therapy-individuals-text'>
              <ul>
                <li>Habilidades sociales</li>
                <li>Automutilación</li>
                <li>Ansiedad</li>
                <li>Depresión</li>
                <li>Bullying</li>
                <li>Aislamiento</li>
                <li>Fobia escolar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Therapy;