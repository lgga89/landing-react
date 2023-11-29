import "./index.scss";
import { Testimonios } from "./components/Testimonios";

export function App() {
  return (
    <div className="App">
      <h1>ESTO SON LAS LIBRERIAS Y FRAMEWORS MAS USADOS</h1>
      <Testimonios
        name="React "
        post="Libreria"
        testimonial="React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y reactivas. Se enfoca en la creación de componentes reutilizables que gestionan su propio estado y se pueden componer para construir interfaces de usuario más complejas."
        imagen="react"
      />
      <Testimonios
        name="Angular "
        post="Framework"
        testimonial="Angular es un framework de desarrollo web y aplicación de código abierto mantenido por Google y una comunidad de desarrolladores. Angular se utiliza para construir aplicaciones web de una sola página (SPA) y aplicaciones web empresariales más complejas."
        imagen="angular"
      />
      <Testimonios
        name="Vue "
        post="Framework"
        testimonial="
        Vue.js, comúnmente conocido como Vue, es un framework progresivo de JavaScript utilizado para construir interfaces de usuario (UI) y aplicaciones de una sola página (SPA). Fue creado por Evan You y lanzado por primera vez en 2014. Vue se destaca por su enfoque incremental, lo que significa que puedes adoptar y utilizar tanto o tan poco de Vue como desees en un proyecto existente."
        imagen="vue"
      />
    </div>
  );
}
