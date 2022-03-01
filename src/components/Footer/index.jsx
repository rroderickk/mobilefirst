import React from "react";
import logoPatata from "@logos/footer.svg";
import "./index.scss";//!@

const Footer =()=> { return ( <>
<footer className="foo">
<section className="section--footer">
    <ul className="cheat-list">
      <li><a href="https://github.com/rroderickk/" target="_blank" rel="noreferrer noopener">Github</a></li>
      <li><a href="https://www.linkedin.com/in/rodrigo-moreno-rr/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
      <li><a href="https://twitter.com/cheatmodes4/" target="_blank" rel="noreferrer noopener">Twitter</a></li>
    </ul>
  <div className="cheat-person">
    <div className="cheat-container">
      <div className="container-inner"> <img className="papa-circle" src={logoPatata}/> </div>
    </div>
    <div className="cheat-name">Rodrigo Moreno
      <div className="cheat-divider"></div>
      <div className="cheat-title">@CheatModes4</div>
    </div>
  </div>
</section>
</footer>
</> ) }; export { Footer };