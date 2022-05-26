import React from "react";
import "./header.css";
import CTA from "./CTA";
import test2 from "../../assets/test2.png";



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Apresentamos o </h1>
          <div>
          <img className="logo" src={test2} alt="logo" />
          </div>

        <h1> </h1>

        <CTA />
       

        <div className="me"></div>
        


        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
