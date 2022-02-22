import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPrices } from "@hooks/useGetPrices";

import { CoinContainer } from "./CoinContainer";
import "./index.scss";

const AllCryptos =()=> { 
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


return ( <>
<section className="allcriptos-section-container">
  <h1 className="allcriptos-title">All Cryptos</h1>
  <Link to="/" className="allcriptos-title">En construccion...Volver</Link>
  <div className="allcriptos-container">
    { coins.length>0
    ? (coins.map(moneda=> <CoinContainer coin={moneda} key={moneda.id}/>))
    : (<tbody className="NoCoins">...Coins not found!</tbody>) }
  </div>
</section>

</> ) }; export { AllCryptos };