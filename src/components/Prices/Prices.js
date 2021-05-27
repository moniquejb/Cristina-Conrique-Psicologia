import React from 'react';
import './Prices.css';

const Prices = () => {
  return (
    <>
      <div id='tarifas'></div>
      <div className='prices-container'>
        <h1>Tarifas</h1>
        <div className='prices-consult-text'>
          <p>Como persona que ha vivido en distintos lugares, ofrezco atención psicológica en diversos países provenientes de América Latina y Europa, si vives en México, España o países de habla hispana, puedes tomar terapia online sin importar la distancia. Si deseas consultarme el precio en tu tipo de moneda, escríbeme.</p>
        </div> 
        <div className='price-box-container'>
          <div className='price-box'>
            <h3>Plan Semanal</h3>
            <div className='price-box-discount'>
              {/* <h2></h2> */}
              <h3 id='price-weekly'>Ya</h3>
            </div>
            <p>1 Sesión de 1 hora <br/>(pago semanal)</p>
          </div>
          <div className='price-box'>
            <h3>Plan Mensual</h3>
            <div className='price-box-discount'>
              <h2>-15%</h2>
              <h3>descuento</h3>
            </div>
            <p>4 Sesiones por mes<br/>(1 semanalmente)</p>
          </div>
          <div className='price-box'>
            <h3>Plan Bimestral</h3>
            <div className='price-box-discount'>
              <h2>-20%</h2>
              <h3>descuento</h3>
            </div>
            <p>8 Sesiones por 2 meses<br/>(4 mensualmente)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prices;