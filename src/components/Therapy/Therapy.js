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
        <p>La terapia es individualizada, es tu espacio seguro y buscaremos abordar el problema para mejorar y solucionar aquello que te genera malestar. Aprenderás habilidades para afrontar las situaciones de la vida cotidiana de una forma más tranquila, con más confianza, sintiendo que dominas las situaciones que se presentan.</p>
      </div>
      <div className='therapy-individuals-container'>
        <div className='therapy-individuals'>
          <Tilt>
            <img className='therapy-individuals-img' src='images/adultos.svg' alt='Terapia para Adultos'></img>
          </Tilt>
          <div className='therapy-individuals-text'>
            <h3>Adultos</h3>
            <p>•Habilidades sociales&emsp;•Depresión<br/>•Duelos&emsp;•Gestión de problemas<br/>•Ataques de pánico&emsp;•Ansiedad&emsp;•Estrés<br/>•Separación&emsp;•Toma de decisiones<br/>•Problemas personales o familiares</p>
          </div>
        </div>
        <div className='therapy-individuals'>
          <Tilt>
            <img className='therapy-individuals-img' src='images/inclusiva.svg' alt='Terapia Inclusiva'></img>
          </Tilt>
          <div className='therapy-individuals-text'>
            <h3>Inclusiva</h3>
            <p>•Identidad de género<br/>•Disforia de género&emsp;•Educación sexual<br/>•Inclusión social&emsp;•Grupos de riesgo</p>
          </div>
        </div>
        <div className='therapy-individuals'>
          <Tilt>
            <img className='therapy-individuals-img' src='images/adolescentes.svg' alt='Terapia para Adolescentes'></img>
          </Tilt>
          <div className='therapy-individuals-text'>
            <h3>Adolescentes</h3>
            <p>•Ansiedad&emsp;•Depresión<br/>•Problemas de habilidades sociales<br/>•Trastornos de la conducta&emsp;•Miedos<br/>
•Bullying&emsp;•Automutilación (cutting)<br/>•Aislamiento&emsp;•Fobia escolar</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Therapy;