import React, { useState, useEffect } from 'react';
import './Prices.css';

const Prices = ({ price, currency, country }) => {
  let [weeklySession, setWeeklySession] = useState('Consultar');
  let [monthlySession, setMonthlySession] = useState('Consultar');
  let [weeklyTotal, setWeeklyTotal] = useState('');
  let [monthlyTotal, setMonthlyTotal] = useState('');
  let [smallerTextPrices, setSmallerTextPrices] = useState('');

  useEffect(() => {
    //Shrink text for countries with large price digit length
    if(country === 'AR' || country === 'VE') {
      setSmallerTextPrices('smaller-text-prices');
    } else if(country === 'CL' || country === 'CO') {
      setSmallerTextPrices('smallest-text-prices');
    } else {
      setSmallerTextPrices('');
    }
    //Determine and round up monthly and weekly prices according to currency/price
    setWeeklyTotal(Math.round(Math.round((price * 0.9)) * 4));
    setMonthlyTotal(Math.round(Math.round((price * 0.85)) * 8));
    setWeeklySession(Math.round(price * 0.9));
    setMonthlySession(Math.round(price * 0.85));
  }, [price, country])

  return (
    <>
      <div id='tarifas'></div>
      <div className='prices-container'>
        <h1>Tarifas</h1>
        <div className='prices-consult-text'>
          <p>Como persona que ha inmigrado a diferen&shy;tes países de América Latina y Europa, te ofrezco aten&shy;ción psicoló&shy;gica no importa en donde vivas. Si hablas español, puedes tomar terapia online sin importar la distan&shy;cia. Si deseas consul&shy;tar&shy;me el precio en tu tipo de cambio, no dudes en escribir&shy;me.</p>
        </div> 
        <div className='price-box-container'>
          <div className='price-box'>
            <h3>Plan Semanal</h3>
            <div className={`price-box-discount ${smallerTextPrices}`}>
              {/* <h2></h2> */}
              <h3 id='price-weekly'>{currency}{price}</h3>
            </div>
            <p>1 Sesión de 1 hora <br/>(pago semanal)</p>
          </div>
          <div className='price-box'>
            <h3>Plan Mensual</h3>
            <div className={`price-box-discount ${smallerTextPrices}`}>
              <h3>-10%</h3>
              <h2>{currency}{weeklySession}</h2>
              <h3>Total {currency}{weeklyTotal}</h3>
            </div>
            <p>4 Sesiones por mes<br/>(1 semanalmente)</p>
          </div>
          <div className='price-box'>
            <h3>Plan Bimestral</h3>
            <div className={`price-box-discount ${smallerTextPrices}`}>
              <h3>-15%</h3>
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