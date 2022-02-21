import React from "react";
import "./index.scss";//!@

const Td =({ coin })=> { return ( <> 
{coin.id=="bitcoin" ?
<>
<tr>
  <td className="table__top">
    <img style={{width:"16%"}} src={coin.image}/>
    <th className="table__top-right table__right"> {coin.id}: </th>
    <td className="price">${coin.current_price}</td>
    {coin.price_change_24h<0
    ? <span className="spanDown"/>
    : <span className="spanUp"/>}
  </td>
</tr>
</>
: undefined}
{coin.id=="ethereum" ?
<>
<tr>
  <td>
    <img style={{width:"16%"}} src={coin.image}/>
    <th className="table__right"> {coin.id}:</th>
    <td className="price">${coin.current_price}</td>
    {coin.price_change_24h<0
    ? <span className="spanDown"/>
    : <span className="spanUp"/> }
  </td>
</tr>
</>
: undefined}
{coin.id=="ripple" ?
<>
<tr>
  <td>
    <img style={{width:"16%"}} src={coin.image}/>
    <th className="table__right"> {coin.id}:</th>
    <td className="price">${coin.current_price}</td>
    {coin.price_change_24h<0
    ? <span className="spanDown"/>
    : <span className="spanUp"/> }
  </td>
</tr>
</>
: undefined}
{coin.id=="stellar" ?
<>
<tr>
  <td className="table__bottom">
    <img style={{width:"16%"}} src={coin.image}/>
    <th>{coin.id}:</th>
    <td className="price">${coin.current_price}</td>
    {coin.price_change_24h<0
    ? <span className="spanDown"/>
    : <span className="spanUp"/> }
  </td>
</tr>
</>
: undefined}

</> ) }; export { Td };
















{/* tabla completa */}
{/* {coins.map(coin=><tr>{coin.id} : <td>{coin.current_price}</td></tr>)} */}

{/* por pedazos */}
{/* <tr>
  <td>{coin.id!=="bitcoin" ? null :`${coin.id}`}</td>
  <td>{coin.id!=="bitcoin" ? null :`${coin.current_price}`}</td>
</tr> */}
{/* <tr>
  <td>{coin.id=="ethereum" ? `${coin.id}`: null }</td>
  <td>{coin.id=="ethereum" ? `${coin.current_price}`: null }</td>
</tr> */}

{/* para el ejercicio pero trae muchos <p>vacios */}
{/* {<p>{coin.id=="bitcoin" ? `${coin.id}: ${coin.current_price} `: null}</p>}
{<p>{coin.id=="ethereum"? `${coin.id}: ${coin.current_price} `: null}</p>}
{<p>{coin.id=="ripple"  ? `${coin.id}: ${coin.current_price} `: null}</p>}
{<p>{coin.id=="stellar" ? `${coin.id}: ${coin.current_price} `: null}</p>} */}










/* idea */
//todo Se puede recargar solo el componente con un bucle algo asi?
/*
const r=0;
const reloadPrices =(r,ms)=>setTimeout((r) => console.log(r=1,reloadPrices()),2000);

const Td =({coin})=> { 

useEffect(() => {
  setTimeout((r) => {reloadPrices(r=4,4000)},4000);
}, [reloadPrices]); 

*/
