import React from "react";
import logo from "@logos/papapabit.svg";
import "./Header.scss"; //!s@

const handleRef =(param)=>  window.scrollTo(0, param);

const Header =()=> { return ( <>

<header className="headerContainer">
<img className="logo" src={logo} alt="logo"/>
<div className="title-container">
  <h1>THE NEXT REVOLUTION IN CRYPTOCURRENCY EXCHANGE</h1>
  <p>PapapaBit helps you navigate between prices and trends</p>
  <a id="header-button" href="#plans" /*onClick={()=>handleRef(4000)}*/ >Know our plans<span id="span"/></a>
</div>
</header>

</> ) }; export {  Header }; 