import React from "react";
import "./index.scss";

const SectionDos =()=> { return ( <> 
<section className="main-product-detail">

<div className="product-detail-title">
  <span className="batata-logo"/>
  <h2>We create a product without comparison</h2>
  <p>Reliable and designed for daily use</p>
</div>
<section className="product-card-container">
  <article className="product-detail-card">
    <span  className="icon clock"></span>
    <p     className="product-card-title">Real time</p>
    <p     className="product-card--body">Our API takes minute by minute information about the rates that most determine the behavior</p>
  </article>
  <article className="product-detail-card">
    <span  className="icon eye"></span>
    <p     className="product-card-title">No hidden fees</p>
    <p     className="product-card--body">Neither in the purchase nor at the time of departure Papapabit always shows you the real cost of what you are acquiring</p>
  </article>
  <article className="product-detail-card">
    <span  className="icon dollar"></span>
    <p     className="product-card-title">Compare currencies</p>
    <p     className="product-card--body">No more rumors, with Papapabit you will know the real value and you will compare all the coins</p>
  </article>
  <article className="product-detail-card">
    <span  className="icon check"></span>
    <p     className="product-card-title">Reliable information</p>
    <p     className="product-card--body">Our sources are 100% verified and we continue to audit their content as they are updated.</p>
  </article>

</section>

</section>
</>) }; export { SectionDos };