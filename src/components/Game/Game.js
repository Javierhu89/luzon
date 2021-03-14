import React, { Component } from "react";
import './Game.scss';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftwardIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightwardIcon from '@material-ui/icons/ArrowRight';
import Nav from "../Nav/Nav";
class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return <div>
    <h3 className="choose">Elige tu jugador</h3>
    <div className='recuadro'>
      <div className='jugadores'>
        <div className='parrafos'>
        <p className='descripcion'>Buenas tardes, soy María</p>
        <p className='descripcion'>Llevo 6 o 7 meses desde que he empezado a notar síntomas.<span className="negrita"> Leer mas...</span></p>
          </div><img className="iconos" alt="Foto de María" className="foto" src={process.env.PUBLIC_URL + '/assets/img/maria.png'} />
      </div>
      <p className='edad'>María 20 años</p>
    </div>
    <div className='recuadro'>
      <div className='jugadores'>
        <div className='parrafos'>
        <p className='descripcion'>Buenas tardes, soy Javier</p>
        <p className='descripcion'>Llevo 9 meses haciéndome pruebas y sigo sin saber qué es lo que me pasa?!.<span className="negrita"> Leer mas...</span></p>
          </div><img alt="Foto de Javier" className="foto javi" src={process.env.PUBLIC_URL + '/assets/img/javier.png'} />
      </div>
      <p className='edad javiedad'>Javier 35 años</p>
    </div>
      <Nav />
    </div>
  }
}

export default Game;
