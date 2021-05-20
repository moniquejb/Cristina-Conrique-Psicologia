import React from 'react';
import './OnlineTherapy.css';

const OnlineTherapy = () => {
  return (
    <div className='online-therapy-container'>
      <h1>Terapia Online</h1>
      <div className='online-therapy-text-img-container'>
        <div className='online-therapy-text'>
          <h3>¿Qué es la terapia Online?</h3>
          <p>La terapia con psicólogos Online, sigue la misma técnica que la terapia presencial, es decir, evaluar y tratar las dificultades que nos hacen sufrir, en relación con el entorno y con nosotros mismos.</p>
          <h3>¿Cuándo acudir a terapia Online?</h3>
          <ul>
            <li>Cuando tenemos pensamientos negativos desproporcionados, sensaciones de vacío y desesperanza.</li>
            <li>Nos exigimos demasiado y nos sobrecargamos con lo nuestro y lo de los demás.</li>
            <li>Sentimos estrés y/o ansiedad.</li>
            <li>Cuando quieres tener un espacio para ti.</li>
            <li>Comprender realmente lo que sucede.</li>
            <li>Aprender a gestionar tus emociones, pensamientos y comportamientos.</li>
            <li>Si tu sueño está alterado (duermes mucho o pocas horas).</li>
            <li>Si tu alimentación está alterada.</li>
            <li>Si no funcionas adecuadamente, o al menos como te gustaría, en algunas áreas de tu vida (a nivel personal, familiar, laboral o social).</li>
            <li>Si tienes una sensación de vacío o aburrimiento constante y nada te motiva lo suficiente.</li>
            <li>Si quieres conocerte mejor/ tienes dudas de tu identidad.</li>
          </ul>
        </div>
        <div className='online-therapy-img'>
          <img src='images/terapia_online.svg' alt='Terapia Online'></img>
        </div>
      </div>
    </div>
  )
}

export default OnlineTherapy;