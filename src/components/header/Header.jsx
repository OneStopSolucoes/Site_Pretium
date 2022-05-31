import React from "react";
import "./header.css";

import test2 from "../../assets/test2.png";
import BOTAO from "./BOTAO";
 
const Header = () => {
  return (
    <header>
       <div className="botaoLogin">
      <BOTAO/>
      </div>
      <div className="container header__container">
        <h1>Apresentamos o </h1>
        <div>
          <img className="logo" src={test2} alt="logo" />
        </div>

        <h1> </h1>

        <div className="me"></div>

        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
