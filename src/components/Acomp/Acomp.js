import React, { Component } from "react";
import './Acomp.scss';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

class Acomp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      imagen: ['/assets/img/pana.png', '/assets/img/sofa.png', '/assets/img/colabora.png', '/assets/img/activo.png' ],
      h2: ['ELIGE ACOMPAÑANTE', 'SELECCIONA NIVEL', 'COLABORA', 'MANTENTE AL TANTO' ],
      p: ['Elige tu acompañante a lo largo de este viaje. Te acompañará por la diferentes fases de la ELA y te ayudará a descubir cómo es un día a día con la enfermedad.', 'A través de los niveles de ELALife, te encontrarás con diferentes dificultades y etapas por las que pasa un enfermo, ¿Quieres saber un poco más sobre lo que supone esta enfermedad?', 'Ayúdanos a través de una donación para la investigación e integración de las persona con ELA, podrás hacerlo a través de PayPal, sincronizar una donación, y compartir con tus amigos tu (nivel o puntuación) y todo lo que has aprendido con nosotros.','Te mantendremos al día de las últimas noticias relacionadas con la enfermedad, y sabrás que pasa con tu donación a partir del propio testimonio de los pacientes'],
      bolas: ['/assets/img/Bolas1.png', '/assets/img/Bolas2.png','/assets/img/Bolas3.png', '/assets/img/Bolas4.png' ],
      alts: ['Mujer Saludando', 'Hombre sentado en sofá', 'Dos personas colaborando', 'Mujer Saludando' ],
      pagina:0,
      omitir: null
    }
  }
  

  pasarPagina = () => {
    let sumar = this.state.pagina + 1;
    console.log(sumar)
    this.setState({'pagina': sumar})
  }
  omitirOnboarding = () => {
    console.log("hhhhh")
    this.setState({'omitir': true});
  }
  
  render() {
      return (<div className="board" onClick={this.pasarPagina}> 
      <img className="saludar" alt={this.state.alts[this.state.pagina]} src={process.env.PUBLIC_URL + this.state.imagen[this.state.pagina]} />
      <h2 className="acompanante">{this.state.h2[this.state.pagina]}</h2>
      <p className="elige">{this.state.p[this.state.pagina]}</p>
    
      {this.state.pagina===3?<Link to={'/home'}>
        <div className="sigue">
        <button id="seguimos">
          Siguiente
        </button>
        </div>
      </Link>:<button className="omitir" onClick={this.omitirOnboarding}>Omitir</button>}
      {this.state.omitir?(<Redirect to={{ pathname: '/game' }}/>):<></> }
      <img className="bolas" alt="orden de paginación" src={process.env.PUBLIC_URL + this.state.bolas[this.state.pagina] } />
  </div>)
}}

export default Acomp;
