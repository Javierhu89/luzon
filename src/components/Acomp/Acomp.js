import React, { Component } from "react";
import './Acomp.scss';
import { Redirect } from "react-router-dom";

class Acomp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pagina:null
    }
  }
  

  pasarPagina = (value) => {
    this.setState({'pagina': value})
  }
  
  render() {
    return <><div onClick={() => this.pasarPagina('/seleccion')}> 
      <img className="saludar" alt="Mujer Saludando" src={process.env.PUBLIC_URL + '/assets/img/pana.png'} />
      <h2 className="acompanante">ELIGE ACOMPAÑANTE</h2>
      <p className="elige">Elige tu acompañante a lo largo de este viaje. Te acompañará por la diferentes fases de la ELA y te ayudará a descubir cómo es un día a día con la enfermedad.</p>
    </div>
      <button className="omitir" onClick={() => this.pasarPagina('/game')}>Omitir</button>
      {this.state.pagina?(<Redirect to={{ pathname: this.state.pagina }}/>):<></> }
    </>
  }
}

export default Acomp;
