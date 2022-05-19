import React from "react";
import "./portfolio.css";
import Gabriel from "../../assets/Gabriel.png";
import Brena from "../../assets/Brena.png";
import Brenno from "../../assets/Brenno.png";

const data = [
  {
    id: 1,
    image: Gabriel,
    name: "Gabriel Victor",
    title: "Product Owner & Software Engineer",
  },
  {
    id: 2,
    image: Brena,
    name: "Brena Monteiro",
    title: "Scrum Master && Software Engineer ",
    
  },
  {
    id: 3,
    image: Brenno,
    name: "Brenno Luan",
    title: "Back-end Developer",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> </h5>
      <h2>Nosso Time</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, name, title }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img  src={image} alt={title} />
                
              </div>
              <h5 className="name">{name}</h5>
              <h3>{title}</h3>
              
              <div className="portfolio__item-cta">
               
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
