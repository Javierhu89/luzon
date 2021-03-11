import React, { Component } from "react";
import './Seleccion.scss';
import { Redirect } from "react-router-dom";
class Seleccion extends Component {

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
    return <><div onClick={() => this.pasarPagina('/colabora')}> 
    <img className="hello" alt="Hombre sentado en sofá" src={process.env.PUBLIC_URL + '/assets/img/sofa.png'} />
    <h2 className="acompanante">SELECCIONA NIVEL</h2>
    <p className="elige">A través de los niveles de ELALife, te encontrarás con diferentes dificultades y etapas por las que pasa un enfermo, ¿Quieres saber un poco más sobre lo que supone esta enfermedad?</p>
  </div>
    <button className="omitir" onClick={() => this.pasarPagina('/game')}>Omitir</button>
    {this.state.pagina?(<Redirect to={{ pathname: this.state.pagina }}/>):<></> }
  </>
  }
}

export default Seleccion;
