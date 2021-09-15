import React from 'react';
// import CountryList from '../../utilities/country_list.js';
import { FacebookIcon, InstagramIcon, SkypeIcon, EmailIcon, WhatsappIcon } from '../../utilities/icons.js';
import './Contact.css';

const Contact = ({ handleToggleLegal }) => {
  return (
    <>
      <div id='contacto'></div>
      <div className='contact-container'>
        <h1>Contacto</h1>
        <div className='contact-details-form-container'>

          <div className='contact-details-container'>
            <div className='contact-detail'>
              <div className='contact-icon'>
                <a 
                  href='mailto:cris.conrique@outlook.com'>
                  <EmailIcon />
                </a>
              </div>
              <div className='contact-info'>
                <a href='mailto:cris.conrique@outlook.com'>
                  <h3>cris.conrique@outlook.com</h3>
                </a>
              </div>
            </div>
            <div className='contact-detail'>
              <div className='contact-icon'>
                <a 
                  target='_blank'
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=27726406660">
                  <WhatsappIcon />
                </a>
              </div>
              <div className='contact-info'>
                <a 
                  target='_blank'
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=27726406660">
                  <h3>+27 72 640 6660</h3>
                </a>
              </div>
            </div>
            <div className='contact-detail'>
              <div className='contact-icon'>
                <a 
                  target='_blank'
                  rel="noreferrer"
                  href='https://join.skype.com/invite/ckkLqnyKyirz'>
                  <SkypeIcon />
                </a>
              </div>
              <div className='contact-info'>
                <a 
                  target='_blank'
                  rel="noreferrer"
                  href='https://join.skype.com/invite/ckkLqnyKyirz'>
                  <h3>live:crisconrique</h3>
                </a>
              </div>
            </div>

            <div className='contact-social-media'>
              <h3>Sígueme</h3>
              <div className='contact-social-icons'>
                <a 
                  target='_blank'
                  rel="noreferrer"
                  href='https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461'>
                  <FacebookIcon />
                </a>
                <a 
                  target='_blank'
                  rel="noreferrer"
                  href='https://www.instagram.com/psicologa_cristinaconrique/'>
                  <InstagramIcon />
                </a>
              </div>
              
            </div>
          </div>

          <div className='contact-form-container'>
            <div>
              <form lang='es' className='contact-form' id='contact-form' action='mailto:cris.conrique@outlook.com' method='POST' encType='multipart/form-data'>
              <div className='contact-form-left'>
                <div className='contact-form-element bottom-margin'>
                  <label htmlFor='name'>Nombre</label><br/>
                  <input className='contact-form-input' name='name' id='name' type='text'></input>
                </div>
                <div className='contact-form-element bottom-margin'>
                  <label htmlFor='email'>Email *</label><br/>
                  <input required className='contact-form-input' name='email' id='email' type='email'></input>
                </div>
                <div className='contact-form-element bottom-margin'>
                  <label htmlFor='tel'>Teléfono</label><br/>
                  <input className='contact-form-input' name='tel' id='tel' type='tel'></input>
                </div>
                <div className='contact-form-element'>
                  <label required htmlFor='country'>País de Residencia *</label><br/>
                  {/* <select className='contact-form-dropdown' name='country' id='country'>
                    <CountryList />
                  </select> */}
                  <input required className='contact-form-input' name='country' id='country' type='text'></input>
                </div>
              </div>
              <div className='contact-form-right'>
                <div className='contact-form-textarea'>
                  <label htmlFor='message'>Escribe mensaje *</label><br/>
                  <textarea required name='message' id='message' type='textarea'></textarea>
                </div>
                <div className='contact-form-checkbox-container'>
                  <div className='contact-form-checkbox'>
                    <input required type="checkbox" id="checkbox" name="checkbox" defaultValue="Aceptado"></input>
                  </div>
                  <div className='contact-form-checkbox-label'>
                    <label htmlFor="checkbox">He leído y acepto el aviso legal y la política de privacidad *</label>
                    <p onClick={handleToggleLegal}><strong>Ver aviso legal y la política de privacidad</strong></p>
                  </div>
                </div>
                <button type='sumbit' form='contact-form'>Enviar</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;