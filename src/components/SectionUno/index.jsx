import React, {useEffect, useState} from "react";
import { useGetPrices } from "@hooks/useGetPrices";
import { Td } from "./Td";
import "./index.scss";//!@

const SectionUno =()=> { 
const [coins, setCoins] = useState([]);

const [reload, setR] = useState([]);
const handle =()=> {
  const x=[];
  const newR=[...x];
  newR.push(1);
  console.log("@==>",newR);
  setR(newR);
}
const reloadPrices =(ms)=>setTimeout(()=>handle(),ms)

useEffect(() => {
  setCoins(useGetPrices(setCoins));
  // reloadPrices(13000);
}, [reload]);

const timeStamp =()=> new Date().toJSON().slice(0,23);

return (  <> 
<main>
  <section className="main-exchange-container">
  <div className="main-exchange-backgroundImg"></div>
  <div className="main-exchange-container-title">
    <h2>We visualize all the exchange rates</h2>
    <p>we bring information in real time of the most important exchange houses and currencies in the world</p>
  </div>
  <section     className="main-tables-container">
    <div       className="main-currency-table">
    <p         className="currency-title-table">Coins</p>
      <div     className="currency-table-container">
        <table>
          <thead>
              {coins.length>0 && coins.map(moneda=>
                <Td coin={moneda} key={moneda.id}/>
              )}
          </thead>
        </table>
      </div>
      <div className="currency-table-date">
        <p><b>Actualizado: </b>{timeStamp()}</p>
      </div>
    </div>
  </section>
  </section>
</main>
</> ) }; export { SectionUno };