
import React from "react";

const Td =({coin})=> { 

return ( <>
{coin.id=="bitcoin" ?
  <>
  <td>
    <img style={{width:"4%"}} src={coin.image}/>
    <p>`{coin.id}: ${coin.current_price} USD</p>
  </td>
  </>
: undefined}
{coin.id=="ethereum" ?
  <>
  <tr>
    <img style={{width:"4%"}} src={coin.image}/>
    <p>`{coin.id}: ${coin.current_price} USD</p>
  </tr>
  </>
: undefined}
{coin.id=="ripple" ?
  <>
  <td>
    <img style={{width:"4%"}} src={coin.image}/>
    <p>`{coin.id}: ${coin.current_price} USD</p>
  </td>
  </>
: undefined}
{coin.id=="stellar" ?
  <>
  <td>
    <img style={{width:"4%"}} src={coin.image}/>
    <p>`{coin.id}: ${coin.current_price} USD</p>
  </td>
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
{/* {<p>{coin.id=="bitcoin" ? `${coin.id}: ${coin.current_price} USD`: null}</p>}
{<p>{coin.id=="ethereum"? `${coin.id}: ${coin.current_price} USD`: null}</p>}
{<p>{coin.id=="ripple"  ? `${coin.id}: ${coin.current_price} USD`: null}</p>}
{<p>{coin.id=="stellar" ? `${coin.id}: ${coin.current_price} USD`: null}</p>} */}










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