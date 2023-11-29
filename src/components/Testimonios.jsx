import React from "react";

export function Testimonios(props) {
  return (
    <div className="container__testimonials">
      <img
        className="image__testimonials"
        src={require(`../images/${props.imagen}.png`)}
        alt="foto react"
      />
      <div className="container__text--testimonials">
        <p className="name__testimonial">{props.name}</p>
        <p className="post__testimonial">{props.post}</p>
        <p className="txt__testimonial">{props.testimonial}</p>
      </div>
    </div>
  );
}
