import React from 'react'
import "./index.scss";//!@

const Card =({ CardData })=> { return ( <>

<article className="plans-container-card">
  <p className="recomendado">{CardData.plan}</p>
  <div className="plan-info-container">
    <h3 className="plan-card-title">{CardData.membresy} payment</h3>
    <p  className="plan-card-price"><sup>$</sup>{CardData.dollarCost}</p>
    <p  className="plan-card-saving">{CardData.info}</p>
    <button className="plan-card-ca" onClick={()=>alert("...soon")}>Choose this <span/></button>
  </div>
</article>

</> ) }; export { Card };