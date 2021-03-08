import React, { Component } from "react";
import Game1 from "../Game1/Game1";
import Header2 from '../Header2/Header2';
import './Game.scss';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftwardIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightwardIcon from '@material-ui/icons/ArrowRight';
class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       valueicono: '/assets/img/chico.png',
       valuenombre: 'Javier',
       valueedad: 31,
       icono: ['/assets/img/chico.png', '/assets/img/hombre-de-negocios.png', '/assets/img/jefe.png','/assets/img/mujer.png', '/assets/img/nina.png'],
       nombres: ['Javier','Laura','Sofia','Pedro','Julia'],
       edades: [31,36,26,25,45],
       llave: 0
    }
  }
  cambiarPersonajeIzq = () => {
    if(this.state.llave===4){
      this.state.llave=0
    } else {
      this.state.llave += 1;
    }
    this.setState({valueicono: this.state.icono[this.state.llave]})
    this.setState({valuenombre: this.state.nombres[this.state.llave]})
    this.setState({valueedad: this.state.edades[this.state.llave]})
    }
    cambiarPersonajeDer = () => {
      if(this.state.llave===0){
        this.state.llave=4
      } else {
        this.state.llave -= 1;
      }
    this.setState({valueicono: this.state.icono[this.state.llave]})
    this.setState({valuenombre: this.state.nombres[this.state.llave]})
    this.setState({valueedad: this.state.edades[this.state.llave]})
      }

  render() {
    return <>
    <Header2 />
    <p className="combatir"><b>El juego que se creó para combatir la ELA</b></p>
    <p className="difcolor">Para empezar elige un jugador y nivel</p>
    <div className="conjuntoiconos">
      <div className="seleccion">
      <IconButton aria-label="delete" size="medium" onClick={() => {this.cambiarPersonajeIzq()}}><ArrowLeftwardIcon fontSize="large" /></IconButton>
      <img className="iconos" alt="icono1" id="icono1" src={process.env.PUBLIC_URL + this.state.valueicono} /> 
      <IconButton aria-label="delete" size="medium" onClick={() => {this.cambiarPersonajeDer()}}><ArrowRightwardIcon fontSize="large" /></IconButton>
      </div>
      <div className="nomico">
      <p>Nombre: {this.state.valuenombre}</p> <p>Edad: {this.state.valueedad}</p>
      </div>
    </div>
      <div className="seleccion">
      <Link to={'/'}>
        <button className="home">
          Home
        </button>
      </Link>
      <Link to={{ pathname:'/phase1', state: {iconos:this.state.icono}}}>
        {this.state.icono?<button className="phase1">Jugar Phase1</button>:<></>}
      </Link>
    </div>
    </>
  }
}

export default Game;
