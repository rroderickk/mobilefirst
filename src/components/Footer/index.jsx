import React from "react";
import logoPatata from "@logos/footer.svg";
import "./index.scss";//!@

const Footer =()=> { return ( <>
<footer className="foo">
<section>
    <ul className="cheat-list">
      <li><a href="https://github.com/rroderickk/" target="_blank" rel="noreferrer noopener">Github</a></li>
      <li><a href="https://www.linkedin.com/in/rodrigo-moreno-rr/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
      <li><a href="https://twitter.com/cheatmodes4/" target="_blank" rel="noreferrer noopener">Twitter</a></li>
    </ul>
  <div class="cheat-person">
    <div class="cheat-container">
      <div class="container-inner"> <img class="papa-circle" src={logoPatata}/> </div>
    </div>
    <div class="cheat-name">Rodrigo Moreno
      <div class="cheat-divider"></div>
      <div class="cheat-title">@CheatModes4</div>
    </div>
  </div>
</section>
</footer>
</> ) }; export { Footer };