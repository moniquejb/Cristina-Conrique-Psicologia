import React, { useState, useEffect, useRef } from 'react';
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { FacebookIcon, InstagramIcon, SkypeIcon, EmailIcon, WhatsappIcon } from '../../utilities/icons.js';
import './Contact.css';

const Contact = ({ handleToggleLegal, windowHeight, windowWidth, originalCountry }) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isCountryValid, setIsCountryValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [submitButtonColor, setSubmitButtonColor] = useState('form-disabled');
  const [detectCaptcha, setDetectCaptcha] = useState(false);
  const [toggleCaptcha, setToggleCaptcha] = useState('hide-item');
  const [toggleSubmit, setToggleSubmit] = useState('show-item');
  const [submitButtonText, setSubmitButtonText] = useState('Enviar');

  const form = useRef();
  const grecaptchaObject = window.grecaptcha;

  function onChangeCaptcha() {
    setDetectCaptcha(true);
    setTimeout(() => {
      if(detectCaptcha) {
        setDetectCaptcha(false);
      }
    }, 1990);
  }

  const sendEmail = (e) => {
    if (submitButtonColor === 'form-fields-filled') {
      e.preventDefault();

      emailjs.sendForm('service_pt2n8ym', 'template_1jl06pl', form.current, 'user_4lPfz90TSSp9NOxFjUaTy')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      form.current.reset();

      // Clear form checks
      setSubmitButtonText('¡Enviado!')
      setIsCountryValid(false);
      setIsEmailValid(false);
      setIsMessageValid(false);
      setIsPrivacyChecked(false);
      setSubmitButtonColor('form-submitted');
      setDetectCaptcha(false);
      setToggleCaptcha('hide-item');
      setToggleSubmit('show-item');
      grecaptchaObject.reset();
      document.getElementById('checkbox').checked = false;
    }
  }

  //Checks that required fields are entered 
  const checkInputs = ({ target }) => {
    let currentField = target.id;
    let currentInput = target.value;
    const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (currentField === 'email') {
      if (regexEmail.test(currentInput)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
        setSubmitButtonColor('form-disabled');
      }
    }

    if (currentField === 'country') {
      if (currentInput.length >= 2) {
        setIsCountryValid(true);
      } else {
        setIsCountryValid(false);
        setSubmitButtonColor('form-disabled');
      }
    }



    if (currentField === 'message') {
      if (currentInput.length >= 2) {
        setIsMessageValid(true);
      } else {
        setIsMessageValid(false);
        setSubmitButtonColor('form-disabled');
      }
    }

    if (currentField === 'checkbox') {
      if (target.checked) {
        setIsPrivacyChecked(true);
      } else {
        setIsPrivacyChecked(false);
        setSubmitButtonColor('form-disabled');
      }
    }
  }

  useEffect(() => {
    //Predetermine and fill in current country on form, leave blank if not on predetermined list
    const predetermineCountry = {
      MX: 'México',
      US: 'Estados Unidos',
      CA: 'Canadá',
      ZA: 'Sudáfrica',
      ES: 'España',
      AR: 'Argentina',
      PE: 'Peru',
      GB: 'Gran Bretaña',
      AU: 'Australia',
      NZ: 'Nueva Zelanda',
      VE: 'Venezuela',
      UY: 'Uruguay',
      GT: 'Guatemala',
      CL: 'Chile',
      HN: 'Honduras',
      CO: 'Colombia'
    };

    const countryKeys = Object.keys(predetermineCountry);

    if (countryKeys.includes(originalCountry)) {
      document.getElementById('country').value = predetermineCountry[originalCountry];
    }
  }, [originalCountry]);


  useEffect(() => {
    let countryField = document.getElementById('country').value.length;
    //Add class to change submit button color if required fields are filled out
    if ((isCountryValid && isEmailValid && isMessageValid && isPrivacyChecked && detectCaptcha)
      || ((countryField > 0) && isEmailValid && isMessageValid && isPrivacyChecked && detectCaptcha)) {
      if (grecaptchaObject && grecaptchaObject.getResponse().length !== 0) {
        setSubmitButtonColor('form-fields-filled');
        setToggleCaptcha('hide-item');
        setToggleSubmit('show-item');

        if(submitButtonText === '¡Enviado!'){
          setSubmitButtonText('Enviar');
        }
      }
    } else if ((isCountryValid && isEmailValid && isMessageValid && isPrivacyChecked)
      || ((countryField > 0) && isEmailValid && isMessageValid && isPrivacyChecked)) {
      setSubmitButtonColor('showCaptcha');
      setToggleCaptcha('show-item');
      setToggleSubmit('hide-item');
    } else {
      if(submitButtonText === '¡Enviado!'){
        setSubmitButtonColor('form-submitted');
        setToggleCaptcha('hide-item');
        setToggleSubmit('show-item');
      } else {
        setSubmitButtonColor('form-disabled');
        setToggleCaptcha('hide-item');
        setToggleSubmit('show-item');
      }
    }
  }, [isCountryValid, isEmailValid, isMessageValid, isPrivacyChecked, submitButtonColor, detectCaptcha, submitButtonText]);

  return (
    <>
      <div id='contacto'></div>
      <div className='contact-container'>
        <h1>Contacto</h1>
        <div className='contact-details-form-container'>

          <div className='contact-details-container'>
            <div className='contact-details-box'>
              <div className='desktop-contact-details'>
                <div className='contact-detail'>
                  <div className='contact-icon'>
                    <a
                      href='mailto:info@psicologaconrique.com'>
                      <EmailIcon />
                    </a>
                  </div>
                  <div className='contact-info'>
                    <a href='mailto:info@psicologaconrique.com'>
                      <h3>info@psicologaconrique.com</h3>
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
              </div>

              {windowWidth > windowHeight && windowWidth >= 1280
                ? <div className='contact-social-media'>
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
                : <div className='mobile-contact-details'>
                  <div className='contact-detail'>
                    <div className='contact-icon'>
                      <a target='_blank'
                        rel="noreferrer"
                        href='https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461'>
                        <FacebookIcon />
                      </a>
                    </div>
                    <div className='contact-info'>
                      <a target='_blank'
                        rel="noreferrer"
                        href='https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461'>
                        <h3>Psicóloga Cristina Romo Conrique</h3>
                      </a>
                    </div>
                  </div>
                  <div className='contact-detail'>
                    <div className='contact-icon'>
                      <a target='_blank'
                        rel="noreferrer"
                        href='https://www.instagram.com/psicologa_cristinaconrique/'>
                        <InstagramIcon />
                      </a>
                    </div>
                    <div className='contact-info'>
                      <a target='_blank'
                        rel="noreferrer"
                        href='https://www.instagram.com/psicologa_cristinaconrique/'>
                        <h3>@psicologa_cristinaconrique</h3>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <div className='contact-form-container'>
            <div className='contact-form-box'>
              <form ref={form} lang='es' className='contact-form' id='contact-form' encType='multipart/form-data' onSubmit={sendEmail}>
                <div className='contact-form-left'>
                  <div className='contact-form-element bottom-margin'>
                    <label htmlFor='name'>Nombre</label><br />
                    <input className='contact-form-input' name='name' id='name' type='text'></input>
                  </div>
                  <div className='contact-form-element bottom-margin'>
                    <label htmlFor='email'>Email *</label><br />
                    <input required onChange={checkInputs} className='contact-form-input' name='email' id='email' type='email'></input>
                  </div>
                  <div className='contact-form-element bottom-margin'>
                    <label htmlFor='tel'>Teléfono</label><br />
                    <input className='contact-form-input' name='tel' id='tel' type='tel'></input>
                  </div>
                  <div className='contact-form-element'>
                    <label required htmlFor='country'>País de Residencia *</label><br />
                    <input required minLength={2} onChange={checkInputs} className='contact-form-input' name='country' id='country' type='text'></input>
                  </div>
                </div>
                <div className='contact-form-right'>
                  <div className='contact-form-textarea'>
                    <label htmlFor='message'>Escribe mensaje *</label><br />
                    <textarea required minLength={2} onChange={checkInputs} name='message' id='message' type='textarea'></textarea>
                  </div>
                  <div className='contact-form-checkbox-container'>
                    <div className='contact-form-checkbox'>
                      <input required onChange={checkInputs} type="checkbox" id="checkbox" name="checkbox" defaultValue="aceptado"></input>
                    </div>
                    <div className='contact-form-checkbox-label'>
                      <label htmlFor="checkbox">He leído y acepto el aviso legal y la política de privacidad *</label>
                      <p id='legal-warning-label' onClick={handleToggleLegal}><strong id='legal-warning-label-strong'>Ver aviso legal y la política de privacidad</strong></p>
                    </div>
                  </div>
                  <ReCAPTCHA className={`${toggleCaptcha} g-captcha`} sitekey="6LfVskEdAAAAADY9H39WjrRtdmTrYLhtd-QgHrEk" onChange={onChangeCaptcha} />
                  <button className={`${submitButtonColor} ${toggleSubmit}`} type='sumbit' form='contact-form'>{submitButtonText}</button>
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