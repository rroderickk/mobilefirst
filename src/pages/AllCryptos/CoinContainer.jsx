import React from "react";
import "./index.scss"//!@

const CoinContainer =({ coin })=> { return ( <>

<table>
  <thead>
  <tbody>

<tr>
  <td className="table__top">
    <img style={{width:"6%", marginRight: "8px"}} src={coin.image}/>
    <th className="table__top-right table__right">{coin.id}:</th>
    <td className="price">${coin.current_price}</td>
    {coin.price_change_24h<0
    ? <span className="spanDown"/>
    : <span className="spanUp"/>}
  </td>
</tr>

  </tbody>
  </thead>
</table>

</> ) }; export {  CoinContainer };