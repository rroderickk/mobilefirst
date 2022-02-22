# WELLCOME....
## This file has created with nodeMachine by CheatModes4

[![Deploy](https://vercel.com/button)](https://rroderickk.github.io/mobilefirst)

## Best practices
``` 
<!-- %"#$&#/$# styles "$#&%&/&# -->
1.posicionamiento | position
2.modelo de caja  | Box model
3.Tipografia      | Typhograpy
4.otros           | Others
``` 
## Teoria
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
## Section one 
``` 
<!-- Section two -->
  <table>
    <tbody>
      <tr> //tr table row 
        <td> //td table data files       add fetch
      </tr>
    </tbody>
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
## Mezclas de clases
``` 
<!-- comas,comas en clases -->
Gente, no se olviden que la otra tabla la pueden hacer simplemente poniendole una coma a los estilos de la primera tabla y agregando las clases de la tabla de la izquierda
Por ejemplo, yo simplemente le cambié en las clases de la primera tabla lo que decía “currency” por “commission”. Y todo me salió muy bien. Prácticamente se reescribieron los estilos solo dos veces, si no me equivoco.

Mi CSS se ve así

.main-currency-table, 
.main-commission-table{
    width: 70%;
    min-width: 235px;
    max-width: 500px;
    height: 360px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
}
.main-currency-table.currency-table--title,
.main-commission-table.commission-table--title{
    margin-bottom: 15px;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.3rem;
    color: var(--bitcoin-orange);
}
.main-commission-table.commission-table--title{
    color: var(--secondary-blue);
}
.currency-table--container,
.commission-table--container{
    width: 90%;
    min-width: 230px;
    max-width: 300px;
    height: 250px;
    margin: 0 auto;
}
.currency-table--containertable,
.commission-table--containertable{
    width: 100%;
    height: 100%;
}
.currency-table--containertd,
.commission-table--containertd{
    width: 50%;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;
    color: var(--grey);
    background-color: var(--just-white);
}
.currency-table--container.table__top-left,
.commission-table--container.table__top-left{
    border-radius: 15px000;
}
.currency-table--container.table__top-right,
.commission-table--container.table__top-right{
    border-radius: 015px00;
}
.currency-table--container.table__bottom-left,
.commission-table--container.table__bottom-left{
    border-radius: 00015px;
}
.currency-table--container.table__bottom-right,
.commission-table--container.table__bottom-right{
    border-radius: 0015px0;
}
.currency-table--container.table__right,
.commission-table--container.table__right {
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1.7rem;
    color: #757575;
}
.currency-table--container.down,
.currency-table--container.up {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    background-image: url('./assets/icons/trending-down.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.currency-table--container.up{
    background-image: url('./assets/icons/trending-up.svg');
}
``` 

## Ejercicio con grid
``` 
<!-- GRID layout -->
<!-- html -->
<section class="main--tables-container">
  <div class="main--currency-table">
    <h3 class="currency-table--title">Monedas</h3>
    <div class="grid-currency-table">
      <h4>Bitcoin</h4>
      <p>$ 42862.10 <span class="down"></span></p>
      <h4>Etherum</h4>
      <p>$ 3355.00 <span class="up"></span></p>
      <h4>Bitcoin Cash</h4>
      <p>$ 1085.34 <span class="down"></span></p>
      <h4>Litecoin</h4>
      <p>$ 294.09 <span class="up"></span></p>
    </div>
    <p class="currency-table--date"><b>Actualizado</b> 18 de Mayo 15:35</p>
  </div>
</section>

<!-- CSS -->
.main--currency-table {
  width: 70%;
  min-width: 235px;
  max-width: 500px;
  margin: 0 auto;
}
.main--currency-table .currency-table--title {
  font-size: 1.8rem;
  line-height: 2.3rem;
  font-weight: bold;
  color: var(--bitcoin-orange);
  text-align: left;
  margin-left: 8px;
}
.grid-currency-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  min-width: 230px;
  max-width: 300px;
  margin: 0 auto;
  font-family: "Linter", sans-serif;
}
.grid-currency-table h4 {
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: 500;
  color: var(--grey);
  background-color: var(--just-white);
  text-align: left;
  padding: 10px 12px;
  border: 1px solid var(--off-white);
}
.grid-currency-table p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 12px;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.7rem;
  color: #757575;
  background-color: var(--just-white);
  border: 1px solid var(--off-white);
}
.grid-currency-table p span {
  display: inline-block;
  width: 15px;
  height: 15px;
}
.grid-currency-table p span.up {
  background-image: url("./assets/icons/trending-up.svg");
}
.grid-currency-table p span.down {
  background-image: url("./assets/icons/trending-down.svg");
}
.grid-currency-table h4:first-child {
  border-top-left-radius: 15px;
}
.grid-currency-table p:nth-child(2) {
  border-top-right-radius: 15px;
}
.grid-currency-table h4:nth-last-child(2) {
  border-bottom-left-radius: 15px;
}
.grid-currency-table p:last-child {
  border-bottom-right-radius: 15px;
}
``` 
## Section Two
``` 
<!-- Structure -->
<section className="main-product-detail">

<div>
  <span></span>
  <h2>We create a product without comparison</h2>
  <p>Reliable and designed for daily use</p>
</div>
<section className="product-card-container">
  <article className="product-detail-card">
    <span  className="clock"></span>
    <p     className="product-card-title">Real time</p>
    <p     clasName="product-card-body">Our API takes minute by minute information about the rates that most determine the behavior</p>
  </article>
</section>

</section>

``` 

``` 
<!-- calc -->
Al igual que con el botón, les comparto otras alternativas para posicionar el logo:
El segundo argumento de la función calc() es la mitad del width del elemento.
Usando calc() también en top:

.product-detail__batata-logo {
	position: absolute;
	top: calc(0% - 12.5px);
	left: calc(50% - 20px);
}
Usando translate():

.product-detail__batata-logo {
position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%); /* Que sería lo mismo a poner translate(-20px, -12.5px); */
}
``` 