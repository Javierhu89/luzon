import React, { Component } from "react";
import './Acomp.scss';
import { Redirect } from "react-router-dom";

class Acomp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      imagen: ['/assets/img/pana.png', '/assets/img/sofa.png', '/assets/img/colabora.png', '/assets/img/activo.png' ],
      h2: ['ELIGE ACOMPAÑANTE', 'SELECCIONA NIVEL', 'COLABORA', 'MANTENTE AL TANTO' ],
      p: ['Elige a tu acompañante para este viaje. Irá contigo por la diferentes fases de la ELA y te ayudará a descubir cómo es un día a día con la enfermedad.', 'A través de los niveles de ELALife, te encontrarás con diferentes dificultades y etapas por las que pasa un enfermo de ELA, ¿Quieres saber un poco más sobre lo que supone esta enfermedad?', 'Ayúdanos a través de una donación para la investigación e integración de las personas con ELA, podrás hacerlo a través de PayPal, sincronizar una donación, y compartir con tus amigos tu puntuación y todo lo que has aprendido con nosotros.','Te mantendremos al día de las últimas noticias relacionadas con la enfermedad, y sabrás qué pasa con tu donación a partir del propio testimonio de los pacientes'],
      bolas: ['/assets/img/Bolas1.png', '/assets/img/Bolas2.png','/assets/img/Bolas3.png', '/assets/img/Bolas4.png' ],
      alts: ['Mujer Saludando', 'Hombre sentado en sofá', 'Dos personas colaborando', 'Mujer Saludando' ],
      pagina:0,
      omitir: null,
      home : null,
      luzon: null,
      seleccion: ['saludar','sofa','colabora','activa']
    }
  }
  
  next = () => {
    this.setState({'home': true});
  }
  pasarPagina = () => {
    if (this.state.pagina===3){
      
    } else {
      let sumar = this.state.pagina + 1;
      this.setState({'pagina': sumar})
    }
  }
  retrocederPagina = () => {
    if (this.state.pagina===0){
      this.setState({'luzon':true})
    } else {
      let restar = this.state.pagina - 1;
      this.setState({'pagina': restar})
    }
  }

  omitirOnboarding = () => {
    this.setState({'omitir': true});
  }
  
  render() {
      return (<> <div className="board">
      <div className="agrupar">
      <img id={this.state.seleccion[this.state.pagina]} className='saludar' alt={this.state.alts[this.state.pagina]} src={process.env.PUBLIC_URL + this.state.imagen[this.state.pagina]} />
      </div>
      <h2 className="acompanante">{this.state.h2[this.state.pagina]}</h2>
      <p className="elige">{this.state.p[this.state.pagina]}</p>
    
      {this.state.pagina===3?
        <div className="sigue">
        <button id="seguimos" onClick={this.next}>
          SIGUIENTE
        </button>
        </div>
      :<div className="divOmitir"><button className="omitir" onClick={this.omitirOnboarding}>Omitir</button></div>}
      {this.state.omitir?(<Redirect to={{ pathname: '/game' }}/>):<></> }
      {this.state.home?(<Redirect to={{ pathname: '/game' }}/>):<></> }
      {this.state.luzon?(<Redirect to={{ pathname: '/informacion' }}/>):<></> }
      <img className="bolas" alt="orden de paginación" src={process.env.PUBLIC_URL + this.state.bolas[this.state.pagina] } />
  </div><div className='izquierda' onClick={this.retrocederPagina}></div><div className='derecha' onClick={this.pasarPagina}></div>     
      </>)
}}

export default Acomp;
