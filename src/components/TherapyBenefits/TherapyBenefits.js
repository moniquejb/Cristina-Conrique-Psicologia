import React from 'react';
import './TherapyBenefits.css';
import Tilt from 'react-parallax-tilt';

const TherapyBenefits = () => {
  return (
    <div className='therapy-benefits-container'>
      <h3>¿Que son los beneficios de terepia Online?</h3>
      <div className='therapy-benefits-row'>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/comodidad_icon.svg' alt='Comodidad Icono'></img>
          </Tilt>
          <h3>Comodidad</h3>
          <div className='therapy-benefit-textbox'>
            <p>Ofrece la oportunidad para ayudar a<br/> aquellas personas que por diferentes motivos<br/> no pueden acudir a una terapia presencial.</p>
          </div>
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/sin_desplazamientos_icon.svg' alt='Sin Desplazamientos Icono'></img>
          </Tilt>
          <h3>Sin Desplazamientos</h3>
          <div className='therapy-benefit-textbox'>
            <p>No requiere abandonar la<br/> comodidad de tu casa, oficina<br/> o actividades cotidianas.</p>
          </div>
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/flexibilidad_icon.svg' alt='Flexibilidad Icono'></img>
          </Tilt>
          <h3>Flexibilidad</h3>
          <div className='therapy-benefit-textbox'>
            <p>Puedes programar una sesión<br/> donde estés y a la hora que desees,<br/> incluso estando de viaje.</p>
          </div> 
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/ahorro_icon.svg' alt='Ahorro Icono'></img>
          </Tilt>  
          <h3>Ahorro</h3>
          <div className='therapy-benefit-textbox'>
            <p>De tiempo y dinero.<br/> Evita desplazamientos y tiempos<br/> en salas de espera.</p>
          </div>
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/continuidad_icon.svg' alt='Continuidad Icono'></img>
          </Tilt>
          <h3>Continuidad</h3>
          <div className='therapy-benefit-textbox'>
            <p>No tienes necesidad de interrumpir<br/> tu terapia en caso de viaje por<br/> trabajo, mudanza o vacaciones.</p>
          </div>
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/intimidad_icon.svg' alt='Intimidad Icono'></img>
          </Tilt>
          <h3>Intimidad</h3>
          <div className='therapy-benefit-textbox'>
            <p>Trato profesional y cercano garantizado,<br/> así como la máxima confidencialidad con<br/> el manejo de información.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TherapyBenefits;
