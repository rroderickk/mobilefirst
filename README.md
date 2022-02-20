# WELLCOME....
## This file has created with nodeMachine by CheatModes4

[![Deploy](https://vercel.com/button)](https://rroderickk.github.io/mobilefirst)

``` 
<!-- %"#$&#/$# styles "$#&%&/&# -->
1.posicionamiento | position
2.modelo de caja  | Box model
3.Tipografia      | Typhograpy
4.otros           | Others
``` 
``` 
<!-- positioning -->
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  height: 334px;
  text-align: center;

<!-- positioning floatig -->
  position: absolute; //! top bottom left rigth
  top: 270px;
  display: block;
  margin-top: 35px;
  padding: 15px;
  width: 229px;
  height: 48px;

<!-- inside button header -->
	left: calc(50% - 114.5px);
	transform: translate(-50%, -24px);

  <!-- same thing -->
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
  Creo que es más sencillo, queda perfectamente alineado sin necesidad de hacer cálculos nosotros mismos.
```

``` 
<!-- Section two -->
  <table>
    <tr> //tr table row 
      <td> //td table data files       add fetch
    </tr>
  </table>
Me parece que está usando el __ y el – de la metodología BEM al revés, usa el __ para los modificadores cuando debería ser – y viceversa. Confunde un poco.
Asi es, y pues dice que “segun la metodologia BEM” lo cual es incorrecto , pero seguro se le paso a Diego este detalle , igual tambien esta en nosotros mismos ponernos en la tarea de ver como es en si esta metodologia , si la deseamos aplicar
``` 

``` 
<!--coin render  -->
{coin.id=="stellar" ?
<>
<tr>
  <td className="table__bottom">
    <img style={{width:"16%"}} src={coin.image}/>
    <th>{coin.id}: ${coin.current_price}</th>
    {coin.price_change_24h<0
    ? <span className="spanDown"/>
    : <span className="spanUp"/> }
  </td>
</tr>
</>
``` 