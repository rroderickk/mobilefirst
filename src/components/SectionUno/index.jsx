import React, { useEffect, useState } from "react";
import { useGetPrices } from "@hooks/useGetPrices";
import { Tcoin } from "./Tcoin";
import { TableComissions } from "./TableComissions";
import "./index.scss";//!@

const SectionUno =()=> { 
const [coins, setCoins] = useState([]);

const [reload, setR] = useState([]);
const handle =()=> {
  const x=[];
  const newR=[...x];
  newR.push(1);
  console.log("Actualizando...@==>",newR);
  setR(newR);
}
const reloadPrices =(ms)=>setTimeout(()=>handle(),ms)

useEffect(() => {
  setCoins(useGetPrices(setCoins));
  reloadPrices(13000);
}, [reload]);

// const timeStamp =()=> new Date().toJSON().slice(0,19).replace("T"," ");
const timeStamp =()=> (new Date()).toString().slice(0,25);

return (  <> 
<main>
<section className="main-exchange-container">
  <div     className="main-exchange-backgroundImg"></div>
  <div     className="main-exchange-container-title">
    <h2>We visualize all the exchange rates</h2>
    <p>we bring information in real time of the most important exchange houses and currencies in the world</p>
  </div>
  <section className="main-table-container">
    <div    className="main-currency-table">
      <p    className="currency-title-table">Coins</p>
      <div  className="currency-table-container">
        <table>
          <tbody>
{ coins.length>0
? (coins.map(moneda=> <Tcoin coin={moneda} key={moneda.id}/>))
: (<th className="NoCoins">...Coins Not Found!</th>) }
          </tbody>
        </table>
      </div>
    </div>
      <div  className="currency-table-date">
        <b>Actualizado: </b>{timeStamp()}
      </div>
      <TableComissions/>
  </section>
</section>
</main>
</> ) }; export { SectionUno };