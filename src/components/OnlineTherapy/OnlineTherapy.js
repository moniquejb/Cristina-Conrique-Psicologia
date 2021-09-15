import React, { useState } from 'react';
import './OnlineTherapy.css';

const OnlineTherapy = () => {
  const arrowClosed = '►';
  const arrowOpen = '◢';

  const [arrow1, setArrow1] = useState(arrowOpen);
  const [arrow2, setArrow2] = useState(arrowClosed);
  const [arrow3, setArrow3] = useState(arrowClosed);
  const [arrow4, setArrow4] = useState(arrowClosed);

  //Function to determine wheter a qeuestion/answer should be opened/closed depending on user selection
  const handleSelection = ({ target }) => {
    //Variable to select last character of target ID
    let selectedItemId = target.id[target.id.length - 1];
    let selectedQuestion = document.getElementById(`online-q-${selectedItemId}`);
    let selectedAnswer = document.getElementById(`online-answer-${selectedItemId}`);

    for (let i = 4; i > 0; i--) {
      //Only apply following to UNselected questions
      if (i != Number(selectedItemId)) {
        let currentQuestion = document.getElementById(`online-q-${i}`);
        let currentAnswer = document.getElementById(`online-answer-${i}`);

        //Apply to question/answer if it was previously open & showing
        if (currentQuestion.classList.contains('h3-open')) {
          //Toggle question and answers- close question and hide answer
          currentQuestion.classList.toggle('h3-open');
          currentQuestion.classList.toggle('h3-closed');
          currentAnswer.classList.toggle('p-hide');
          currentAnswer.classList.toggle('p-show');

          //Toggle arrow symbol- show closed arrow
          switch (i) {
            case 1:
              setArrow1(arrowClosed);
              break;
            case 2:
              setArrow2(arrowClosed);
              break;
            case 3:
              setArrow3(arrowClosed);
              break;
            case 4:
              setArrow4(arrowClosed);
              break;
            default:
              console.log('Switch Error');
              break;
          }
        }
      } else {
        //Only apply following to selected question
        //Toggle question and answers- open/close question and show/hide answer
        selectedQuestion.classList.toggle('h3-closed');
        selectedQuestion.classList.toggle('h3-open');
        selectedAnswer.classList.toggle('p-show');
        selectedAnswer.classList.toggle('p-hide');

        //Apply to question/answer if it was previously open & showing
        if (selectedAnswer.classList.contains('p-show')) {
          //Toggle arrow symbol- show open arrow
          switch (selectedItemId) {
            case '1':
              setArrow1(arrowOpen);
              break;
            case '2':
              setArrow2(arrowOpen);
              break;
            case '3':
              setArrow3(arrowOpen);
              break;
            case '4':
              setArrow4(arrowOpen);
              break;
            default:
              console.log('Switch Error');
              break;
          }
        } else {
          //Apply to question/answer if it was previously closed & hiding
          //Toggle arrow symbol- show closed arrow
          switch (selectedItemId) {
            case '1':
              setArrow1(arrowClosed);
              break;
            case '2':
              setArrow2(arrowClosed);
              break;
            case '3':
              setArrow3(arrowClosed);
              break;
            case '4':
              setArrow4(arrowClosed);
              break;
            default:
              console.log('Switch Error');
              break;
          }
        }
      }
    }
  }

  return (
    <div className='online-therapy-container'>
      <h1>Terapia Online</h1>
      <div className='online-therapy-text-img-container'>
        <div className='online-therapy-text'>
          <h3 id='online-q-1' className='h3-open' onClick={handleSelection}>{arrow1} ¿Qué es la terapia Online?</h3>
          <p id='online-answer-1' className='p-show'>La terapia Online es una modalidad y opción de tratamiento cada vez más común, y frecuente en nuestros días. Sigue la misma técnica que la terapia presencial, es decir, evaluar y tratar las dificultades que nos hacen sufrir, en relación con el entorno y con nosotros mismos.
            Se trata de una videoconferencia/ video llamada, en donde un usuario y un psicólogo profesional trabajan en conjunto en tiempo real a través de un dispositivo electrónico.
          </p>
          <hr className='hr-line-break' />
          <h3 id='online-q-2' className='h3-closed' onClick={handleSelection}>{arrow2} ¿Qué pasos sigo para comenzar?</h3>
          <p id='online-answer-2' className='p-hide'>Como en una cita presencial, los pasos son los mismos, puede contactar directamente con el profesional, se pide una cita y se asiste a la sesión, sólo que la sesión se realiza vía online; o puedes agendar por medio de la página web una cita en el horario disponible que mejor convenga de acuerdo a tus horarios.</p>
          <hr className='hr-line-break' />
          <h3 id='online-q-3' className='h3-closed' onClick={handleSelection}>{arrow3} ¿Cuál es la duración de la sesión?</h3>
          <p id='online-answer-3' className='p-hide'>La duración de cada sesión es de 50 minutos a una hora, y por lo general es una vez a la semana.</p>
          <hr className='hr-line-break' />
          <h3 id='online-q-4' className='h3-closed' onClick={handleSelection}>{arrow4} ¿Cuándo acudir a terapia Online?</h3>
          <ul id='online-answer-4' className='p-hide'>
            <li>Cuando tenemos pensamientos negativos desproporcionados, sensaciones de vacío y desesperanza.</li>
            <li>Nos exigimos demasiado y nos sobrecargamos con lo nuestro y lo de los demás.</li>
            <li>Sentimos estrés y/o ansiedad.</li>
            <li>Cuando quieres tener un espacio para ti.</li>
            <li>Comprender realmente lo que sucede.</li>
            <li>Aprender a gestionar tus emociones, pensamientos y comportamientos.</li>
            <li>Si tu sueño o alimentación están alterados.</li>
            <li>Si no funcionas adecuadamente, o al menos como te gustaría, en algunas áreas de tu vida.</li>
            <li>Si tienes una sensación de vacío o aburrimiento constante y nada te motiva lo suficiente.</li>
            <li>Si quieres conocerte mejor o tienes dudas de tu identidad.</li>
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