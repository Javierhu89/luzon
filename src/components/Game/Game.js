import React, { Component } from "react";
import './Game.scss';
import Nav from "../Nav/Nav";
import { Redirect } from "react-router-dom";
class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cambiarfase: null
    }
  }
  goToPhase1 = () =>{
    this.setState({'cambiarfase':true})
  }
  render() {
    return <>
    <h3 className="choose">Elige tu jugador</h3>
    <div className='recuadro' onClick={this.goToPhase1}>
      <div className='jugadores'>
        <div className='parrafos'>
        <p className='descripcion'>Buenas tardes, soy María</p>
        <p className='descripcion'>Llevo 6 o 7 meses desde que he empezado a notar síntomas.<span className="negrita"> Leer más...</span></p>
          </div><img className="iconos" alt="Foto de María" className="foto" src={process.env.PUBLIC_URL + '/assets/img/maria.png'} />
      </div>
      <p className='edad'>María  20 años</p>
    </div>
    <div className='recuadro black'>
      <div className='jugadores'>
        <div className='parrafos'>
        <p className='descripcion subtitulo black'>Buenas tardes, soy Javier</p>
        <p className='descripcion black'>Llevo 9 meses haciéndome pruebas y sigo sin saber qué es lo que me pasa?!.<span className="negrita"> Leer más...</span></p>
          </div><img alt="Foto de Javier" className="foto javi" src={process.env.PUBLIC_URL + '/assets/img/javier.png'} />
      </div>
      <p className='edad javiedad black'>Javier  35 años</p>
    </div>
    <div className='recuadro black'>
      <div className='jugadores'>
        <div className='parrafos'>
        <p className='descripcion subtitulo black'>Buenas tardes, soy Sara</p>
        <p className='descripcion black'>Nunca supe realmente cuándo empezaron los síntomas.<span className="negrita"> Leer más...</span></p>
          </div><img alt="Foto de Sara" className="foto sara" src={process.env.PUBLIC_URL + '/assets/img/sara.png'} />
      </div>
      <p className='edad saraedad black'>Sara  55 años</p>
    </div>
    <div className='recuadro inferior black'>
      <div className='jugadores'>
        <div className='parrafos'>
        <p className='descripcion subtitulo black'>Buenas tardes, soy David</p>
        <p className='descripcion black'>Han pasado un año desde que tengo la ELA, mi familia se ha gastato este año 20.000€.<span className="negrita"> Leer más...</span></p>
          </div><img alt="Foto de David" className="foto david" src={process.env.PUBLIC_URL + '/assets/img/david.png'} />
      </div>
      <p className='edad davidedad black'>David 23 años</p>
    </div>
      <Nav />
      {this.state.cambiarfase?(<Redirect to={{ pathname: '/maria' , state: {fase: 1} }}/>):<></> }
    </>
  }
}

export default Game;
