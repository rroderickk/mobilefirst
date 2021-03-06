import React, { useEffect, useState } from "react";
import { Link            } from "react-router-dom";
import { useGetPrices    } from "@hooks/useGetPrices";
import { Tcoin           } from "./Tcoin";
import { TableComissions } from "./TableComissions";
import "./index.scss";//!@

const timeStamp =()=> (new Date()).toString().slice(0,25);
const SectionUno =()=> { 
const [coins, setCoins] = useState([]);

const [reload, setR] = useState([]);
const handleReload =()=> {
  const x=[];
  const newR=[...x];
  newR.push(1);
  console.log("Actualizando...@==>",newR);
  setR(newR);
}
const reloadPrices =(milliseconds)=>setTimeout(()=>handleReload(),milliseconds);

useEffect(() => {
  setCoins(useGetPrices(setCoins));
  reloadPrices(13000);
}, [reload]);

// const timeStamp =()=> new Date().toJSON().slice(0,19).replace("T"," ");
// function timeStamp(){ (new Date()).toString().slice(0,25);}

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
 : (<tbody className="NoCoins">...Coins not found!</tbody>) }
          </tbody>
        </table>
      </div>
    </div>
    <Link to="/allcryptos" className="button-all">All Crypto's</Link>
    <div  className="currency-table-date">
      <b>Updated: </b>{timeStamp()}
    </div>
    <TableComissions/>
  </section>
</section>
</main>
</> ) }; export {SectionUno, timeStamp};