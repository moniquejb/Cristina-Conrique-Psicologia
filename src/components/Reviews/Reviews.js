import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div id="resenas"></div>
      <div className="reviews-container">
        <h1 className="col-12 text-center">Reseñas</h1>
        <div id="reviewsCarousel" className="carousel slide col-12">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Sin duda alguna hacer terapia online con la Psicóloga Cristina Conrique ha sido un acierto para mí. Elegí este medio porque me encuentro ahora viviendo en Madrid y era la forma más conveniente y accesible en mis
                        circunstancias. Estuvimos en sesión por cinco meses y desde el comienzo me sentí siempre escuchada y verdaderamente comprendida y acompañada por ella. Es una terapeuta muy cercana, se esforzaba siempre por mostrarme
                        herramientas útiles y prácticas para lidiar con problemas personales. En esos cinco meses, sentía que avanzábamos mucho en terapia y en mi vida cotidiana. La Psicóloga Conrique me ayudó a recobrar ese control sobre mi vida que
                        estaba buscando después de la pandemia, y al finalizar mi terapia, solo puedo estar verdaderamente agradecida por su ayuda. Una última cosa, debo decir que no hay nada más cómodo que recibir terapia desde la comodidad de tu
                        casa. La recomiendo al 100%.
                      </p>
                      <footer class="blockquote-footer">M.H.</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>Muy profesional en lo que hace. Me gusta mucho que puede crear un buen ambiente de confianza haciéndome sentir muy cómodo y seguro, me ha ayudado muchísimo.</p>
                      <footer class="blockquote-footer">Jorge Lem</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Llevo ya un tiempo aquí y me he sentido muy comoda, no me siento presionada y definitivamente he notado un cambio en diferentes áreas de mi vida. Me ayuda a mejorar, me hace sentir orgullosa de mí misma y sobre todo me brinda
                        demasiada confianza. 🧡
                      </p>
                      <footer class="blockquote-footer">G.S.M.</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Recomiendo mucho a Cris como psicóloga. Llevo unos cuantos meses en terapia con ella y me siento bastante mejor en general. Me parece que organiza y prepara las sesiones muy bien, siempre con preguntas interesantes y bien
                        estructuradas, que me ayudan a enfocarme en diferentes áreas en las que quiero trabajar y reflexionar. Cris me parece muy honesta y accesible, y es muy flexible lo cual hace posible que la terapia se ajuste a mi estilo de
                        vida. También es super perceptiva y con un montón de herramientas lo cual me ayuda mucho a darme cuenta de detalles que me ayudan a mejorar, y a poner en marcha nuevos hábitos y destrezas. Honestamente creo que con Cris estoy
                        logrando mis objetivos, y estoy muy contenta de haberla elegido 🙂.
                      </p>
                      <footer class="blockquote-footer">S.M.H.</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Sus sesiones me fueron realmente útiles en una etapa de mi vida en la que necesitaba alguien capaz de, no solo escucharme, sino de asesorarme y que me hiciera sentir comprendido. En mi caso, al ser un tema de identidad de
                        género, me encontraba solo y especialmente vulnerable ya que me provocaba ansiedad tener que enfrentarme a la transición social y a explicar a mi círculo de amigos y familiares mi situación. Realmente Cristina supo darme las
                        herramientas necesarias para afrontar esos problemas y poder comenzar a ser feliz siendo yo mismo.
                      </p>
                      <footer class="blockquote-footer">S.</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Mi proceso en terapia con Cris ha sido la mejor. Puedo decir que desde que empecé mi proceso, Cris siempre ha estado muy atenta conmigo y que también se siente un espacio muy seguro y libre. Puedo decir que en poco tiempo tuve
                        muchos avances y que gracias a Cris hoy me siento mucho mejor 🤍
                      </p>
                      <footer class="blockquote-footer">Maren</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Una vez dije en una terapia que mi objetivo de ir a terapia era porqué quería florecer; me sentía como una flor marchitada, llena de confusión, tristeza, soledad, frustración, lágrimas, cansancio. No fue hasta que empecé a ir
                        a terapia con Cris que logré eso que tanto anhelaba. Me dio un espacio seguro donde poder expresarme, me ayudó a entender por qué me sentía como me sentía y a gestionar mis emociones; me dio las herramientas para enfrentarme
                        al mundo en el que sentía que no encajaba y poco a poco empecé a abrir pétalo tras pétalo. Estoy muy agradecida con Cris por acompañarme en esa transformación donde he podido florecer y experimentar la vida desde una forma más
                        presente, sana y feliz. Recomiendo mucho a la gente que contacten a Cris, porqué tener un buen psicólogo que te acompañe en tu proceso hace una gran diferencia. Muchas muchísimas gracias, Cris.
                      </p>
                      <footer class="blockquote-footer">N.A.G.</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-12 d-flex justify-content-center">
                <div class="card col-11 col-xl-10 col-xxl-9">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        La conexión con Cris fue casi instantánea, le estoy muy agradecida por la ayuda, atención, dulzura y sobre todo profesionalidad que mostró durante la terapia. Desde el principio me trasmitió mucha seguridad por lo que encontré
                        fácil avanzar, además, las sesiones están muy bien preparadas y personalizadas.
                      </p>
                      <footer class="blockquote-footer">Y.M.</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
