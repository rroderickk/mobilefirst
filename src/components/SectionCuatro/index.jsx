import React from "react";
import "./index.scss";
import { Card } from "./Card";

const CardData=[
{id: 0, dollarCost: 99,  plan: "Basic",    info:"* Save $129 compared to the daily plan",  membresy:"Monthly"  },
{id: 1, dollarCost: 199, plan: "Recommended", info:"* Save $159 compared to the monthly plan",membresy:"Quarterly"},
{id: 2, dollarCost: 499, plan: "Exclusive",info:"* Save $200 compared to the monthly plan",membresy:"Annual"   },
];

const SectionCuatro =()=> { return (<> 
<section id="plans" className="main-plans-container">

<div className="plans-title">
  <h2>Choose the plan that best suits you</h2>
  <p>Any plan gives you access to our platform</p>
</div>
<section className="plans-container-slider">
  {CardData.map(datos=><Card CardData={datos} key={datos.id}/>)}
</section>

</section>
</>) }; export { SectionCuatro };