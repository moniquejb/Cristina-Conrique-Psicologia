import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      text: "Mi experiencia con Cris fue maravillosa, la terapia que fuimos haciendo se enfocó siempre en mi persona, en cómo sacarme de las situaciones complejas y darme las herramientas que necesitaba, siempre puntual y presente, se hace una persona a la que es muy fácil confiarle las cosas y sobre todo siempre te ayuda con integridad y conocimientos.",
      author: "T.F."
    },
    {
      text: `Mi experiencia con la psicóloga Cristina Conrique ha sido increíblemente transformadora. Desde la primera sesión, su empatía, paciencia y profesionalismo me ayudaron a sentirme seguro para abordar los aspectos más profundos de mi vida. A lo largo de las sesiones, me proporcionó herramientas que no solo me ayudaron a navegar mejor mis emociones, sino que también me permitieron crecer como persona, cultivar la autocompasión y encontrar un equilibrio entre mis pensamientos, mi actuar y mi bienestar emocional. Cristina no solo me guió en el proceso de identificar patrones y creencias que me estaban limitando, sino que también me ayudó a conectar con recursos que ni siquiera sabía que existían. Siempre me sentí escuchado sin juicios, y ella supo cómo acompañarme con técnicas y enfoques adecuados para cada etapa de mi proceso, como persona disidente esto fue importantísimo para mi desde el comienzo. ¡Gracias por todo Cris!`,
      author: "Toni"
    },
    {
      text: "Sin duda alguna hacer terapia online con la Psicóloga Cristina Conrique ha sido un acierto para mí. Elegí este medio porque me encuentro ahora viviendo en Madrid y era la forma más conveniente y accesible en mis circunstancias. Estuvimos en sesión por cinco meses y desde el comienzo me sentí siempre escuchada y verdaderamente comprendida y acompañada por ella. Es una terapeuta muy cercana, se esforzaba siempre por mostrarme herramientas útiles y prácticas para lidiar con problemas personales. En esos cinco meses, sentía que avanzábamos mucho en terapia y en mi vida cotidiana. La Psicóloga Conrique me ayudó a recobrar ese control sobre mi vida que estaba buscando después de la pandemia, y al finalizar mi terapia, solo puedo estar verdaderamente agradecida por su ayuda. Una última cosa, debo decir que no hay nada más cómodo que recibir terapia desde la comodidad de tu casa. La recomiendo al 100%.",
      author: "M.H.",
    },
    {
      text: "Muy profesional en lo que hace. Me gusta mucho que puede crear un buen ambiente de confianza haciéndome sentir muy cómodo y seguro, me ha ayudado muchísimo.",
      author: "Jorge Lem",
    },
    {
      text: "Llevo ya un tiempo aquí y me he sentido muy cómoda, no me siento presionada y definitivamente he notado un cambio en diferentes áreas de mi vida. Me ayuda a mejorar, me hace sentir orgullosa de mí misma y sobre todo me brinda demasiada confianza. 🧡",
      author: "G.S.M.",
    },
    {
      text: "Recomiendo mucho a Cris como psicóloga. Llevo unos cuantos meses en terapia con ella y me siento bastante mejor en general. Me parece que organiza y prepara las sesiones muy bien, siempre con preguntas interesantes y bien estructuradas, que me ayudan a enfocarme en diferentes áreas en las que quiero trabajar y reflexionar. Cris me parece muy honesta y accesible, y es muy flexible lo cual hace posible que la terapia se ajuste a mi estilo de vida. También es súper perceptiva y con un montón de herramientas lo cual me ayuda mucho a darme cuenta de detalles que me ayudan a mejorar, y a poner en marcha nuevos hábitos y destrezas. Honestamente creo que con Cris estoy logrando mis objetivos, y estoy muy contenta de haberla elegido 🙂.",
      author: "S.M.H.",
    },
    {
      text: "Sus sesiones me fueron realmente útiles en una etapa de mi vida en la que necesitaba alguien capaz de, no solo escucharme, sino de asesorarme y que me hiciera sentir comprendido. En mi caso, al ser un tema de identidad de género, me encontraba solo y especialmente vulnerable ya que me provocaba ansiedad tener que enfrentarme a la transición social y a explicar a mi círculo de amigos y familiares mi situación. Realmente Cristina supo darme las herramientas necesarias para afrontar esos problemas y poder comenzar a ser feliz siendo yo mismo.",
      author: "S.",
    },
    {
      text: "Mi proceso en terapia con Cris ha sido la mejor. Puedo decir que desde que empecé mi proceso, Cris siempre ha estado muy atenta conmigo y que también se siente un espacio muy seguro y libre. Puedo decir que en poco tiempo tuve muchos avances y que gracias a Cris hoy me siento mucho mejor 🤍",
      author: "Maren",
    },
    {
      text: "Una vez dije en una terapia que mi objetivo de ir a terapia era porque quería florecer; me sentía como una flor marchitada, llena de confusión, tristeza, soledad, frustración, lágrimas, cansancio. No fue hasta que empecé a ir a terapia con Cris que logré eso que tanto anhelaba. Me dio un espacio seguro donde poder expresarme, me ayudó a entender por qué me sentía como me sentía y a gestionar mis emociones; me dio las herramientas para enfrentarme al mundo en el que sentía que no encajaba y poco a poco empecé a abrir pétalo tras pétalo. Estoy muy agradecida con Cris por acompañarme en esa transformación donde he podido florecer y experimentar la vida desde una forma más presente, sana y feliz. Recomiendo mucho a la gente que contacte a Cris, porque tener un buen psicólogo que te acompañe en tu proceso hace una gran diferencia. Muchas muchísimas gracias, Cris.",
      author: "N.A.G.",
    },
    {
      text: "La conexión con Cris fue casi instantánea, le estoy muy agradecida por la ayuda, atención, dulzura y sobre todo profesionalidad que mostró durante la terapia. Desde el principio me transmitió mucha seguridad por lo que encontré fácil avanzar, además, las sesiones están muy bien preparadas y personalizadas.",
      author: "Y.M.",
    },
    {
      text: "Cris me ha ayudado muchísimo en este proceso de terapia. Es comprensiva y súper empática, y hace que te sientas escuchado. Da muy buenos consejos y sus herramientas me han ayudado muchísimo en mi día a día. Le doy 5 estrellas muy merecidas. Si vuelvo a necesitar terapia, sin duda acudiré a ella.",
      author: "J.T.A.",
    },
  ];

  return (
    <div id="resenas">
      <div className="reviews-container">
        <h1 className="col-12 text-center">Reseñas</h1>
        <div id="reviewsCarousel" className="carousel slide col-12">
          <div className="carousel-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="col-12 d-flex justify-content-center">
                  <div className="card col-11 col-xl-10 col-xxl-9">
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p dangerouslySetInnerHTML={{ __html: review.text }}></p>
                        <footer className="blockquote-footer">{review.author}</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;