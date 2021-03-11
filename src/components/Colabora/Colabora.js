import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './Colabora.scss';

class Colabora extends Component {

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
    return <><div onClick={() => this.pasarPagina('/activo')}> 
    <img className="hello" alt="Dos personas colaborando" src={process.env.PUBLIC_URL + '/assets/img/colabora.png'} />
    <h2 className="acompanante">COLABORA</h2>
    <p className="elige">Ayúdanos a través de una donación para la investigación e integración de las persona con ELA, podrás hacerlo a través de PayPal, sincronizar una donación, y compartir con tus amigos tu (nivel o puntuación) y todo lo que has aprendido con nosotros.</p>
  </div>
    <button className="omitir" onClick={() => this.pasarPagina('/game')}>Omitir</button>
    {this.state.pagina?(<Redirect to={{ pathname: this.state.pagina }}/>):<></> }
  </>
  }
}

export default Colabora;
