import React from "react";
import logo from "@logos/logo.svg";
import "./Header.scss"; //!s@

const Header = () => { return ( <>
<header className="headerContainer">
<img className="logo" src={logo} alt="logo"/>
<div className="title-container">
  <h1>THE NEXT REVOLUTION IN CRYPTOCURRENCY EXCHANGE</h1>
  <p>Batatabit helps you navigate between prices and trends</p>
  <a id="header-button" href="">Know our plans<span id="span"/></a>
</div>
</header>
</> ) }; export {  Header }; 