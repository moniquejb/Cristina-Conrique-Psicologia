import React, { useState, useEffect } from 'react';
import './Prices.css';

const Prices = ({ price, currency }) => {
  let [weeklySession, setWeeklySession] = useState('Consultar');
  let [monthlySession, setMonthlySession] = useState('Consultar');
  let [weeklyTotal, setWeeklyTotal] = useState('');
  let [monthlyTotal, setMonthlyTotal] = useState('');

  useEffect(() => {
    setWeeklyTotal(Math.round(Math.round((price * 0.85)) * 4));
    setMonthlyTotal(Math.round(Math.round((price * 0.8)) * 8));
    setWeeklySession(Math.round(price * 0.85));
    setMonthlySession(Math.round(price * 0.8));
  }, [price])

  return (
    <>
      <div id='tarifas'></div>
      <div className='prices-container'>
        <h1>Tarifas</h1>
        <div className='prices-consult-text'>
          <p>Como persona que ha inmigrado a diferentes países de América Latina y Europa, te ofrezco atención psicológica no importa en donde vivas. Si hablas español, puedes tomar terapia online sin importar la distancia. Si deseas consultarme el precio en tu tipo de cambio, no dudes en escribirme.</p>
        </div> 
        <div className='price-box-container'>
          <div className='price-box'>
            <h3>Plan Semanal</h3>
            <div className='price-box-discount'>
              {/* <h2></h2> */}
              <h3 id='price-weekly'>{currency}{price}</h3>
            </div>
            <p>1 Sesión de 1 hora <br/>(pago semanal)</p>
          </div>
          <div className='price-box'>
            <h3>Plan Mensual</h3>
            <div className='price-box-discount'>
              <h3>-15%</h3>
              <h2>{currency}{weeklySession}</h2>
              <h3>Total {currency}{weeklyTotal}</h3>
            </div>
            <p>4 Sesiones por mes<br/>(1 semanalmente)</p>
          </div>
          <div className='price-box'>
            <h3>Plan Bimestral</h3>
            <div className='price-box-discount'>
              <h3>-20%</h3>
              <h2>{currency}{monthlySession}</h2>
              <h3>Total {currency}{monthlyTotal}</h3>
            </div>
            <p>8 Sesiones por 2 meses<br/>(4 mensualmente)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prices;