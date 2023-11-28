import React from "react";

export function Testimonios() {
  return (
    <div className="container__testimonials">
      <img
        className="image__testimonials"
        src={require("../images/react.png")}
        alt="foto react"
      />
      <div className="container__text--testimonials">
        <p className="name__testimonial">REACT</p>
        <p className="post__testimonial">Libreria React</p>
        <p className="txt__testimonial">
        React es una biblioteca de JavaScript desarrollada por 
        Facebook que se utiliza para construir interfaces de 
        usuario interactivas y reactivas. Se enfoca en la creación 
        de componentes reutilizables que gestionan su propio 
        estado y se pueden componer para construir interfaces 
        de usuario más complejas.
        </p>
      </div>
    </div>
  );
}
