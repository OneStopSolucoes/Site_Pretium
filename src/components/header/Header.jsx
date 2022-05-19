import React from "react";
import "./header.css";
import CTA from "./CTA";
import logo from "../../assets/logo.png";
import HeaderSocial from "./HeaderSocials";
import test from '../../assets/test.png';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Apresentamos o </h3>

        <img className="logo" src={logo} alt="logo" />

        <h1> </h1>

        <CTA />
       

        <div className="me"></div>
        <img className="me" src={test} alt="me" />


        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
