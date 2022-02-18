import React from "react";
import logo from "@logos/logo.svg";
import "./index.scss"; //!s@

const Header = () => { return ( <>
<img className="logo" src={logo} alt="logo"/>
<div className="title-container">
  <h1>LA PROXIMA REVOLUCION EN EL INTERCAMBIO DE CRIPTOMONEDAS</h1>
  <p>Batatabit te ayuda a navegar entre los precios y tendencias</p>
  <a clasName="header-button" href="">Conoce nuestros planes <span>i</span></a>
</div>
</> ) }; export {  Header }; 