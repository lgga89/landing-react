import React from "react";

function Testimonios() {
  return (
    <div className="container__testimonials">
      <img
        className="image__testimonials"
        src={require("../images/testimonio-emma.png")}
        alt="foto de Shawn"
      />
      <div className="container__text--testimonials">
        <p className="name__testimonial">Emma Bostian en Suecia</p>
        <p className="post__testimonial">Ingeniera de Sofware en Spotify</p>
        <p className="txt__testimonial">
          Siempre he tenido problemas para aprender JavaScript. He tomado muchos
          cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar
          JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp
          me dio las habilidades y la confianza que necesitaba para conseguir el
          trabajo de mis sueños como ingeniero de software en Spotify
        </p>
      </div>
    </div>
  );
}

export default Testimonios;
