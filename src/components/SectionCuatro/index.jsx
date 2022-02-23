import React from "react";
import "./index.scss";

const SectionCuatro =()=> { return (<> 
<section id="plans" className="main-plans-container">

<div className="plans-title">
  <h2>choose the plan that best suits you</h2>
  <p>Any plan gives you access to our platform</p>
</div>
<section className="plans-container-slider">
<article className="plans-container-card">
  <p className="recomendado">Recommended</p>
  <div className="plan-info-container">
    <h3 className="plan-card-title">Annual payment</h3>
    <p  className="plan-card-price"><sup>$</sup> 99</p>
    <p  className="plan-card-saving">* Save $129 compared to the monthly plan</p>
    <button className="plan-card-ca">Choose this <span/></button>
  </div>
</article>
</section>

</section>
</>) }; export { SectionCuatro };