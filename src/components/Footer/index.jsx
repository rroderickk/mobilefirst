import React from "react";
import { Link } from "react-router-dom";
import logoPatata from "@logos/papapabit.svg";
import "./index.scss";

const Footer =()=> { return ( <>

<section>
  {/* <ul>
    <li><Link to="">i</Link></li>
    <li><Link to="">i</Link></li>
    <li><Link to="">i</Link></li>
  </ul> */}
</section>
{/* <img src={logoPatata} alt="logoPatata" style={{width: "180px"}}/> */}
<div class="cheat-person">
  <div class="cheat-container">
    <div class="container-inner"> <img class="papa-circle" src={logoPatata}/> </div>
  </div>
  <div class="cheat-divider"></div>
  <div class="cheat-name">RodrigoMoreno</div>
  <div class="cheat-title">CheatModes4</div>
</div>
<div>footer</div>
<section></section>


</> ) }; export { Footer };