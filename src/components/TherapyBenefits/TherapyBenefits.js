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
            <p>Para la obtención de una cita virtaul<br/> solo tienes que coordinar un día y un<br/> horario determinados.</p>
          </div>
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/sin_desplazamientos_icon.svg' alt='Sin Desplazamientos Icono'></img>
          </Tilt>
          <h3>Sin Desplazamientos</h3>
          <div className='therapy-benefit-textbox'>
            <p>No requiere abondonar la<br/> comodidad de tu sofá preferido o<br/> tus obligaciones en la oficina.</p>
          </div>
        </div>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/flexibilidad_icon.svg' alt='Flexibilidad Icono'></img>
          </Tilt>
          <h3>Flexibilidad</h3>
          <div className='therapy-benefit-textbox'>
            <p>Puedes programar una sesión estès<br/> donde estès y a la hora que desees,<br/> incluso estando de vacaciones.</p>
          </div> 
        </div>
      </div>

      <div className='therapy-benefits-row'>
        <div className='therapy-benefit'>
          <Tilt>
            <img src='images/ahorro_icon.svg' alt='Ahorro Icono'></img>
          </Tilt>  
          <h3>Ahorro</h3>
          <div className='therapy-benefit-textbox'>
            <p>De tiempo y dinero. No te diriges a<br/> una consulta ni padeces los <em>tiempos<br/> muertos</em> en salas de espera.</p>
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
            <p>La máxima privacidad y la reserva<br/> garantizan un trato profesional<br/> personalizado y cercano.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TherapyBenefits;
